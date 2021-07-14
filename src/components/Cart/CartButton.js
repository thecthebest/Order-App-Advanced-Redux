import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const toggleClickHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button onClick={toggleClickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
