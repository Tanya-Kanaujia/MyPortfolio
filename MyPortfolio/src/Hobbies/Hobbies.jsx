import * as React from 'react';
import "../App.css";
import "./Hobbies.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import img1 from "../assets/cooking.jpg";
import img2 from "../assets/painting.jpg";
import img3  from "../assets/journaling.jpg";


export default function MediaCard() {
  let color = "#0C134F";
  return (
    <>
      <h2>Leisure Activities</h2>
    <div className='cards'>
      <Card sx={{ maxWidth: 345 }} id='card' >
        <CardMedia
          sx={{
            height: 250,
            width: 400
          }}
          image={img1}
          title="Cooking"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color={color}>
            Cooking
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 345 }} id='card' >
        <CardMedia
          sx={{
            height: 250,
            width: 400
          }}
          image={img2}
          title="Cooking"
        /> 
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color={color}>
            Painting
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 345 }} id='card'>
        <CardMedia
          sx={{
            height: 250,
            width: 400
          }}
          image={img3}
          title="Cooking"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color={color} >
            Journaling
          </Typography>
        </CardContent>
      </Card>
      </div>
      </>
  );
}
