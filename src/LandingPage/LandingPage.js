import React from 'react';
import '../App.css';
import Highlight from './HighlightBlock/Highligh'
import InfoCards from './InfoCardsBlock/InfoCards'

class LandingPage extends React.Component {
    render() {
      return (
      <div>
         <Highlight></Highlight>
        <InfoCards></InfoCards>
      </div>
     );
    }
  }

  export default LandingPage;