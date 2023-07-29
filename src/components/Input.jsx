import React, { useState } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  const currentSavingsChangeHandler = (e) => {
    setCurrentSavings(e.target.value);
  };

  const yearlySavingsChangeHandler = (e) => {
    setYearlySavings(e.target.value);
  };

  const expectedReturnChangeHandler = (e) => {
    setExpectedReturn(e.target.value);
  };

  const durationChangeHandler = (e) => {
    setDuration(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const investmentData = {
      currentSavings: currentSavings,
      yearlySavings: yearlySavings,
      expectedReturn: expectedReturn,
      duration: duration,
    };
    setCurrentSavings("");
    setYearlySavings("");
    setExpectedReturn("");
    setDuration("");

    props.onCalculate(investmentData);
  };

  const resetFormHandler = (e) => {
    e.preventDefault();
    setCurrentSavings("");
    setYearlySavings("");
    setExpectedReturn("");
    setDuration("");
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={currentSavingsChangeHandler}
            type="number"
            id="current-savings"
            value={currentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={yearlySavingsChangeHandler}
            type="number"
            id="yearly-contribution"
            value={yearlySavings}
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={expectedReturnChangeHandler}
            type="number"
            id="expected-return"
            value={expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={durationChangeHandler}
            type="number"
            id="duration"
            value={duration}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          onClick={resetFormHandler}
          type="reset"
          className={classes.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Input;
