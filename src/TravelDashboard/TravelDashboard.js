import React from 'react';
import '../App.css';
import {Map} from './MapComponent/Map'
import '../styles/Highlight.css'
import './TravelDashboard.css'
import {CountryColor} from '../Interfaces/CountryColor'
class Highlight extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      colorCountries: []
    };
  }

  componentDidMount() {
    fetch(`https://www.travel-advisory.info/api`)
      .then(res => res.json())
      .then(
        result => {
          console.log(result);

          for (const [key, value] of Object.entries(result.data)) {
            if(value.advisory.score < 2.5){
              this.state.colorCountries.push(new CountryColor(value.iso_alpha2, 'green', value.name))

            }
            else if (value.advisory.score > 2.5 && value.advisory.score < 4.5){
              this.state.colorCountries.push(new CountryColor(value.iso_alpha2, 'yellow', value.name))
            }
            else{
              this.state.colorCountries.push(new CountryColor(value.iso_alpha2, 'red', value.name))
            }
            console.log(key);
          }
          console.log(this.state.colorCountries);

         
          
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
    render() {
     
      return (
      <div className='wrapper_travel_dashboard'>
        
        <Map setColorCountries = {this.state.colorCountries} ></Map>
         
    </div>
    );
    }
  }

  export default Highlight;