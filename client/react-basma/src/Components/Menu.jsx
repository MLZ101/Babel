import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Menu({handleClick}) {
  return (

<Navbar key='sm' expand='sm' className="bg-transparent mb-3 ">
      <Container fluid>
        
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-'sm'`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-'sm'-'sm'`}
          aria-labelledby={`offcanvasNavbarLabel-expand-'sm'`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-'sm'`}>
             <b> القائمة</b>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Nav className="mx-auto">
            <Nav.Link href=""   onClick={() => handleClick("احوال جوية")}   style={{ paddingLeft:"3vh", paddingRight:"3vh"}}> احوال جوية </Nav.Link>
            <Nav.Link href=""   onClick={() => handleClick("فيديو وصور ")}  style={{borderRight:"solid 1px", paddingLeft:"3vh", paddingRight:"3vh"}}>فيديو وصور </Nav.Link>
            <Nav.Link href=""   onClick={() => handleClick("ثقافة ")}       style={{borderRight:"solid 1px", paddingLeft:"3vh", paddingRight:"3vh"}}>ثقافة </Nav.Link>
            <Nav.Link href=""   onClick={() => handleClick("رياضة ")}       style={{borderRight:"solid 1px", paddingLeft:"3vh", paddingRight:"3vh"}}>رياضة </Nav.Link>
            <Nav.Link href=""   onClick={() => handleClick("اقتصاد ")}      style={{borderRight:"solid 1px", paddingLeft:"3vh", paddingRight:"3vh"}}>اقتصاد </Nav.Link>
            <Nav.Link href=""   onClick={() => handleClick("اخبار")}        style={{borderRight:"solid 1px", paddingLeft:"3vh", paddingRight:"3vh", borderLeft:"solid 1px"}}>اخبار </Nav.Link>
            <Nav.Link href="" style={{paddingRight:"1vh"}}>الرئيسية  </Nav.Link>
          </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>

  );
}

export default Menu;