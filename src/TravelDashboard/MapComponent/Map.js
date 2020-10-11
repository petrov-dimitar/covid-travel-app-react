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
import Toolbar from '@material-ui/core/Toolbar';
import {
  Link,
} from "react-router-dom";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CircularProgress from '@material-ui/core/CircularProgress';



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
export function Map() {
  const [content, setContent] = useState("");
  const [country, setCountry] = useState("");
  const [listCountries, setlistCountries] = useState([]);
  const [pressedCountry, setChosenCountry] = useState([{}]);
  const [countryImages, setCountryImages] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showDashboard, setShowDashboard] = React.useState(false);
  // const [isCountrySelected, setIsCountrySelected] = React.useState(false);
  // const [capital, setCapitalName] = useState([{}]);
  const classes = useStyles();
  return (
    <div className='wrapper_main'>
    <Toolbar className='toolbar'>
      <h2 className='subtitle_2'>Choose Travel Destination</h2>
    <Link to="/landing"> <Button className={classes.menuButton}    color="inherit">Home</Button></Link> 
    <Link to="/plan"> <Button className={classes.menuButton}   startIcon={<CloudUploadIcon />} color="inherit">Plan Trip</Button></Link>
    </Toolbar>
    <div className='map_wrapper'>
         <Autocomplete
         className='autcomplete'
      id="combo-box-demo"
      options={listCountries}
      getOptionLabel={(option) => option.properties.NAME}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
    />
      <MapChart setTooltipContent={setContent} setCountryConent = {setCountry} setListCountriesConent= {setlistCountries} setChosenCountryJSON = {setChosenCountry} setList_image_country = {setCountryImages}>
     
      </MapChart>
      <ReactTooltip>{content}</ReactTooltip>
{
  country &&
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
       <div><span className='label'>POPULATION:</span ><span className='value'>{ Math.round(pressedCountry[0].population / 1000000) + ' Million' }</span></div>
       
       </div>
        </CardContent>
     
      <CardActions>
      
        <Button className='action_button_card design_brown_main' variant="contained" color="primary" onClick={()=>{ 
          setShowDashboard(false);
          setLoading(true);
          setTimeout(()=>{setShowDashboard(true); setLoading(false)}, 3000)
        }} > COVID INFO FOR {country} </Button>
       
       
      </CardActions>
    </Card>
}
    <div>
          <hr></hr>
         
        
        </div>

       
        {loading &&   <Card className='wrapper_loading'><CircularProgress size={68} className='progress_bar' /> </Card>}
           
      
    </div>
    
    <div className= 'dashboard'>

    {showDashboard && <img alt='dashb' src='https://www.linkpicture.com/q/dashboard_example.png'></img>}
    </div>
    </div>
  );
}

