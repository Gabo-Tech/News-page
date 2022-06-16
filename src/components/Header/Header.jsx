import { Link } from "react-router-dom";
import styles from "./Header.module.sass";
export default function Header() {
  return (
    <div className={styles.header}>
      <nav>
        <div className="logo">
          <img src="public/images/logo.png" alt="" />
        </div>
        <ul id="navigation">
          <li className="selected">
            <span>
              <Link to="/">Home</Link>
            </span>
          </li>
          <li className="menu">
            <span>
              <Link to="/news">News</Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="/form">Form</Link>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
