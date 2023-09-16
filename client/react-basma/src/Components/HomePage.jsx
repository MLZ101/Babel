import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import Menu from "./Menu";
import NewsCarousel from "./NewsCarousel";
import logo from "../assets/babel.png";
import NewsCard from "./NewsCard";
import MostReadAccordions from "./MostReadAccordions";
import Footer from "./Footer";
import RegisterModal from "./RegisterModal";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";


import goalsImage from "../assets/goals.jpg";



function HomePage() {


  const [showLogin, setShowLogin] = React.useState(false);
  const [showLogout, setShowLogout] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [showReg, setShowReg] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [categories, setCategories] = React.useState([]);

  const LogoutClass = isLoggedIn ? "btn-danger" : "btn-success";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });





  //    -------------------------------------------------------  Handling API's  ----------------------------------------------------------------


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };




  const handleSubmit = async (e) => {                              // Login API
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        formData,
        { withCredentials: true }
      );

      if (response.status === 200) {
        if (!isLoggedIn) {
          setIsLoggedIn(true);
          setShowLogin(false);
        }

        const user = response.data.user;
        setUser(user);
        alert("تم الدخول بنجاح"); // a better apprach is to Navigate to "/" but it's okay ;)
      }
    } catch (err) {
      alert("غير مصرح / تأكد من المعلومات المدخلة");
    }
  };








  const handleLogout = async () => {                                // Logout API
    try {
      const response = await axios.post(
        "http://localhost:8000/api/logout",
        {},
        { withCredentials: true }
      );
      if (response.status === 200) {
        setIsLoggedIn(false);
        setShowLogout(false);
      }
      console.log(response);
      alert("تم الخروج بنجاح");
    } catch (e) {
      console.log(e);
    }
  };



  const handleClick = async(category) => {                         // Click Count API
    try{
      const user_id = isLoggedIn? user.id : null;
      const response = await axios.post(
        "http://localhost:8000/api/counts",
        {"category" : category, "user_id" : user_id}
       )
       
       if (response.status === 201) {
        console.log("Click Count Stored!");
      }

    } catch(e){
      console.log(e);
    }
  }



                                                          

    useEffect(() => {                                               // Aggregates API

        async function fetchCategories() {     // to get sorted array of categories objects per visits
            try {
                const response = await axios.get('http://localhost:8000/api/aggregates');
                setCategories(response.data);     // categories is now an array of elements containing category , total , and unique clicks 
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }

        fetchCategories();
    }, []);




//        ----------------------------------------------------------------------------------------------------------------------------------------------------

  return (
    <div className="container main-container bg-white rounded overflow-hidden">
      <div className="d-flex flex-column justify-content-center">
        <img
          src={logo}
          alt="babel_logo"
          className="img-fluid align-self-center "
          style={{ width: "20%", height: "auto" }}
        />

        <div className="d-flex justify-content-center">
          <button
            className={`signin btn ${LogoutClass} btn-sm m-3`}
            style={{ width: "10rem" }}
            onClick={() => {
              isLoggedIn ? setShowLogout(true) : setShowLogin(true);
            }}
          >
            {!isLoggedIn ? " تسجيل الدخول" : "تسجيل الخروج"}
          </button>




          {!isLoggedIn ? (                              // ------ LOGIN ------
            <Modal
              show={showLogin}
              onHide={() => setShowLogin(false)}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <InputGroup>
                  <Modal.Title id="contained-modal-title-vcenter">
                    تسجيل الدخول
                  </Modal.Title>{" "}
                </InputGroup>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      <b>البريد الالكتروني </b>
                    </label>
                    <input
                      type="email"
                      className="form-control m-2"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="أدخل البريد الالكتروني "
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">
                      <b>كلمة السر</b>
                    </label>
                    <input
                      type="password"
                      className="form-control m-2"
                      id="exampleInputPassword1"
                      placeholder="أدخل كلمة المرور "
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-success">
                      تم
                    </button>{" "}
                  </div>
                </form>
              </Modal.Body>
            </Modal>


          ) : (                                    // ---------- LOGOUT -----------


            <Modal
              show={showLogout}
              onHide={() => setShowLogout(false)}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <InputGroup>
                  <Modal.Title id="contained-modal-title-vcenter">
                    تسجيل الخروج
                  </Modal.Title>{" "}
                </InputGroup>
              </Modal.Header>
              <Modal.Body>
                <div className="form-group">
                  <p>هل انت متأكد؟</p>

                  <div className="d-flex justify-content-center">
                    <button
                      onClick={() => handleLogout()}
                      className="btn btn-danger m-3"
                    >
                      نعم
                    </button>
                    <button
                      onClick={() => setShowLogout(false)}
                      className="btn btn-secondary m-3"
                    >
                      لا
                    </button>{" "}
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          )}


        </div>
      </div>



      {/* ------------------------   THE REST OF HOMEPAGE ELEMENTS   ------------------------ */}

      <div className="d-flex justify-content-center ">
        <div  
          className="position-absolute col-md-0 "
          style={{ zIndex: "1", fontWeight: "bolder" }}
        >
          <Menu handleClick={handleClick} />
        </div>
        <div className="w-100">
          <NewsCarousel />
        </div>
      </div>

      <div className="container pb-2 mb-2 border-bottom">
     {/*                                                renders the cards acc to aggregates api's order */                                       }
      <div className="row">                                           
  {categories.map((i) => (
    <div className="col-lg-4 col-md-6 col-12" key={i.category}>
      <NewsCard title={i.category} handleClick={handleClick} />
    </div>
  ))}
</div>

      </div>

      <div className="container-fluid mt-3  style={{width:'10rem'}}mb-2 pb-2 border-bottom text-success">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid rounded" src={goalsImage} alt="goals" />
          </div>
          <div className="col-md-6">
            <h2 className="m-3" style={{ width: "10rem" }}>
              <b> الاكثر قراءة</b>
            </h2>
            <MostReadAccordions />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
