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

// let url = 'https://pixabay.com/api/?key=18655243-d33667c21333274041b3420c5&q=yellow+flowers&image_type=photo&pretty=true';


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
export function Map() {
  const [content, setContent] = useState("");
  const [country, setCountry] = useState("");
  const [listCountries, setlistCountries] = useState([]);
  const [pressedCountry, setChosenCountry] = useState([{}]);
  const [countryImages, setCountryImages] = useState([]);
  // const [capital, setCapitalName] = useState([{}]);
  const classes = useStyles();
  return (
    <div className='map_wrapper'>
         <Autocomplete
      id="combo-box-demo"
      options={listCountries}
      getOptionLabel={(option) => option.properties.NAME}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
    />
      <MapChart setTooltipContent={setContent} setCountryConent = {setCountry} setListCountriesConent= {setlistCountries} setChosenCountryJSON = {setChosenCountry} setList_image_country = {setCountryImages}>
     
      </MapChart>
      <ReactTooltip>{content}</ReactTooltip>

      <Card  className='country_info_right'>
     
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
       <div><span className='label'>POPULATION:</span ><span className='value'>{pressedCountry[0].population / 1000000 + ' Million' }</span></div>
       <Button variant="contained" color="secondary"> COVID INFO FOR {country} </Button>
       </div>
        </CardContent>
     
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
     
   
      
    </div>
  );
}

