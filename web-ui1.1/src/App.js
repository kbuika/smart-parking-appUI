import React, { Component } from 'react';
import LabelBottomNavigation from "./components/LabelBottomNavigation";
import ButtonAppBar from "./components/ButtonAppBar";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div >
        <ButtonAppBar/>
        <div style={{ position: "fixed", bottom: "0"}}>
        <LabelBottomNavigation/>

        </div>
      </div>
     );
  }
}
 
export default App;
