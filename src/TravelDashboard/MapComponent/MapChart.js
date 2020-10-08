import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import './Map.css'
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


const MapChart = ({ setTooltipContent, setCountryConent, setListCountriesConent,setChosenCountryJSON }) => {
  
  return (
    <>
    
      <ComposableMap className='map'  data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
          
                <Geography
                  
                  key={geo.rsmKey}
                  geography={geo}
                  onLoadStart={ ()=>{
                    setListCountriesConent(geographies)
                   
                  }}
                  onClick={()=>{
                    const { NAME } = geo.properties;
                    setCountryConent(`${NAME}`);
                    setListCountriesConent(geographies)

                    fetch(`https://restcountries.eu/rest/v2/name/${geo.properties.NAME}`)
                    .then(res => res.json())
                    .then(
                      (result) => {
                        console.log(result);
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
                   
                  }}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    setTooltipContent(`${NAME}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#ECEFF1",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none"
                    }
                   
                    
                  }}
                 
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
        
      </ComposableMap>
      <h1>HELLO</h1>
    </>
  );
};

export default memo(MapChart);
