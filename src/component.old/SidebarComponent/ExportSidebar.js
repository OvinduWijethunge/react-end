import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';
import Export from '../Export';
class Sidebar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Export/>
            </div>
         );
    }
}
 
export default Sidebar;