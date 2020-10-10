import React, { useState } from "react";
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

import MapChart from "./MapChart";
// const handleChangeGeo = (geo) => 
//   {
//     console.log(geo.properties.NAME);
//     setCountry(geo.properties.NAME);
//   }

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
export function Map() {
  const [content, setContent] = useState("");
  const [country, setCountry] = useState("");
  const [listCountries, setlistCountries] = useState([]);
  const [pressedCountry, setChosenCountry] = useState([{}]);
  // const [capital, setCapitalName] = useState([{}]);

  return (
    <div className='map_wrapper'>
         <Autocomplete
      id="combo-box-demo"
      options={listCountries}
      getOptionLabel={(option) => option.properties.NAME}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
    />
      <MapChart setTooltipContent={setContent} setCountryConent = {setCountry} setListCountriesConent= {setlistCountries} setChosenCountryJSON = {setChosenCountry} >
     
      </MapChart>
      <ReactTooltip>{content}</ReactTooltip>

     
     
      <div className='country_info_right'>
      
      <div className='country_name'>{country}</div>  <img className='flag_image' alt='FLAG' src={"https://www.countryflags.io/" + pressedCountry[0].alpha2Code +  "/flat/64.png"} ></img>
       <div><span className='label'>CAPITAL:</span> <span className='value'>{pressedCountry[0].capital }</span> </div>
       <div><span className='label'>COUNTRY CODE:</span> <span className='value'>{pressedCountry[0].alpha2Code }</span></div>
       <div><span className='label'>POPULATION:</span ><span className='value'>{pressedCountry[0].population / 1000000 + ' Million' }</span></div>
       <Button variant="contained" color="secondary"> COVID INFO FOR {country} </Button>
       </div>
      
    </div>
  );
}

