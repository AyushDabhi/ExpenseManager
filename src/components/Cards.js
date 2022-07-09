import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/MyExpense.jpg'
              text='My Expenses'
              label='Expenses'
              path='/myexpense'
            />
            <CardItem
              src='images/Add transaction.jpg'
              text='Add Transactions'
              label='Transactions'
              path='/addtransaction'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Group.jpg'
              text='Group Expense'
              label='Group'
              path='/group'
            />
            <CardItem
            src='images/converter.jpg'
            text='Currency Converter'
            label='Convert'
            path='/converter-main/converter'
          />
            <CardItem
              src='images/transaction-history2.jpg'
              text='Transaction History'
              label='History'
              path='/history-main/history'
            />
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
