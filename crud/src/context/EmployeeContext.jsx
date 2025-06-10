import { createContext, useState } from "react";
import tableData from "../data";
const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [employee, setEmployee] = useState(tableData.employeesData);
  const [addUser, setAddUser] = useState(true);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");

  const [editIndex, setEditIndex] = useState(null)

  return (
    <EmployeeContext.Provider
      value={{
        employee,
        setEmployee,
        addUser,
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
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeContext, EmployeeProvider };
