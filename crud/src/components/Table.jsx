import React, { useContext, useState } from "react";
// import tableData from "../data";
import Add from "./Add";
import { EmployeeContext } from "../context/EmployeeContext";

const Table = () => {
  const {
    employee,
    setEmployee,
    addUser,
    setAddUser,
    setFName,
    setLName,
    setEmail,
    setSalary,
    setEditIndex,
  } = useContext(EmployeeContext);

  function addEmp() {
    setAddUser((e) => !e);
  }

  function handleEdit(index) {
    const emp = employee[index];
    setFName(emp.firstName);
    setLName(emp.lastName);
    setEmail(emp.email);
    setSalary(emp.salary);
    setEditIndex(index);
    setAddUser(false);
  }

  function handleDelete(index) {
    const confirmDelete = window.confirm("Are you sure you want to delete");
    if (confirmDelete) {
      const updated = [...employee];
      updated.splice(index, 1);
      setEmployee(updated);
    }
  }

  return (
    <div className="main">
      <button onClick={addEmp}>
        {addUser ? "Add Employee" : "Show Employee"}
      </button>
      {addUser ? (
        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Email</td>
              <td>Salary</td>
              <td>Date</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {employee.length === 0 ? (
              <tr>
                No Data Found
              </tr>
            ) : (
              employee.map((emp, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                  <td>{emp.email}</td>
                  <td>{emp.salary}</td>
                  <td>{emp.date}</td>
                  <td>
                    <button onClick={() => handleEdit(i)}>Edit</button>
                    <button onClick={() => handleDelete(i)}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      ) : (
        <Add />
      )}
    </div>
  );
};

export default Table;
