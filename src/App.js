import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect } from 'react';
import { uiActions } from './components/store/ui-slice';
import Notification from './components/UI/Notification';
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    return state.ui.cartIsVisible;
  });

  const cartdb = useSelector((state) => {
    return state.cart;
  });
  const notifications = useSelector((state) => {
    return state.ui.notification;
  });

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification(
        {
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!'
        }
      ));
      const response = await fetch('https://udemy-9885a-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cartdb),
        }
      );
      if (!response.ok) {
        throw new Error('Sending cart data failed');
      }
      dispatch(uiActions.showNotification(
        {
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!'
        }
      ));
    };
    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData().catch((error) => {
      dispatch(uiActions.showNotification(
        {
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!'
        }
      ));
    });
  }, [cartdb, dispatch]);
  return (
    <Fragment>
      {notifications && <Notification
        status={notifications.status}
        title={notifications.title}
        message={notifications.message}
      />}
      <Layout>
        {cart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
