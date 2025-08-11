import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import leftarrow from "./assets/left-arrow.webp";
import rightarrow from "./assets/right-arrow.png";
import AppleBasket from "./components/AppleBasket";

function App() {
  const totalApple = 10;
  const [rightAppleCount, setRightAppleCount] = useState(0);
  const [leftAppleCount, setLeftAppleCount] = useState(
    totalApple - rightAppleCount
  );

  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      setLeftAppleCount(leftAppleCount + 1);
      setRightAppleCount(rightAppleCount - 1);
    }
  };
  const rightClickHandler = () => {
    if (leftAppleCount > 0) {
      setRightAppleCount(rightAppleCount + 1);
      setLeftAppleCount(leftAppleCount - 1);
    }
  };
  return (
    <div className="flex">
      <AppleBasket count={leftAppleCount} basket={1} />
      <Button
        onClick={leftClickHandler}
        img={rightarrow}
        rotate={180}
        title="leftarrow"
      />
      <Button onClick={rightClickHandler} img={rightarrow} title="rightarrow" />
      <AppleBasket count={rightAppleCount} basket={2} />
    </div>
  );
}

export default App;
