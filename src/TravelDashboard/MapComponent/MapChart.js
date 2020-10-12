import React, { memo, useEffect } from "react";
import {
  // ZoomableGroup  ,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import './Map.css'

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

let list_image_country = [];
const MapChart = ({ setTooltipContent, setCountryConent, setListCountriesConent,setChosenCountryJSON, setList_image_country, setColorCountries }) => {
 

  useEffect(() => {
   
  });
  return (
    <>
    
      <ComposableMap className='map'  data-tip="" projectionConfig={{ scale: 200 }}>
        
          <Geographies  geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const {  ISO_A2 } = geo.properties;
               const curr = setColorCountries.find(el => el.code === ISO_A2)
              
               return ( <Geography className='geographies'
                  fill= {curr? curr.color : 'black'}
                  key={geo.rsmKey}
                  geography={geo}

                  onLoadStart={ ()=>{
                    setListCountriesConent(geographies)
                   
                  }}
                  onClick={()=>{
                 
                    const { NAME } = geo.properties;
                    setCountryConent(`${NAME}`);
                    setListCountriesConent(geographies)
                    // console.log(setColorCountries);
                    
                    fetch(`https://restcountries.eu/rest/v2/name/${geo.properties.NAME}`)
                    .then(res => res.json())
                    .then(
                      (result) => {
                    
                        setChosenCountryJSON(result)
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
                    let url_images =  `https://pixabay.com/api/?key=18655243-d33667c21333274041b3420c5&q=${geo.properties.NAME}&image_type=photo&pretty=true&per_page=5`
                    
                    fetch(url_images)
                    .then(res=>res.json()).then(
                      (result) =>{
                        list_image_country = [];
                        setList_image_country([]);
                       result.hits.map(el=> list_image_country.push(el.largeImageURL) );
                      
                       setList_image_country(list_image_country)
                      
                      }
                    )

                  }}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    setTooltipContent(`${NAME}`);
                    
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                  // default:{stro: 'gray'},
                    hover: {
                      // fill: "#F53",
                      fill: "#CE6D39",
                      stroke: "black",
                      strokeWidth: 1
                      // transform: 'scale(1.2)'
                    },
                    pressed: {
                      fill: "#ECEFF1",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      
                    }
                   
                    
                  }}
                 
                />)
              })
            }
          </Geographies>
 
        
      </ComposableMap>
     
    </>
  );
};

export default memo(MapChart);
