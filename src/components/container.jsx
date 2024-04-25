import FormSection from "./form";
import SuccessMessage from "./successful";
import { useState } from "react";
import classes from "./container.module.css";

function Container() {
  // to switch component from signup to successful
  const [setSuccessful, isSetSuccessful] = useState(false);

  return (
    <div className={classes.body}>
      {!setSuccessful ? <FormSection /> : <SuccessMessage />}
    </div>
  );
}

export default Container;
