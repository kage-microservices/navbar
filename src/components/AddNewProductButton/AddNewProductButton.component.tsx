import { actions } from "@kage/store";
import { Button } from "@kage/ui-kit";
import { useDispatch } from "react-redux";

let count = 0;
export const AddNewProductButton = () => {
  const dispatch = useDispatch();

  const addNewProducts = () => {
    dispatch(
      actions.products.addProduct({
        name: "random product " + count,
        price: Math.floor(Math.random() * 100),
      })
    );
    count++;
  };

  return <Button onClick={() => addNewProducts()}>Add new product</Button>;
};
