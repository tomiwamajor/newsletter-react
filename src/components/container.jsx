import FormSection from "./form";
import SuccessMessage from "./successful";
import { useState } from "react";
import classes from "./container.module.css";

function Container() {
  // to switch component from signup to successful
  const [setSuccessful, isSetSuccessful] = useState(false);
  const [email, setEmail] = useState("");

  function handleSuccess() {
    isSetSuccessful(true);
  }

  return (
    <div className={classes.body}>
      {!setSuccessful ? (
        <FormSection setEmail={setEmail} handleSuccess={handleSuccess} />
      ) : (
        <SuccessMessage email={email} />
      )}
    </div>
  );
}

export default Container;
