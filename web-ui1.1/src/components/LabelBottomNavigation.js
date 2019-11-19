import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import PlaceIcon from '@material-ui/icons/Place';


export default function LabelBottomNavigation() {
  
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <BottomNavigation value={value} onChange={handleChange} >
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} style={{ marginLeft: "1rem"}} href="/parking-spaces"/>
      <BottomNavigationAction label="About" value="about" icon={<InfoIcon />}  style={{ marginLeft: "2rem"}} href="/about-page"/>
      <BottomNavigationAction label="Places" value="places" icon={<PlaceIcon />}  style={{ marginLeft: "2rem"}} href="/places"/>

    </BottomNavigation>
  );
}
