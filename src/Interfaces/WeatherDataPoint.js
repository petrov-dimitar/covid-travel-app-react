export class WeatherDataPoint {
    constructor(date, temp_low, temp_high, weather){
        this.date = date;
        this.temp_high = temp_high;
        this.temp_low = temp_low;
        this.weather = weather;
    }
}