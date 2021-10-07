import classes from "./MealItemForm.module.css";
import Input from "../../../UI/Input/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [validAmount, setValidAmount] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const amountEntered = amountInputRef.current.value;
    const amountEnteredNumber = +amountEntered;

    if (
      amountEntered.trim().length === 0 ||
      amountEnteredNumber > 5 ||
      amountEnteredNumber < 1
    ) {
      setValidAmount(false);
      return;
    }

    props.onSendAmount(amountEnteredNumber);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          type: "number",
        }}
      />
      <button>+ Add</button>
      {!validAmount && <p>Please enter a valid amount. (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
