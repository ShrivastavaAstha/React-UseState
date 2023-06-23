import { useState } from "react";

const Reacthook = () => {
  const [counter, setcounter] = useState(0);
  const [level, setlevel] = useState("Low");
  const [currcolor, setcolor] = useState("Green");
  const [textcolor, settxcolor] = useState("Black");
  const [btncolor, setbtncolor] = useState("gray");
  const [countcolor, setcountcolor] = useState("");
  const [bodycolor, setbodycolor] = useState("");

  const handleIncrement = () => {
    if (counter + 1 > 5 && counter + 1 < 10) {
      setlevel("Medium");
      setcolor("Pink");
      settxcolor("Black");
      setbtncolor("Purple");
      setcountcolor("Green");
      setbodycolor("Aliceblue");
    } else if (counter + 1 >= 10) {
      setlevel("High");
      setcolor("Yellow");
      settxcolor("Magenta");
      setbtncolor("coral");
      setcountcolor("Aliceblue");
      setbodycolor("Pink");
    } else if (counter + 1 <= 5) {
      setlevel("Low");
      setcolor("Red");
      settxcolor("Teal");
      setbtncolor("Blue");
      setcountcolor("Orange");
      setbodycolor("Yellow");
    }
    setcounter(counter + 1);
  };
  const handleDecrement = () => {
    if (counter - 1 > 5 && counter - 1 < 10) {
      setlevel("Medium");
      setcolor("Pink");
      settxcolor("Black");
      setbtncolor("Purple");
      setcountcolor("Green");
      setbodycolor("Aliceblue");
    } else if (counter - 1 >= 10) {
      setlevel("High");
      setcolor("Yellow");
      settxcolor("Magenta");
      setbtncolor("Coral");
      setbtncolor("coral");
      setcountcolor("Aliceblue");
      setbodycolor("Pink");
    } else if (counter - 1 <= 5) {
      setlevel("Low");
      setcolor("Red");
      settxcolor("Teal");
      setbtncolor("Blue");
      setcountcolor("Orange");
      setbodycolor("Yellow");
    }
    setcounter(counter - 1);
  };

  return (
    <>
      <div style={{ backgroundColor: bodycolor }}>
        <h1 style={{ color: countcolor }}>The Current Count is {counter}</h1>
        <p style={{ color: textcolor, backgroundColor: currcolor }}>
          Level = {level}
        </p>
        <button
          onClick={() => handleIncrement()}
          style={{ backgroundColor: btncolor }}
        >
          Increment
        </button>
        <button
          onClick={() => handleDecrement()}
          style={{ backgroundColor: btncolor }}
        >
          Decrement
        </button>
      </div>
    </>
  );
};
export default Reacthook;
