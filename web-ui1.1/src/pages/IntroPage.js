import React from 'react';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ButtonAppBar from '../components/ButtonAppBar';
import LabelBottomNavigation from '../components/LabelBottomNavigation';


export default function IntroPage() {
    return(
        <div>
            <ButtonAppBar/>
            <div className="App-header">

            <p>Hello are you looking for a parking space?</p>
            <p>🚌 
                
            </p>
            <Link to="/parking-spaces"><Button>Continue</Button></Link>

            </div>
            <LabelBottomNavigation/>
        </div>
        
    )
}
