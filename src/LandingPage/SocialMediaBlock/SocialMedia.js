import React from 'react';
import '../../App.css';
import './SocialMedia.css'
import { IconButton } from '@material-ui/core';
// npm install --save-dev @iconify/react @iconify/icons-mdi
import { Icon } from '@iconify/react';
import instagramIcon from '@iconify/icons-mdi/instagram';
import FacebookIcon from '@iconify/icons-mdi/facebook';
import LinkedInIcon from '@iconify/icons-mdi/linkedin';
import redditIcon from '@iconify/icons-mdi/reddit';
class InfoCards extends React.Component {
  state = {
    cards:[]
  }
  
    render() {
      return (
      <div>
          <div className='social_block' >
              
              <img className='image_social' alt=''></img>
              <h1 className='social_h1'>Find us on social Media</h1>
              <span className='social_icons'>
                  <IconButton>
                     
                  <Icon icon={instagramIcon} width="60" height="60" />

                  </IconButton>

                  <IconButton>
                     
                  <Icon icon={FacebookIcon} width="60" height="60" />


                 </IconButton>
                 <IconButton>
                     
                 <Icon icon={LinkedInIcon} width="60" height="60" />


                 </IconButton>
                 <IconButton>
                     
                 <Icon icon={redditIcon} width="60" height="60" />


                 </IconButton>
              </span>
          </div>
         
    </div>
    );
    }
  }

  export default InfoCards;