import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";
import './Map.css';
import Button from '@material-ui/core/Button';
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
// } from "react-simple-maps"
// import "./styles.css";
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

import MapChart from "./MapChart";
// const handleChangeGeo = (geo) => 
//   {
//     console.log(geo.properties.NAME);
//     setCountry(geo.properties.NAME);
//   }
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import Toolbar from '@material-ui/core/Toolbar';
import { useRef } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import CloseIcon from '@material-ui/icons/Close';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   



// import '../../index.css'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '20px auto !important',
    display: 'inline-block',
  
    
  },
  media: {
    height: 140,
  },
  CardMedia:{
  
  }
});
export function Map(props) {
  
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)
  const [content, setContent] = useState("");

  const [country, setCountry] = useState("");
  const [listCountries, setlistCountries] = useState([]);
  const [pressedCountry, setChosenCountry] = useState([{}]);
  const [countryImages, setCountryImages] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showDashboard, setShowDashboard] = React.useState(false);
  // const [colorCoun,setColorCountries]
  // const [isCountrySelected, setIsCountrySelected] = React.useState(false);
  // const [capital, setCapitalName] = useState([{}]);
  const classes = useStyles();
  const legend_colors = [
    {code: 'Low Risk', color:'#d2fdd3', advisory: 'Usually this is an indicator that travelling in this country is relatively safe. Higher attention is advised with values > 1.' },
    {code: 'Medium Risk', color:'#fff9c6', advisory: 'Travel should be reduced to a necessary minimum and be conducted with good preparation and high attention.'},
    {code: 'Extreme Warning', color:'#fcdddd', advisory: 'You should avoid any trips. A high warning index is a sound indicator of potential harm to your health and well-being.'}
  ] 
  useEffect(() => {
    
    // Update the document title using the browser API
  
  });

  return (
    <div className='wrapper_main'>
  
    <div className='map_wrapper'>
    <div className= 'container_width_standard'>
      <Card className='legend'>
      <h1 className='header_legend'>   legend </h1>
        {legend_colors.map(code_object=>{
          return (<div className='legend_code_wrapper' key={code_object.code}>
            <li>  <span className='code_icon' style={{ background: code_object.color }}></span><span className='legend_code_content'>{code_object.code}</span><span className='legend_code_content'>{code_object.advisory}</span></li>
          
          </div>)
        })}
    

      </Card>
  
  </div>
         <Autocomplete
         className='autcomplete'
      id="combo-box-demo"
      options={listCountries}
      getOptionLabel={(option) => option.properties.NAME}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
    />
      <MapChart setColorCountries ={props.setColorCountries} setTooltipContent={setContent} setCountryConent = {setCountry} setListCountriesConent= {setlistCountries} setChosenCountryJSON = {setChosenCountry} setList_image_country = {setCountryImages}>
     
      </MapChart>
      <ReactTooltip>{content}</ReactTooltip>
{
  country &&
  
      <Card  className='country_info_right'>
     <Button className = 'close_window' onClick={()=>{setCountry("")}} ><CloseIcon/></Button>
        <CardMedia
          className={classes.media}
          image= {countryImages[1]}
          title= {country}
        />
        <CardContent>
        <div className=''>
      
      <div className='country_name'>{country}</div>  <img className='flag_image' alt='FLAG' src={"https://www.countryflags.io/" + pressedCountry[0].alpha2Code +  "/flat/64.png"} ></img>
       <div><span className='label'>CAPITAL:</span> <span className='value'>{pressedCountry[0].capital }</span> </div>
       <div><span className='label'>COUNTRY CODE:</span> <span className='value'>{pressedCountry[0].alpha2Code }</span></div>
       <div><span className='label'>POPULATION:</span ><span className='value'>{ Math.round(pressedCountry[0].population / 1000000) + ' Million' }</span></div>
       
       </div>
        </CardContent>
     
      <CardActions>
      
        <Button className='action_button_card design_brown_main' variant="contained" color="primary" onClick={()=>{ 
          setShowDashboard(false);
          setLoading(true);
          setTimeout(()=>{setShowDashboard(true); setLoading(false); executeScroll()}, 3000)
          props.CreateDashboard(country);
        }} > COVID INFO FOR {country} </Button>
       
       <Button className='action_button_card design_brown_main' variant="contained" color="primary" onClick={()=>{ 
         
          props.CreateDashboard(country);
        }} > COVID INFO FOR- {country} </Button>
      </CardActions>
    </Card>
}
    <div>
          
         
        
        </div>

       
        {loading &&   <Card className='wrapper_loading'><CircularProgress size={68} className='progress_bar' /> </Card>}
           
      
    </div>
    
    <div className= 'dashboard'>

    {showDashboard && <img ref={myRef} alt='dashb' src='https://www.linkpicture.com/q/dashboard_example.png'></img>}
    </div>
    </div>
  );
}

