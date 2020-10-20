import React from 'react';
import '../App.css';
import {Map} from './MapComponent/Map'
import '../styles/Highlight.css'
import './TravelDashboard.css'
import {CountryColor} from '../Interfaces/CountryColor'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import {  LineChart, Line, XAxis,
   Tooltip, CartesianGrid, 
   } from 'recharts';
import { TrendDataPoint } from '../Interfaces/TrendDataPoint';
import {WeatherDataPoint} from '../Interfaces/WeatherDataPoint'
import { Button, CardContent } from '@material-ui/core';
// import { TrendDataPoint } from '../Interfaces/TrendDataPoint';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
class Highlight extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      colorCountries: [],
      trendData: [],
      news_data: [],
      country: '',
      weather_data: []
    };
    
    this.CreateDashboard = this.CreateDashboard.bind(this)
  }

  CreateDashboard (country_name) {
    this.setState({country: country_name})
    //get trend data
    fetch(`https://corona.lmao.ninja/v2/historical/${country_name}?lastdays=30`).then(res=>res.json()).then(result=>{
      console.log(result);
      const cases = result.timeline.cases;
      const list_cases = [];
      for (var key in cases) {
        if (cases.hasOwnProperty(key)) {
            console.log(key + " -> " + cases[key]);
            let dataPoint = new TrendDataPoint(key, cases[key])
            list_cases.push(dataPoint);
        
        }
    }
    // console.log(this.state.trendData);
    this.setState({trendData: list_cases});
    // console.log(this.state);
    })

    //get news
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
    const list_news = [];
    fetch(`https://newsapi.org/v2/everything?q=${country_name}&from=${today}&sortBy=publishedAt&apiKey=ee22bce9ca5b426b95280e18bc370f97&pageSize=5&page=1`).then(res=>res.json()).then(result=>{
      for (var article in result.articles){
        result.articles[article].key =   Number(article)  + 1
        list_news.push(result.articles[article]);
      }
      // result.articles.map(article=>{
      //   list_news.push(article);
      // })
      console.log(list_news);
      this.setState({news_data: list_news});
    })
    
    //Get weather data
    fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=e8297308c9cf1b9f0c6aae968b10b5ac&q=estonia&mode=json&units=metric`).then(res=>res.json()).then(result=>{
      console.log(result.list);
      const  weather_points = [];
      for (var article in result.list){
        result.list[article].key =   Number(article)  + 1
        weather_points.push(new WeatherDataPoint(result.list[article].dt_txt, result.list[article].main.temp_min, result.list[article].main.temp_max, result.list[article].weather[0  ].main ));
      }
      console.log(weather_points);
      this.setState({weather_data: weather_points});
    })
  }

  componentDidMount() {
    fetch(`https://www.travel-advisory.info/api`)
      .then(res => res.json())
      .then(
        result => {
          
// eslint-disable-next-line
          for (const [key, value] of Object.entries(result.data)) {
            if(value.advisory.score < 2.5){
              this.state.colorCountries.push(new CountryColor(value.iso_alpha2, '#d2fdd3', value.name))
              this.setState(statee=>{
              const list=  statee.colorCountries.push(new CountryColor(value.iso_alpha2, '#d2fdd3', value.name))

              return {
                list,
                value: '',
              };
              })

            }
            else if (value.advisory.score > 2.5 && value.advisory.score < 4.5){
              this.state.colorCountries.push(new CountryColor(value.iso_alpha2, '#fff9c6', value.name))
            }
            // else if (value.advisory.score >= 3.5 && value.advisory.score < 4.5){
            //   this.state.colorCountries.push(new CountryColor(value.iso_alpha2, '#ffe5c6   ', value.name))
            // } 
            else if (value.advisory.score > 4.5){
              this.state.colorCountries.push(new CountryColor(value.iso_alpha2, '#fcdddd', value.name))
            }
           
          }
   

         
          
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
  }
    render() {
      const { colorCountries } = this.state
      return colorCountries.length ? this.renderMap() : (
      
        <span>Loading wells...</span>
      )
     
    
    }
    renderMap(){
      return (
        
        <div className='wrapper_travel_dashboard'>
          <div className= 'container_width_standard'>
          <div className='heading_wrapper'>
          <h1 className='heading'>Travel planner</h1>
          <span className='sub_heading'>Check where you can travel abroad using the interactive map below.</span>
          </div>
      
          </div>
      

          <Map setColorCountries = {this.state.colorCountries}   CreateDashboard = {this.CreateDashboard} >
       
          </Map>
          <div className= 'container_width_standard'>
          {/* <img  alt='dashb' src='https://www.linkpicture.com/q/dashboard_example.png'></img> */}
          <Card className='dashboard'>
            <h2>{this.state.country}</h2>
            <div>code:</div>
            <div className='dashboard_left_container'>
              
            <div className='trend_container'>
              <h5>Covid-19 Trend (30-Days)</h5>
              <Card>
            <LineChart
            className='chart'
                width={600}
                height={400}
                data={this.state.trendData}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <XAxis dataKey="date" />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="infected" stroke="#ff7300" yAxisId={0} />
                {/* <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} /> */}
                            </LineChart>
                            </Card>
            </div>
            <div className= 'weather_container'>
            <h5>Weather</h5>
          {this.state.weather_data.map(data_point=>{
            return (<Card className='weather_card' variant='outlined'><span className='weather_attribute'>{data_point.date}</span> <span>{data_point.temp_high}/ {data_point.temp_high} </span> {data_point.weather} </Card>)
          })}
            </div>

            </div>
            <div className='dashboard_right_container'>
            <div className='news_container'>
              <h5>Latest News</h5>
            {this.state.news_data.map(article=>{
              return (
                <Card
                variant='outlined'
                
                key= {article.key}
               className='article'>
              
        <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
           {article.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
      {article.description}
          </Typography>
        </CardContent>
                   
                  {/* <img alt='ds' src={article.urlToImage}></img> */}
                  <CardActions>   
                    {/* <spacer></spacer> */}
                  <Button variant="outlined" className='button_article' href={article.url}  >Read More</Button>
                  </CardActions>
                </Card>
              )
            })}
            </div>
            </div>
          </Card>
          </div>

         
      </div>
      );
    }
  }

  export default Highlight;