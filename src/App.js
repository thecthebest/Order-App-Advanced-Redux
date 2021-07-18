import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect } from 'react';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './components/store/cart-actions';
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
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cartdb.changed) {
      dispatch(sendCartData(cartdb));
    }
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
