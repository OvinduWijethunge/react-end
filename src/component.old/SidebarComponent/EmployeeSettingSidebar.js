import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';
import Employee from '../EmployeeSetting/Employeeside';
class Sidebar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Employee/>
            </div>
         );
    }
}
 
export default Sidebar;