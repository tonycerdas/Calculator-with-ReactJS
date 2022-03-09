import React, { useState, useEffect } from "react";
import Window from "./Window";
import "../styles/calculator.css";

export default function Calculator() {
  const [value, setValue] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(false);
  const [clean, setClean] = useState(false);

  useEffect(() => {
    try {
      value === "" && operation === ""
        ? console.log("empty")
        : setOperation(operation + value);
      setValue("");
    } catch (error) {
      console.log(error.message);
    }
  }, [value]);

  useEffect(() => {
    try {
      operation === ""
        ? console.log("empty")
        : setOperation(eval(operation).toString());
    } catch (error) {
      console.log(error.message);
    }
  }, [result]);

  useEffect(() => {
    try {
      setValue("");
      setOperation("");
    } catch (error) {
      console.log(error.message);
    }
  }, [clean]);

  return (
    <>
      <section className="container-calculator">
        <div className="flex-container-f">
          <Window value={operation}></Window>
          <button
            className="flex-items-f height"
            onClick={() => setClean(!clean)}
          >
            C
          </button>
        </div>
        <div className="flex-container-s">
          <button className="flex-items-s" onClick={() => setValue(7)}>
            7
          </button>
          <button className="flex-items-s" onClick={() => setValue(8)}>
            8
          </button>
          <button className="flex-items-s" onClick={() => setValue(9)}>
            9
          </button>
          <button className="flex-items-s" onClick={() => setValue("+")}>
            +
          </button>
        </div>
        <div className="flex-container-t">
          <button className="flex-items-t" onClick={() => setValue(4)}>
            4
          </button>
          <button className="flex-items-t" onClick={() => setValue(5)}>
            5
          </button>
          <button className="flex-items-t" onClick={() => setValue(6)}>
            6
          </button>
          <button className="flex-items-t" onClick={() => setValue("-")}>
            -
          </button>
        </div>
        <div className="flex-container-ft">
          <button className="flex-items-ft" onClick={() => setValue(1)}>
            1
          </button>
          <button className="flex-items-ft" onClick={() => setValue(2)}>
            2
          </button>
          <button className="flex-items-ft" onClick={() => setValue(3)}>
            3
          </button>
          <button className="flex-items-ft" onClick={() => setValue("/")}>
            ÷
          </button>
        </div>
        <div className="flex-container-fv">
          <button className="flex-items-fv" onClick={() => setValue(0)}>
            0
          </button>
          <button className="flex-items-fv" onClick={() => setValue(".")}>
            .
          </button>
          <button className="flex-items-fv" onClick={() => setResult(!result)}>
            =
          </button>
          <button className="flex-items-fv" onClick={() => setValue("*")}>
            x
          </button>
        </div>
      </section>
    </>
  );
}
