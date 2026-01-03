import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const total = useSelector((state) => state.cart.total);
  const price = useSelector((state) => state.cart.price);
  const quantity = useSelector((state) => state.cart.quantity);
  const showItem = useSelector((state) => state.cart.isShowItem);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {showItem && (
        <ul>
          <CartItem
            item={{
              title: "Test Item",
              quantity: quantity,
              total: total,
              price: price,
            }}
          />
        </ul>
      )}
    </Card>
  );
};

export default Cart;
