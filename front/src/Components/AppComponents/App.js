
import styles from "../styles/App.module.css";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <div className="App">
      <div className={styles.header}>
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
