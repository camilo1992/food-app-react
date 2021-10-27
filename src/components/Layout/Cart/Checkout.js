import classes from "./Checkout.module.css";
import { useRef, useState } from "react";

const checkData = (value) => {
  const checkEntryData = (data) => data.trim() !== "";
  const checkEntryPostal = (postal) => ("" + postal).length === 5;

  let valid;
  console.log(typeof value === "string");
  if (typeof value === "number") {
    valid = checkEntryPostal(value);
  } else {
    valid = checkEntryData(value);
  }

  return { valid, value };
};

const Checkout = (props) => {
  const [validInputs, setValidInputs] = useState({
    name: true,
    city: true,
    postal: true,
    street: true,
  });
  const inputName = useRef();
  const inputStreet = useRef();
  const inputPostal = useRef();
  const inputCity = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const { valid: validName, value: name } = checkData(
      inputName.current.value
    );
    const { valid: validStreet, value: street } = checkData(
      inputStreet.current.value
    );
    const { valid: validPostal, value: postal } = checkData(
      +inputPostal.current.value
    );
    const { valid: validCity, value: city } = checkData(
      inputCity.current.value
    );

    setValidInputs({
      name: validName,
      city: validCity,
      street: validStreet,
      postal: validPostal,
    });

    if (validCity && validName && validPostal && validStreet) {
      props.onValidUserData({
        name: name,
        street: street,
        postal: postal,
        city: city,
      });
    }
  };

  const nameclasses = `${classes.control} ${
    validInputs.name ? "" : classes.invalid
  }`;
  const cityclasses = `${classes.control} ${
    validInputs.city ? "" : classes.invalid
  }`;
  const postalclasses = `${classes.control} ${
    validInputs.postal ? "" : classes.invalid
  }`;
  const streetclasses = `${classes.control} ${
    validInputs.street ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameclasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={inputName} />
        {!validInputs.name && <p>Please enter a valid name.</p>}
      </div>
      <div className={streetclasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={inputStreet} />
        {!validInputs.street && <p>Please enter a valid street.</p>}
      </div>
      <div className={postalclasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="number" id="postal" ref={inputPostal} />
        {!validInputs.postal && (
          <p>Please enter a valid postal (5 digits code).</p>
        )}
      </div>
      <div className={cityclasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={inputCity} />{" "}
        {!validInputs.city && <p>Please enter a valid city.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
