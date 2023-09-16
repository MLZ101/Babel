import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import carousel4 from "../assets/carousel4.jpg";

function NewsCarousel() {              
  return (
 

        
        <div style={{zIndex:"0"}} className='d-flex align-items-center justify-content-center rounded'>
    <Carousel interval={5000} pause={false} data-bs-theme="light" style={{ maxWidth: "768px", margin:"0"}} >
      <Carousel.Item>
        <img src={carousel1} className="img-fluid carousel-image rounded " alt='1'/>
        <Carousel.Caption>
          <h3 className=' border-bottom border-white text-light p-2'>تقرير حريق</h3>
          <p className='text-light d-none d-md-block '>بعض السكان يشاهدون حطام الحي الإكوادوري في مدينة مانوس في البرازيل بعد تعرض المنطقة لحريق هائل. ورغم ضراوة النيران، لم يسفر الحريق عن أي ضحايا. وترجح السلطات أن الحريق نتج عن انفجار إناء ضغط</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel2} className="img-fluid carousel-image rounded " alt='2' />
        <Carousel.Caption>
          <h3 className=' border-bottom border-dark text-dark p-2'>نفحة فنية</h3>
          <p className='text-dark d-none d-md-block '>الفنانة مونستر شيتويند، التي رشحت لجائزة تيرنر البريطانية في عام 2012، تقف بجوار أحد أعمالها الفنية، بالمعرض الوطني الاسكتلندي للفن الحديث، في إدنبرة.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel3} className="img-fluid carousel-image rounded" alt='3' />
        <Carousel.Caption>
          <h3 className=' border-bottom border-white text-light p-2'>الرياضة اليوم</h3>
          <p className='text-light d-none d-md-block '>ازمة جديدة في مانشستر يوناايتد</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel4} className="img-fluid carousel-image rounded" alt='4' />
        <Carousel.Caption>
          <h3 className=' border-bottom border-dark text-dark p-2'>الوصول الى الكبسولة</h3>
          <p className='text-dark d-none d-md-block '>فريق بحث وإنقاذ يقترب من الكبسولة التي تحمل أحد أفراد طاقم رواد الفضاء بالمحطة الفضائية الدولية بعد فترة وجيزة من هبوطها في منطقة نائية بالقرب من مدينو زيكازغان في كازاخستان</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

  );
}

export default NewsCarousel;
