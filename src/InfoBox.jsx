import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';




export default function InfoBox(){
const INIT_URL="https://images.unsplash.com/photo-1693837291215-45981116abc5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600";
let info={
    city: "Delhi",
    feelslike: 24.84,
    temp:25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze", 
};

    return(
        <div className="InfoBox">
        <h1>WeatherInfo - {info.weather}</h1>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         <div>Temperature = {info.temp}&deg;C</div>
          <div>Humidity = {info.humidity}&deg;C</div>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The Weather feels like {info.feelslike}&deg;C</p>

        </Typography>
      </CardContent>
      
    </Card>
        </div>
    );
}