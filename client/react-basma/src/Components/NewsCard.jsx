import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import ecoImage from "../assets/eco.jpg";
import sportsImage from "../assets/sports.jpeg";
import newsImage from "../assets/news.jpg";
import cultureImage from "../assets/culture.jpg";
import photoVidImage from "../assets/pics.jpg";
import weatherImage from "../assets/weather.jpg";

function NewsCard({ title, handleClick }) {

  const More = {
    borderRadius: "1rem",
    border: "0", 
    background: "#33B090",
    color: "white",
    fontSize:"9px", 
    paddingTop:"3px",
    paddingBottom:"3px",
    paddingLeft:"7px",
    paddingRight:"7px",
  }

  let image = null;
  switch(title) {
    case 'اقتصاد':
    image =  ecoImage; 
      break;
    case 'رياضة':
    image =  sportsImage;
      break;
    case 'أخبار':
    image =  newsImage;
      break;
    case 'ثقافة':
    image =  cultureImage; 
      break;
    case 'فيديو وصور':
    image =  photoVidImage;
      break;
    case 'احوال جوية':
    image = weatherImage;
      break;
    default: break;
      
  }
  return (
    <Card style={{ width: 'auto', margin:"1rem"}}>
  <div>
    <Card.Img variant="top" src={image} style={{height:"auto"}}/> 
    <Card.Body>
      <Card.Title style={{ color: "#EA4228", fontSize: "1.7rem", fontWeight:"600" }} className="text-right">{title}</Card.Title> 
      <Button onClick={() => handleClick(title)} variant="btn" style={More} className="text-right">المزيد</Button>
    </Card.Body>
  </div>
</Card>

  );
}

export default NewsCard;
