import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';
import Adde from './Add';
import Updatee from './Update';

class Maintool extends Component {
    state = {  }
    render() { 
        return ( 
        <Router>
        <div>
        <Route path="/EmployeeSetting/Add"   component={Adde}/>
        <Route path="/EmployeeSetting/Update"   component={Updatee}/>
        {/* <adde/>
        <Updatee/> */}
        </div>
        </Router>
         );
    }
}
 
export default Maintool;