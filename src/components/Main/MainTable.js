import React, { useState } from "react";
import "./MainTable.css";
import { SketchPicker } from "react-color";
export default function MainTable() {
  // useState stuff
  const [row, setRow] = useState(10);
  const [col, setCol] = useState(10);
  const [background, setBackground] = useState("#fff");
  const [cellColor, setcellColor] = useState("#000");
  const [mouseDown, setmouseDown] = useState(false);

  const handleBackgroundColor = color => {
    setBackground(color.hex);
  };

  const handleCellColor = color => {
    setcellColor(color.hex);
  };

  const handleCellColorOnClick = event => {
    event.target.style.backgroundColor = cellColor;
    setmouseDown(true);
  };

  const handleMouseStateOnUp = () => {
    setmouseDown(false);
  };

  const createGrid = () => {
    const canvas = document.querySelector("#pixel-canvas");
    canvas.innerHTML = "";
    for (let i = 1; i <= row; i++) {
      const tr = document.createElement("tr");
      canvas.appendChild(tr);
      for (let k = 1; k <= col; k++) {
        const td = document.createElement("td");
        tr.append(td);
      }
    }
  };

  // useState stuff
  return (
    <>
      <div className="controls">
        <label className="builder">
          <input
            type="number"
            name="Trow"
            min="1"
            max="150"
            value={row}
            onChange={e => setRow(e.currentTarget.value)}
          />
        </label>

        <label className="builder">
          <input
            type="number"
            name="Tcol"
            min="1"
            max="150"
            value={col}
            onChange={e => setCol(e.currentTarget.value)}
          />
        </label>

        <div className="builder">
          <button type="button" onClick={createGrid}>
            Create Grid
          </button>
          <button type="button">Clear Grid</button>
          <button type="button" id="reset">
            Reset
          </button>
        </div>
      </div>
      <SketchPicker
        color={background}
        onChangeComplete={handleBackgroundColor}
      />
      Cell:
      <SketchPicker color={cellColor} onChangeComplete={handleCellColor} />
      <table
        id="pixel-canvas"
        style={{ backgroundColor: background }}
        onMouseDown={handleCellColorOnClick}
        onMouseMove={mouseDown ? handleCellColorOnClick : null}
        onMouseUp={handleMouseStateOnUp}
      ></table>
    </>
  );
}
