import React from 'react';
import '../App.css';
import Highlight from './HighlightBlock/Highligh'
import InfoCards from './InfoCardsBlock/InfoCards'
import SocialMedia from './SocialMediaBlock/SocialMedia'

class LandingPage extends React.Component {
    render() {
      return (
      <div>
         <Highlight></Highlight>
        <InfoCards></InfoCards>
        <SocialMedia></SocialMedia>
      </div>
     );
    }
  }

  export default LandingPage;