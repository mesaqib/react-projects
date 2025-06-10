import React from 'react'
import Table from './components/Table'
import { EmployeeProvider } from './context/EmployeeContext'

const App = () => {
  return (
    <div>
      <EmployeeProvider>
      <Table/>
      </EmployeeProvider>
    </div>
  )
}

export default App