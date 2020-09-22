import React from 'react';
import '../App.css';
import {Map} from './MapComponent/Map'
import '../styles/Highlight.css'

class Highlight extends React.Component {
    render() {
      return (
      <div>
          <h1>Hello FROM Travel Dashboard</h1>
        <Map></Map>
         
    </div>
    );
    }
  }

  export default Highlight;