import "./styleForm.css";
import Models from "./Models";
import { useState } from "react";
export default function Form() {
  const [errorMessage, seterrorMessage] = useState(null);
  const [showModels, setShowModels] = useState(false);
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumper: "",
    age: "",
    isGEnder: "",
    isEmployee: false,
    salary: "",
  });

  const btnisDisblay =
    loanInputs.name === "" ||
    loanInputs.phoneNumper === "" ||
    loanInputs.age === "" ||
    loanInputs.isGEnder === "" ||
    loanInputs.isEmployee === false ||
    loanInputs.salary === "";
  function handelisSubmit(event) {
    event.preventDefault();
    seterrorMessage(null);
    if (loanInputs.age < 18 || loanInputs.age > 100) {
      seterrorMessage("The Age is Not Allowed");
    } else if (loanInputs.phoneNumper.length !== 10) {
      seterrorMessage("The Phone Number Fromat is  Incorrect");
    }

    setShowModels(true);
  }
  function handelDivClick() {
    if (showModels) {
      setShowModels(false);
    }
  }
  return (
    <div
      onClick={handelDivClick}
      className="flex "
      style={{ marginTop: "40px" }}
    >
      <form className="flex od-bag">
        <h1>Requesting A Loan</h1>
        <hr />
        <label>Name:</label>
        <input
          value={loanInputs.name}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, name: event.target.value });
          }}
          type="text"
          placeholder="Please Enter Your Name"
        />
        <label>Phone Number:</label>
        <input
          value={loanInputs.phoneNumper}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, phoneNumper: event.target.value });
          }}
          type="number"
          placeholder="Please Enter Your Number"
        />
        <label>Age:</label>
        <input
          value={loanInputs.age}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, age: event.target.value });
          }}
          type="number"
          placeholder="Please Enter Your Age"
        />
        <label>What Are you Gender:</label>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <input
            value="Male"
            checked={loanInputs.isGEnder === "Male"}
            onChange={(event) => {
              setLoanInputs({ ...loanInputs, isGEnder: event.target.value });
            }}
            style={{ cursor: "pointer" }}
            type="radio"
            name="Gander"
          />
          <b>Male</b>
          <input
            value="Fmale"
            checked={loanInputs.isGEnder === "Fmale"}
            onChange={(event) => {
              setLoanInputs({ ...loanInputs, isGEnder: event.target.value });
            }}
            style={{ cursor: "pointer" }}
            type="radio"
            name="Gander"
          />
          <b>Fmale</b>
        </div>

        <label>Are you Employee:</label>
        <input
          checked={loanInputs.isEmployee}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, isEmployee: event.target.checked });
          }}
          style={{ cursor: "pointer" }}
          type="checkbox"
        />
        <label>Please Enter Your Salary</label>
        <select
          value={loanInputs.salary}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, salary: event.target.value });
          }}
        >
          <option disabled={true}></option>
          <option>6000$</option>
          <option>5000$</option>
          <option>4000$</option>
          <option>3000$</option>
          <option>2000$</option>
          <option>1000$</option>
        </select>
        <button
          className={btnisDisblay ? "disable" : ""}
          onClick={handelisSubmit}
          disabled={btnisDisblay}
        >
          Submit
        </button>
      </form>
      <Models errormessage={errorMessage} isvisbelty={showModels} />
    </div>
  );
}
