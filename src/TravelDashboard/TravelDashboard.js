import React from 'react';
import '../App.css';
import {Map} from './MapComponent/Map'
import '../styles/Highlight.css'
import './TravelDashboard.css'

class Highlight extends React.Component {
    render() {
      return (
      <div className='wrapper_travel_dashboard'>
        
        <Map></Map>
         
    </div>
    );
    }
  }

  export default Highlight;