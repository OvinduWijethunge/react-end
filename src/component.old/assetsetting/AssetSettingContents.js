import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';
import Arequest from '../Assetrequest/Assetreqside';
 
// import Assetset from './assetsetting/Assetsetside';
// import Export from './Export';
// import Notfi from './Notification';
// import Log from './Logout';
import Img from '../../logo.svg';

import Own from './assetsettingComponents/OwnAsset';
import Re from './assetsettingComponents/Restore';
import Brek from './assetsettingComponents/Brekdown';
import Gate from './assetsettingComponents/Gatepass';
import Add from './assetsettingComponents/Add';
import Update from './assetsettingComponents/Update';
import Delete from './assetsettingComponents/Delete';
import Findby from './assetsettingComponents/Findby';
import All from './assetsettingComponents/All';



class Sidebar extends Component {
    constructor(props) {
        super(props);
        //this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {
             x : "",
             y : 0
         };
      }

      componentDidMount(){
          this.setState({
              x:this.props.match.params.id
          })
          console.log(this.props.match.params.id)
          console.log(this.state.x)
          
      } 

      renderSelector(e){
        switch(e){
            case "ViewOwn":
                return <Own/>;
            case "Restore":
                return <Re/>;
            case "Break":
                return <Brek/>;
            case "Gate":
                return <Gate/>;
            case "Add":
                return <Add/>;
            case "Update":
                return <Update/>;
            case "Delete":
                return <Delete/>;
            case "Findby":
                return <Findby/>;
            case "All":
                return <All/>;
            // case "Break":
            //     return <img src={Img} width="1000" height="500" />;

        }
      }
    render() { 
        return ( 
            <div>
            api awadjgoaajdakdlvakdsljaaaaaaaaaaaaaaaffffffffffdjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkaaaavadvndkavn
                kadnvavnakdnvkadnvakdvnakvnkavakdva
                vkdanvkadnvkadvnklavn;;avka;nva;dva;dknvdvnadfeigj;jg
                avkdna;nvkalnvnognakdvmklna;dkvnkla;ndk;Arequestava;lvnkal;nba;nbavnoigironalkdnv;(aklnvl
                ;anv;avkalvaa)
                {console.log("im rendering" + this.props.match.params.id)}
                {/* <img src={Img} width="1000" height="500" /> */}
            
            {this.renderSelector(this.props.match.params.id)}
            </div> 
             );
    }
}
 
export default Sidebar;