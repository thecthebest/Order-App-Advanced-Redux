import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const toggleClickHandler = () => {
    dispatch(uiActions.toggle());
  };
  const cartQuantity = useSelector((state) => {
    return state.cart.totalQuantity;
  });
  return (
    <button onClick={toggleClickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
