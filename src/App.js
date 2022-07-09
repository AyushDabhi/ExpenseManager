import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';


import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Settings from './components/pages/Settings';
import SignUp from './components/pages/SignUp';
import AfterHome from './components/pages/AfterHome';

import Header from './components/pages/Header';

import Converter from './components/pages/Converter-main/Converter';
import Group from './components/pages/GrExpense-main/Group';

import MyExpense from './components/pages/MyExpense-main/MyExpense';
import TransHistory from './components/pages/History-main/TransHistory';


function App() {
  return (
    <>

      <Router>

        <Navbar />

        <Switch>
           <Route path='/' exact component={Home} />    
           <Route path='/profile' component={Profile} />
           <Route path='/settings' component={Settings} />
           <Route path='/sign-up' component={SignUp} />
           <Route path='/home2' component={AfterHome} />
           <Route path='/addtransaction'  component={Header} />
           <Route path='/converter-main/converter' component={Converter} />
           <Route path='/group' component={Group} />
           <Route path='/myexpense' component={MyExpense} />
           <Route path='/history-main/history' component={TransHistory} />
          
       </Switch>
       
      </Router>
    </>
  );
}

export default App;
