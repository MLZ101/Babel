import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Menu({handleClick}) {
  
  return (

<Navbar key='lg' expand='lg' style={{fontSize:"1vw", fontWeight:"bolder", padding:"0"}}>
      <Container fluid >
        
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-'lg'`}   />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-'lg'-'lg'`}
          aria-labelledby={`offcanvasNavbarLabel-expand-'lg'`}
          placement="end"
          style={{ backgroundColor: '#33B090' }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-'lg'`}>
             <b> القائمة</b>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Nav className="mx-auto" style={{}}>
            <Nav.Link href=""   onClick={() => handleClick("احوال جوية")}   style={{  color:"white",paddingLeft:"3vh",paddingBottom:"1rem", paddingRight:"3vh"}}> احوال جوية </Nav.Link>
            <Nav.Link href=""   onClick={() => handleClick("فيديو وصور ")}  style={{borderRight: "solid 1px rgba(196, 196, 196, 0.5)" , color:"white",paddingLeft:"3vh", paddingRight:"3vh"}}>فيديو وصور </Nav.Link>
            <Nav.Link href=""   onClick={() => handleClick("ثقافة ")}       style={{borderRight:"solid 1px rgba(196, 196, 196, 0.5)",   color:"white",paddingLeft:"3vh", paddingRight:"3vh"}}>ثقافة </Nav.Link>
            <Nav.Link href=""   onClick={() => handleClick("رياضة ")}       style={{borderRight:"solid 1px rgba(196, 196, 196, 0.5)",   color:"white",paddingLeft:"3vh", paddingRight:"3vh"}}>رياضة </Nav.Link>
            <Nav.Link href=""   onClick={() => handleClick("اقتصاد ")}      style={{borderRight:"solid 1px rgba(196, 196, 196, 0.5)",   color:"white",paddingLeft:"3vh", paddingRight:"3vh"}}>اقتصاد </Nav.Link>
            <Nav.Link href=""   onClick={() => handleClick("اخبار")}        style={{borderRight:"solid 1px rgba(196, 196, 196, 0.5)",   color:"white",paddingLeft:"3vh", paddingRight:"3vh", borderLeft:"solid 1px rgba(196, 196, 196, 0.5)"}}>اخبار </Nav.Link>
            <Nav.Link href="" style={{color:"white",paddingBottom:"1.5rem", paddingRight:"1vh"}}>&ensp;الرئيسية  </Nav.Link>
          </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>

    </Navbar>

  );
}

export default Menu;