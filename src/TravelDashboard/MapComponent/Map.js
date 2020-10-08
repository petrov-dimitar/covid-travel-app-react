import React, { useState } from "react";
// import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

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

  return (
    <div className='map_wrapper'>
         <Autocomplete
      id="combo-box-demo"
      options={listCountries}
      getOptionLabel={(option) => option.properties.NAME}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
    />
      <MapChart setTooltipContent={setContent} setCountryConent = {setCountry} setListCountriesConent= {setlistCountries} >
     
      </MapChart>
      <ReactTooltip>{content}</ReactTooltip>
      <h1>Chosen Country: {country}</h1>
      
    </div>
  );
}

