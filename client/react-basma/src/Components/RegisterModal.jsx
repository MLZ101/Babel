

    // THIS IS READY TO USE BUT NOT IMPLEMENTED AS IT WASNT REQUIRED IN THE PDF
    // REGISTER BACKEND FUNCTION IS AVAILABLE FOR POSTMAN TESTING HOWEVER


import React from 'react';
import Modal from 'react-bootstrap/Modal';
import InputGroup from "react-bootstrap/InputGroup";

function RegisterModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <InputGroup><Modal.Title id="contained-modal-title-vcenter">
          انشاء حساب
        </Modal.Title> </InputGroup>
      </Modal.Header>
      <Modal.Body>
      <form>
      <div className ="form-group">
    <label htmlFor="exampleInputEmail1"><b>الاسم</b></label>
    <input type="email" className="form-control m-2" id="exampleInputName1" aria-describedby="emailHelp" placeholder="أدخل الاسم "/>
  </div>
  <div className ="form-group">
    <label htmlFor="exampleInputEmail1"><b>البريد الالكتروني </b></label>
    <input type="email" className="form-control m-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="أدخل البريد الالكتروني "/>
  </div>
  <div className ="form-group">
    <label htmlFor="exampleInputPassword1"><b>كلمة السر</b></label>
    <input type="password" className ="form-control m-2" id="exampleInputPassword1" placeholder="أدخل كلمة المرور "/>
  </div>
  
  <div className='d-flex justify-content-center'><button type="submit" className="btn btn-success">تم</button> </div>
</form>
        
      </Modal.Body>
      
    </Modal>
  );
}


export default RegisterModal;