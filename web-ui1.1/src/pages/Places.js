import React from 'react';
import ButtonAppBar from '../components/ButtonAppBar';
import LabelBottomNavigation from '../components/LabelBottomNavigation';
import { Link } from "react-router-dom";

export default function Places() {
    return(
        <div>
            <ButtonAppBar/>
            <div className="App-header">
                <h3>Places</h3>
                <em>Select a place to view available parking slots</em>
                <br />
                <ul>
                    <li>City Park</li>
                    <li>Supreme Court</li>
                    <li><Link to="/parking-spaces" className="link">Technical University of Kenya 🇰🇪 </Link></li>
                    <li>TRM Mall</li>
                    <li>University of Nairobi</li>
                    <li>Garden City Mall</li>
                </ul>

            </div>
            <LabelBottomNavigation/>
        </div>
    )
}