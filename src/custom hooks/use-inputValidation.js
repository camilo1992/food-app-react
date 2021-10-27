const useValidation = (Input)=> {
    
    const checkEntryData = (data) => data.trim() !== "";
    const checkEntryPostal = (postal) => postal.trim().length === 5;

    const value = input.current.value;
    let valid;
        if (typeof(value) === "number" ){
            valid = checkEntryPostal(value)
        }else{
            valid = checkEntryData(value)
        };

        return {valid,value};
    // const street = inputStreet.current.value;
    // const postal = inputPostal.current.value;
    // const city = inputCity.current.value;

    const validName = checkEntryData(name);
    const validStreet = checkEntryData(street);
    const validCity = checkEntryData(city);
    const validPostal = checkEntryPostal(postal);

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
}

export default useValidation;