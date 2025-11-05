import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1693837291215-45981116abc5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600";

  return (
    <div className="InfoBox" style={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={INIT_URL} title="weather image" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <div>Temperature = {info.temp}°C</div>
            <div>Humidity = {info.humidity}%</div>
            <p>Min Temp = {info.tempMin}°C</p>
            <p>Max Temp = {info.tempMax}°C</p>
            <p>The Weather feels like {info.feelsLike}°C</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
