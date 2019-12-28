import React, { useState } from "react";
import "./MainTable.css";
import { TwitterPicker } from "react-color";
import InputComponent from "../InputComponent/InputComponent";
export default function MainTable() {
  // useState stuff
  //TODO: Add reducer pattern
  const [row, setRow] = useState(10);
  const [col, setCol] = useState(10);
  const [background, setBackground] = useState("#fff");
  const [cellColor, setcellColor] = useState("#9B9B9B");
  const [mouseDown, setmouseDown] = useState(false);

  const handleChange = () => {};

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
    setcellColor("#9B9B9B");
    createGrid();
  };

  // useState stuff
  return (
    <>
      <header>
        <div className="overlay">
          <h1>Pixel Art </h1>
          <h3>Use the Controls To Create and Modify Grid</h3>
          <p>
            To get started create a grid and set the background color and cell
            color or use default. <br /> Hints: Use double click to remove the
            current color of a cell.
          </p>
        </div>
      </header>
      <div className="controls__container">
        <div className="controls_rowcol">
          {/* <label className="builder">
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
          </label> */}
        </div>

        <div className="controls__buttons">
          <button type="button" onClick={createGrid}>
            Create Grid
          </button>
          <button type="button" onClick={handleClearGrid}>
            Clear Grid
          </button>
        </div>
      </div>
      <div className="grid__colorpickers">
        <div className="grid">
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
        </div>
        <div className="controls__colorpickers">
          <div className="background">
            <h3>Choose Background Color</h3>
            <TwitterPicker
              className="twitter__picker"
              color={background}
              onChangeComplete={handleBackgroundColor}
            />
          </div>

          <div className="cell">
            <h3>Choose Cell Color</h3>
            <TwitterPicker
              className="twitter__picker"
              color={cellColor}
              onChangeComplete={handleCellColor}
            />
          </div>
        </div>
      </div>
      <InputComponent row={row} col={col} onChange={handleChange} />
    </>
  );
}
