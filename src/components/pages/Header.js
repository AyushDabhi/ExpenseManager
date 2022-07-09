import React from "react";

import Balance from "./Balance";
import IncomeList from "./IncomeList";
import ExpenseList from "./ExpenseList";
import AddTransaction from "./AddTransaction";
import { GlobalContextProvider } from "../context/GlobalState";

import '../Add.css'



const Header = () => {
  return (
   
    <GlobalContextProvider>
      <div className="container11">
        <div className="app-wrapper11">
        <div className="headerrr">
        <h1>Add <br/> Transaction</h1>
      </div>
          <Balance />
          <IncomeList />
          <ExpenseList />
          <AddTransaction />
        </div>
      </div>
      
    </GlobalContextProvider>
  );
};

export default Header;
