import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import "./infobox.css"
export default function infobox({info}){
    const iniurl="https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdHklMjB3ZWF0aGVyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D";
//     let info={
// city:"delhi",
//         feelslike:24.84,
//         temp:25.05,
//         tempmin:25.05,
//         tempmax:25.05,
//         humidity:45,
//         weather:"haze",
//     }
    return(
     <div className="infobox">
        <h1>
            weatherinfo-{info.weather}
        </h1>
        <div className='info'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={iniurl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         <div> temperature={info.temp}&deg;C</div>
         <p>humidity={info.humidity}</p>
         <p>mintemo={info.tempmin}</p>
         <p>maxtemo={info.tempmax}</p>
         <p>weather can be describe as ={info.weather}</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      
    </Card>
    </div>
     </div>
    );
}