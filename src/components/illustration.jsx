import illustrationImg from "../assets/illustration-sign-up-desktop.svg";
import classes from "./illustration.module.css";

function Illustration() {
  return (
    <div className={classes.illustrate}>
      <img src={illustrationImg} />
    </div>
  );
}

export default Illustration;
