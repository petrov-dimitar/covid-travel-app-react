import React, {useState} from "react"
import './Map.css'
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps"

// url to a valid topojson file
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"

export const Map = () => {
  const [country, setCountry] = useState(
    'Hello Function Component!'
  );
 
  const handleChangeGeo = (geo) => 
  {
    console.log(geo.properties.NAME);
    setCountry(geo.properties.NAME);
  }
  return (
    <div>
      <div className= 'map'>
      <ComposableMap >
        <Geographies geography={geoUrl}>
          {({geographies}) => geographies.map(geo =>
            <Geography onClick={() => handleChangeGeo(geo) } key={geo.rsmKey} geography={geo} >
              
            </Geography>
          )}
        </Geographies>
      </ComposableMap>
      </div>
      
          <h1>Chosen Country: {country}</h1>
    </div>
  )

}

