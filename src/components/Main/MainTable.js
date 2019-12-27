import React, { useState } from "react";
import "./MainTable.css";
import { SketchPicker } from "react-color";
export default function MainTable() {
  // useState stuff
  //TODO: Add reducer pattern
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

  const handleMouseStateEnding = () => {
    setmouseDown(false);
  };

  const removeCellColor = event => {
    event.target.style.backgroundColor = "";
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

  const removeGrid = () => {
    const canvas = document.querySelector("#pixel-canvas");
    while (canvas.firstChild) {
      canvas.firstChild.remove();
    }
  };

  const handleClearGrid = () => {
    removeGrid();
    setBackground("#fff");
    setcellColor("#000");
    createGrid();
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
          <button type="button" onClick={handleClearGrid}>
            Clear Grid
          </button>
        </div>
      </div>
      <SketchPicker
        color={background}
        onChangeComplete={handleBackgroundColor}
      />

      <SketchPicker color={cellColor} onChangeComplete={handleCellColor} />
      <table
        id="pixel-canvas"
        style={{ backgroundColor: background }}
        onMouseDown={handleCellColorOnClick}
        onMouseMove={mouseDown ? handleCellColorOnClick : null}
        onMouseUp={handleMouseStateEnding}
        onMouseLeave={handleMouseStateEnding}
        onTouchStart={handleCellColorOnClick}
        onTouchMove={mouseDown ? handleCellColorOnClick : null}
        onTouchEnd={handleMouseStateEnding}
        onDoubleClick={removeCellColor}
      ></table>
    </>
  );
}
