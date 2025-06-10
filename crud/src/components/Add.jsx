import React, { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import Toast from "./Toast";

const Add = () => {
  const {
    employee,
    setEmployee,
    setAddUser,
    fName,
    lName,
    email,
    salary,
    setFName,
    setLName,
    setEmail,
    setSalary,
    editIndex,
    setEditIndex
  } = useContext(EmployeeContext);

  const [toast, setToast] = useState(false);


  function handleSubmit(e) {
    e.preventDefault();

    const newEmployee = {
      firstName: fName,
      lastName: lName,
      email,
      salary,
      date: new Date().toLocaleDateString(),
    };


    if(editIndex != null) {
      const updatedEmployee = [...employee];
      updatedEmployee[editIndex] = newEmployee;
      setEmployee(updatedEmployee);
      setEditIndex(null);
    }
    else{
    setEmployee((prev) => [...prev, newEmployee]);
    }


    setToast(true);
    setTimeout(() => {
      setToast(false);
      setAddUser((user) => !user);
    }, 2000);

    console.log(newEmployee);
  }

  return (
    <div>
      {toast && <Toast message="Added" />}
      <form onSubmit={handleSubmit}>
        <label>First Name : </label>
        <input type="text" onChange={(e) => setFName(e.target.value)} />
        <br />
        <br />
        <label>Last Name : </label>
        <input type="text" onChange={(e) => setLName(e.target.value)} />
        <br />
        <br />
        <label>Email : </label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <br />
        <label>Salary : </label>
        <input type="text" onChange={(e) => setSalary(e.target.value)} />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Add;
