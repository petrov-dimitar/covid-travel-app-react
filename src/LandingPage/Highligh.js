import React from 'react';
import '../App.css';
import { Button } from '@material-ui/core';
import '../styles/Highlight.css'

class Highlight extends React.Component {
    render() {
      return (
      <div>
           {/* <h1 >Hello From Highlight Component</h1> */}
           <div>
   <img className='image'  alt='' ></img>
          <Button className='button' color="primary">Hello World</Button>
           </div>
        
         
    </div>
    );
    }
  }

  export default Highlight;