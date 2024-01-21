import styles from "./Backwrapper.module.css";
function BackWrapper({ children }) {
  return <div className={styles.bodydiv}>{children}</div>;
}

export default BackWrapper;
