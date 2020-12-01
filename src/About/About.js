import React from 'react';
import Card from '@material-ui/core/Card';
import './About.css'    
export default function AboutUs() {


  return (
    <Card className='about_wrapper' >
        <h1>Who are we?</h1>
        <p>
        The main idea is a web application available for the dutch market, for travelling outside the Netherlands. The point of the website is to be the first go-to option for dutch people who plan to go abroad for tourism or other purposes alike. Flying in times of Covid-19 pandemic may requires large amount of considerations, such as what is the current code of the country I am traveling to. What is the current trend of newly infected people in the country overall. How about the exact city region I am travelling to. Looking at news can also be useful to derive information for important trending issues in the country or the distancing measures that you need to comply with. Then one may potentially want to know if there are hospitals nearby and what is the average ticket, accommodation price, and weather forecasts are for the destination.
The sum of the information, mentioned previously, could in fact be found when the user searches in Government.nl, Google, Booking.com and other websites, but they would need to extract this general info among other less important issues in the beginning stages of planning a trip.

        </p>

    </Card>
  );
}