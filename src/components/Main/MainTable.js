import React from "react";
import "./MainTable.css";
export default function MainTable() {
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
          <input type="number" name="height" min="1" max="150" value="10" />
        </label>

        <label className="builder">
          <div>Column</div>
          <button type="button" value="10">
            -
          </button>
          <button type="button" value="10">
            +
          </button>
          <input type="number" name="width" min="1" max="150" value="10" />
        </label>

        <div className="builder">
          <button type="button">Clear Grid</button>
          <button type="button">Create Grid</button>
        </div>

        <input type="color" />
      </div>

      <table className="pixel-canvas"></table>
    </>
  );
}