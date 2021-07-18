import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect } from 'react';
import Notification from './components/UI/Notification';
import { sendCartData } from './components/store/cart-slice';
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
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cartdb));
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
