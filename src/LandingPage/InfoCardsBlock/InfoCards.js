import React from 'react';
import '../../App.css';
import InfoCard from './InfoCard/InfoCard' 
import '../LandingPage.css'


class InfoCards extends React.Component {
  state = {
    cards:[
      {
        id: 1, image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.reception-wedding.com%2FMPj04034150000%5B1%5D.jpg&f=1&nofb=1', title: 'Find Destination', text: 'Find information for hundreds of countries available on our map' 
      },
      {
        id: 2, image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2F15gxx48jmcd41.png&f=1&nofb=1', title: 'Travel Advice', text: 'Find travel code and advice for your destination. That way you can choose a safer option for your trip' 
      },
      {
        id: 3,image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwexnermedical.osu.edu%2F-%2Fmedia%2Fimages%2Fwexnermedical%2Fblog%2F2020-stories%2F04%2Ffake-news-about-covid-19%2Fcoronavirus-news_large.jpg%3Fla%3Den%26hash%3D548FEFB83E6BD46F821389B6170DAF69EC80BD95&f=1&nofb=1', title: 'Recent News', text: 'See lates news for your destination of choice, so you can be infromed for up-to-date measures or important issues' 
      },
      {
        id: 4,image:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F1420649%2Fimages%2Fo-AIRLINE-TICKETS-facebook.jpg&f=1&nofb=1', title: 'Ticket Price', text: 'Find what an average ticket to your destination would cost at the desired dates' 
      }

     

    ]
  }
  
    render() {
      return (
      <div className='card_block'>
         
        {this.state.cards.map(el=>{
          return  <InfoCard title={el.title} image ={el.image} text={el.text} key={el.id} ></InfoCard>
        })}
       
         
    </div>
    );
    }
  }

  export default InfoCards;