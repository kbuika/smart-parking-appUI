import React, { Component } from 'react';
import LabelBottomNavigation from "../components/LabelBottomNavigation";
import ButtonAppBar from "../components/ButtonAppBar";
import { Card, ListGroup } from "react-bootstrap";
import '../App.css';
import socketIOClient from "socket.io-client";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        response: {},
        endpoint: "http://127.0.0.1:4000/", // server endpoint
     }
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("Data", response => this.setState({ response: response}));
    console.log(this.state.response.slot2);
  }

  render() { 
    return ( 
      <div style={{ backgroundColor: "#e6e6ff"}}>
        <ButtonAppBar/>
        
        <div className="body">
        {/* the parking cards div  */}
       
        <div className="cards left">
        <Card className="empty-card">
        <ListGroup variant="flush">
          <ListGroup.Item>Slot 1</ListGroup.Item>
          
        </ListGroup>
      </Card>

        {this.state.response.slot1 && (
            <Card className="occupied-card">
            <ListGroup variant="flush">
              <ListGroup.Item>Slot 2</ListGroup.Item>
              
            </ListGroup>
          </Card>

        )}

        {!this.state.response.slot1 && (
            <Card className="empty-card">
            <ListGroup variant="flush">
              <ListGroup.Item>Slot 2</ListGroup.Item>
              
            </ListGroup>
          </Card>

        )}

      

      <Card className="empty-card">
        <ListGroup variant="flush">
          <ListGroup.Item>Slot 3</ListGroup.Item>
          
        </ListGroup>
      </Card>

        </div >
        

        <div className="cards right">

            {this.state.response.slot2 && (
                <Card className="occupied-card">
                <ListGroup variant="flush">
                  <ListGroup.Item>Slot 4</ListGroup.Item>
                  
                </ListGroup>
              </Card>
            )}

            {!this.state.response.slot2 && (
                <Card className="empty-card">
                <ListGroup variant="flush">
                  <ListGroup.Item>Slot 4</ListGroup.Item>
                  
                </ListGroup>
              </Card>
            )}
        


      <Card className="empty-card">
        <ListGroup variant="flush">
          <ListGroup.Item>Slot 5</ListGroup.Item>
          
        </ListGroup>
      </Card>

      <Card className="empty-card">
        <ListGroup variant="flush">
          <ListGroup.Item>Slot 6</ListGroup.Item>
          
        </ListGroup>
      </Card>

        </div>
        </div>

                
        {/* <div style={{ position: "fixed", bottom: "0"}}> */}
        <LabelBottomNavigation/>

        {/* </div> */}
      </div>
     );
  }
}
 
export default HomePage;
