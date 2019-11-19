import React from 'react';
import ButtonAppBar from '../components/ButtonAppBar';
import LabelBottomNavigation from '../components/LabelBottomNavigation';

export default function AboutPage() {
    return(
        <div>
            <ButtonAppBar/>
            <div className="App-header">
                <h2>About Parker</h2>
            </div>
            <LabelBottomNavigation/>
        </div>
        
    )
}