import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import ecoImage from "../assets/eco.jpg";
import sportsImage from "../assets/sports.jpeg";
import newsImage from "../assets/news.jpg";
import cultureImage from "../assets/culture.jpeg";
import photoVidImage from "../assets/pics.jpg";
import weatherImage from "../assets/weather.jpg";

function NewsCard({ title, handleClick }) {

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
    <Card style={{ width: 'auto', margin: '1rem'}}>
      <div> 
        <Card.Img variant="top" src={image} style={{height:"18rem", }}/>
        <Card.Body>
          <Card.Title style={{ color: "#b87f02", fontSize: "2rem" }} className="text-right">{title}</Card.Title>
          <Button onClick={() => handleClick(title)} variant="btn btn-success" className="text-right">المزيد</Button>
        </Card.Body>
      </div>
    </Card>
  );
}

export default NewsCard;
