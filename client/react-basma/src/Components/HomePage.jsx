import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import Menu from "./Menu";
import NewsCarousel from "./NewsCarousel/NewsCarousel";
import logo from "../assets/babel.png";
import NewsCard from "./NewsCard";
import MostReadAccordions from "./MostRead/MostReadAccordions";
import Footer from "./Footer";
// import RegisterModal from "./RegisterModal";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";

import goalsImage from "../assets/goals.jpg";
import { FormattedMessage } from "react-intl";

function HomePage() {
  const [showLogin, setShowLogin] = React.useState(false);
  const [showLogout, setShowLogout] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [showReg, setShowReg] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [categories, setCategories] = React.useState([]);

  // const LogoutClass = isLoggedIn ? "btn-danger" : "btn-success";

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

  const handleSubmit = async (e) => {
    // Login API
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

  const handleLogout = async () => {
    // Logout API
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

  const handleClick = async (category) => {
    // Click Count API
    try {
      const user_id = isLoggedIn ? user.id : null;
      const response = await axios.post("http://localhost:8000/api/counts", {
        category: category,
        user_id: user_id,
      });

      if (response.status === 201) {
        console.log("Click Count Stored!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // Aggregates API

    async function fetchCategories() {
      // to get sorted array of categories objects per visits
      try {
        const response = await axios.get(
          "http://localhost:8000/api/aggregates"
        );
        setCategories(response.data); // categories is now an array of elements containing category , total , and unique clicks
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, []);

  //        ----------------------------------------------------------------------------------------------------------------------------------------------------

  return (
    <div
      className="container main-container bg-white rounded overflow-hidden m-5"
      style={{ paddingLeft: "6rem", paddingRight: "6rem" }}
    >
      <div className="d-flex flex-column align-items-center position-relative">
        <img
          src={logo}
          alt="babel_logo"
          className="img-fluid align-self-center"
          style={{ width: "10rem", height: "auto", margin: "1rem" }}
        />

        <div className="d-flex " dir="ltr">
          <button
            className={`signin btn btn-sm position-absolute start-0 bottom-0 mb-3 mt-4`}
            style={{ width: "12rem", fontSize: "2vw" }}
            onClick={() => {
              isLoggedIn ? setShowLogout(true) : setShowLogin(true);
            }}
          >
            {!isLoggedIn ? " تسجيل الدخول" : "تسجيل الخروج"}
          </button>

          {!isLoggedIn ? ( // ------ LOGIN ------
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
          ) : (
            // ---------- LOGOUT -----------

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

      <div className="container d-flex flex-column m-0">
        <div
          className="d-flex row justify-content-center w-auto "
          style={{ margin: ".4rem" }}
        >
          <div className="position-absolute p-0" style={{ zIndex: "1" }}>
            <Menu handleClick={handleClick} />
          </div>
          <div
            className="d-flex justify-content-center p-0"
            style={{ zIndex: "0" }}
          >
            <NewsCarousel />
          </div>
        </div>

        <div className="cardContainer row pb-2 mb-2 border-bottom">
          {/* Renders the cards according to aggregates API's order */}
          {categories.map((i) => (
            <div
              className="card p-0"
              key={i.category}
              style={{ border: "transparent" }}
            >
              <NewsCard title={i.category} handleClick={handleClick} />
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid mt-3 mb-2 pb-4 border-bottom" dir="rtl">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid rounded" src={goalsImage} alt="goals" />
          </div>
          <div className="col-md-6">
            <h3
              className="m-3"
              style={{
                width: "10rem",
                color: "#33B090",
                textShadow: "1px 1px 1px",
              }}
            >
              الاكثر قراءة
            </h3>
            <MostReadAccordions />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
