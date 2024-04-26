import classes from "./form.module.css";
import { useState } from "react";
import Description from "./description";
import Lists from "./lists";
import Illustration from "./illustration";

function FormSection({ setEmail, handleSuccess }) {
  // const [email, isEmail] = useState("");

  function btnHandler(event) {
    event.preventDefault();
    handleSuccess();
  }

  return (
    <div className={classes.body}>
      <div className={classes.leftside}>
        <Description />
        <Lists />
        <form className={classes.formStyle}>
          <label htmlFor="email" className={classes.labelTitle}>
            Email address
          </label>
          <input
            type="email"
            id="email"
            className={classes.email}
            aria-label="Email"
            placeholder="email@company.com"
            name="mail"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
          <button onClick={btnHandler} className={classes.btn}>
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
      <div>
        <Illustration />
      </div>
    </div>
  );
}

export default FormSection;
