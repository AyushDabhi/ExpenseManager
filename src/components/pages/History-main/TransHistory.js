import React from 'react'
import ExpenseList from '../ExpenseList'
import IncomeList from '../IncomeList'


import './TransHistory.css'



function TransHistory() {
  return (
    <>
   <div className='hhhistory'>
   <h5>View Mode Only</h5>
     <IncomeList/>
     <ExpenseList/>
     </div>
   
    </>

  )
}

export default TransHistory