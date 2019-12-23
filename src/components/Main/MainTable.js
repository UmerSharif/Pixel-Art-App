import React, { useState } from "react";
import "./MainTable.css";
export default function MainTable() {
  // const TableRow = <tr></tr>;
  //const TableColumn = <td></td>;
  // useState stuff
  const [row, setRow] = useState(10);
  const [col, setCol] = useState(10);
  const [grid, setGrid] = useState([]);

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
        <button type="button" id="reset">
          Reset
        </button>
        <label className="builder">
          <div>Row</div>
          <button type="button" value="10">
            -
          </button>
          <button type="button" value="10">
            +
          </button>
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
          <div>Column</div>
          <button type="button" value="10">
            -
          </button>
          <button type="button" value="10">
            +
          </button>
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
          <button type="button">Clear Grid</button>
          <button type="button" onClick={createGrid}>
            Create Grid
          </button>
        </div>

        <input type="color" />
      </div>

      <table id="pixel-canvas"></table>
    </>
  );
}
