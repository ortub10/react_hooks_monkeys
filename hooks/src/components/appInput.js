import { useRef, useState } from "react";

export default function AppInput(props) {
  let color = useRef();
  let selectColor = useRef();
  let [bg, setBg] = useState("");
  let [fontColor, setFontColor] = useState("blue");

  const changeColor = () => {
    setBg(color.current.value);
  };

  return (
    <div style={{ background: bg }} className="col-lg-6 border p-3">
      <h2>Enter your favorite color</h2>
      <input ref={color} type="text" className="form-control" />
      <button onClick={changeColor} className="btn btn-info mt-3">
        Chane color
      </button>
      <hr />
      <h3 style={{ color: fontColor }}>Choose font color: </h3>
      <select
        onChange={() => setFontColor(selectColor.current.value)}
        ref={selectColor}
        className="form-select"
      >
        <option value="blue">blue</option>
        <option value="green">green</option>
        <option value="red">red</option>
      </select>
    </div>
  );
}
