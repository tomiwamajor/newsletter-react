import classes from "./lists.module.css";
import mySvg from "../assets/icon-list.svg";
function Lists() {
  return (
    <ul className={classes.unordered}>
      <li className={classes.listStyle}>
        <img src={mySvg} alt="img" />
        <p className={classes.paragraph}>
          Product discovery and building what matters
        </p>
      </li>
      <li className={classes.listStyle}>
        <img src={mySvg} alt="img" />
        <p className={classes.paragraph}>
          Measuring to ensure updates are a success
        </p>
      </li>
      <li className={classes.listStyle}>
        <img src={mySvg} alt="img" />
        <p className={classes.paragraph}>And much more!</p>
      </li>
    </ul>
  );
}

export default Lists;
