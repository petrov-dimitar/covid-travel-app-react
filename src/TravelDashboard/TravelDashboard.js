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
          
// eslint-disable-next-line
          for (const [key, value] of Object.entries(result.data)) {
            if(value.advisory.score < 2.5){
              this.state.colorCountries.push(new CountryColor(value.iso_alpha2, '#d2fdd3', value.name))
              this.setState(statee=>{
              const list=  statee.colorCountries.push(new CountryColor(value.iso_alpha2, '#d2fdd3', value.name))

              return {
                list,
                value: '',
              };
              })

            }
            else if (value.advisory.score > 2.5 && value.advisory.score < 4.5){
              this.state.colorCountries.push(new CountryColor(value.iso_alpha2, '#fff9c6', value.name))
            }
            else{
              this.state.colorCountries.push(new CountryColor(value.iso_alpha2, '#fcdddd', value.name))
            }
           
          }
   

         
          
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
      const { colorCountries } = this.state
      return colorCountries.length ? this.renderMap() : (
      
        <span>Loading wells...</span>
      )
     
    
    }
    renderMap(){
      return (
        
        <div className='wrapper_travel_dashboard'>
          <div className= 'container_width_standard'>
          <h1>Travel planner</h1>
          </div>
      
          <Map setColorCountries = {this.state.colorCountries} ></Map>
          <div className= 'container_width_standard'>
  
          </div>
      </div>
      );
    }
  }

  export default Highlight;