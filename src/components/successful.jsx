import classes from "./form.module.css";
import homeClasses from "./successful.module.css";
import success from "../assets/icon-success.svg";

function SuccessMessage({ email, goHome }) {
  function btnClose() {
    goHome();
  }

  return (
    <div className={homeClasses.container}>
      <div className={homeClasses.imgBody}>
        <img src={success} alt="Success icon" />
      </div>
      <p className={homeClasses.paragraph}>
        Thanks for subscribing! A confirmation email has been sent to{" "}
        <span className={homeClasses.email}>{email}</span>. Please open it and
        click the button inside to confirm your subscription.
      </p>
      <button onClick={btnClose} className={classes.btn}>
        Dismiss message
      </button>
    </div>
  );
}
export default SuccessMessage;
