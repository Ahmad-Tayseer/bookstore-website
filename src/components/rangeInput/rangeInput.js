import "./rangeInput.css";
// import { useState } from "react";

export default function RangeInput({
  minVal,
  maxVal,
  step,
  setMin,
  setMax,
  min,
  max,
}) {
  return (
    <div>
      <div className="range_container">
        <div className="sliders_control">
          <input
            id="fromSlider"
            type="range"
            min={minVal}
            max={maxVal}
            step={step}
            value={min}
            onChange={(e) =>
              e.target.value <= max ? setMin(e.target.value) : setMax(max)
            }
          />
          <input
            id="toSlider"
            type="range"
            min={minVal}
            max={maxVal}
            step={step}
            value={max}
            onChange={(e) =>
              e.target.value >= min ? setMax(e.target.value) : setMax(min)
            }
          />
        </div>
        <div className="form_control">
          <div className="form_control_container">
            <div className="form_control_container__time">Min</div>
            <h4>{min}</h4>
          </div>
          <div className="form_control_container">
            <div className="form_control_container__time">Max</div>
            <h4>{max}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
