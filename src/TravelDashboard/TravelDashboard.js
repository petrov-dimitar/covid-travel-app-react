import React from 'react';
import '../App.css';
import {Map} from './MapComponent/Map'
import '../styles/Highlight.css'
import './TravelDashboard.css'
import {CountryColor} from '../Interfaces/CountryColor'
import Card from '@material-ui/core/Card';
class Highlight extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      colorCountries: []
    };
    
  }

  CreateDashboard (country_name) {
    console.log(country_name)
    fetch(`https://corona.lmao.ninja/v2/historical/${country_name}?lastdays=30`).then(res=>res.json()).then(result=>{
      console.log(result);
    })
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
            // else if (value.advisory.score >= 3.5 && value.advisory.score < 4.5){
            //   this.state.colorCountries.push(new CountryColor(value.iso_alpha2, '#ffe5c6   ', value.name))
            // } 
            else if (value.advisory.score > 4.5){
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
          <div className='heading_wrapper'>
          <h1 className='heading'>Travel planner</h1>
          <span className='sub_heading'>Check where you can travel abroad using the interactive map below.</span>
          </div>
      
          </div>
      

          <Map setColorCountries = {this.state.colorCountries}   CreateDashboard = {this.CreateDashboard} >
       
          </Map>
          <div className= 'container_width_standard'>
          {/* <img  alt='dashb' src='https://www.linkpicture.com/q/dashboard_example.png'></img> */}
          <Card className='dashboard'>
            <h2>[Country]</h2>
            <span>code:</span>
            <div className='dashboard_left_container'>
            <div className= 'weather_container'>

            </div>

            <div className='trend_container'>

            </div>
            </div>
            <div className='dashboard_right_container'>
            <div className='news_container'>

            </div>
            </div>
          </Card>
          </div>

         
      </div>
      );
    }
  }

  export default Highlight;