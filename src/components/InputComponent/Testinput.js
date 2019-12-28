import React, { useState } from "react";
import "./InputComponent.css";
export default function InputComponent() {
  const [row, setRow] = useState(10);
  const [col, setCol] = useState(10);

  const rowDecrease = () => {
    setRow(row - 1);
  };
  const rowIncrease = () => {
    setRow(row + 1);
  };

  const colDecrease = () => {
    setCol(col - 1);
  };
  const colIncrease = () => {
    setCol(col + 1);
  };
  return (
    <>
      <div className="input__controls">
        <div className="row__inputs">
          <h4>Rows</h4>
          <div className="def-number-input number-input">
            <button onClick={rowDecrease} className="minus"></button>
            <input
              className="quantity"
              name="quantity"
              value={row}
              onChange={e => setRow(e.currentTarget.value)}
              type="number"
              min="1"
              max="40"
            />
            <button onClick={rowIncrease} className="plus"></button>
          </div>
        </div>
        <div className="col__inputs">
          <h4>Columns</h4>
          <div className="def-number-input number-input">
            <button onClick={colDecrease} className="minus"></button>
            <input
              className="quantity"
              name="quantity"
              value={col}
              onChange={e => setCol(e.currentTarget.value)}
              type="number"
              min="1"
              max="40"
            />
            <button onClick={colIncrease} className="plus"></button>
          </div>
        </div>
      </div>
    </>
  );
}
