import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setCounter((prev) => prev + 1);
  const iRunOnlyOnce = () => { console.log("i run only once") };
  useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    if (counter < 5) {
      console.log("counter is", counter);
    }
  }, [counter]);
  return (
    <div className="App">
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here.." />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
