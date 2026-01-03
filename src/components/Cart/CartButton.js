import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);

  function handleClick() {
    dispatch(uiActions.toggle());
  }

  return (
    <button onClick={handleClick} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
