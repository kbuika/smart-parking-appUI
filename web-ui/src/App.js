import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav, Card, ListGroup} from "react-bootstrap";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      color: "red"
     }
  }
  render() { 
    return ( 
      <div className="App">
      {/* header  */}
          <Navbar bg="primary" variant="dark" style={{ width: "100%"}}>
            <Navbar.Brand href="#home">Parker</Navbar.Brand>
          </Navbar>

      <div style={{ marginTop: "5rem", marginLeft: "1.5rem", marginRight: "1.5rem"}}>
          <div style={{ float: "left"}}>
          <Card style={{ width: '6rem' }}>
            <ListGroup variant="flush">
              <ListGroup.Item style={{ height: "10rem"}}></ListGroup.Item>
              <ListGroup.Item style={{ height: "10rem"}}></ListGroup.Item>
              <ListGroup.Item style={{ height: "10rem"}}></ListGroup.Item>
            </ListGroup>
          </Card>
          </div>

        
         
          <div style={{ float: "right"}}>
          <Card style={{ width: '6rem' }}>
            <ListGroup variant="flush">
              <ListGroup.Item style={{ height: "10rem"}}></ListGroup.Item>
              <ListGroup.Item style={{ height: "10rem"}}></ListGroup.Item>
              <ListGroup.Item style={{ height: "10rem"}}></ListGroup.Item>
            </ListGroup>
          </Card>
          </div>
      </div>
         


        {/* footer  */}
          <Navbar bg="primary" variant="dark" fixed="bottom">
            <Nav className="mr-auto">
              <Nav.Link href="#home" style={{ marginLeft: "2rem",color: "white" }}>Home</Nav.Link>
              <Nav.Link href="#about" style={{ marginLeft: "5rem", color: "white"}}>About</Nav.Link>
            </Nav>
          </Navbar>
      
    </div>
     );
  }
}
 
export default App;

