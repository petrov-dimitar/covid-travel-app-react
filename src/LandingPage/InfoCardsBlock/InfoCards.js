import React from 'react';
import '../../App.css';
import InfoCard from './InfoCard/InfoCard' 
import '../LandingPage.css'


class InfoCards extends React.Component {
  state = {
    cards:[
      {
        id: 1, image:'', title: 'Some title', text: 'This should be some kind of content.. always longer than the title' 
      },
      {
        id: 2, image:'', title: 'Some title', text: 'This should be some kind of content.. always longer than the title' 
      },
      {
        id: 3,image:'', title: 'Some title', text: 'This should be some kind of content.. always longer than the title' 
      },
      {
        id: 4,image:'', title: 'Some title', text: 'This should be some kind of content.. always longer than the title' 
      }

     

    ]
  }
  
    render() {
      return (
      <div className='card_block'>
          <h1>Hello FROM Info Cards Block</h1>
        {this.state.cards.map(el=>{
          return  <InfoCard key={el.id} ></InfoCard>
        })}
       
         
    </div>
    );
    }
  }

  export default InfoCards;