import React from 'react';
import '../App.css';
import { Button } from '@material-ui/core';

class Highlight extends React.Component {
    render() {
      return (
      <div>
           <h1>Hello From Highlight Component</h1>
          <Button color="primary">Hello World</Button>
         
    </div>
    );
    }
  }

  export default Highlight;