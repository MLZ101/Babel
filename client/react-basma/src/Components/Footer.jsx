import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Form } from "react-bootstrap";

function Footer() {
  return (
    <div className="container my-5 rounded" dir="rtl">
      <footer
        className="text-center text-lg-start text-dark"
        style={{ backgroundColor: "#EDE9E8" }}
      >
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row ">
              <div className="col-lg-4 col-md-6 col-12 text-center d-flex align-items-center justify-content-center">
                <a href="#facebook-link" className="text-dark mx-2">
                  <FaFacebook size={30} />
                </a>
                <a href="#instagram-link" className="text-dark mx-2">
                  <FaInstagram size={30} />
                </a>
                <a href="#linkedin-link" className="text-dark mx-2">
                  <FaLinkedin size={30} />
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12 text-center text-secondary mb-3">
                <h5 className="text-dark">
                  <b>توصيات</b>
                </h5><u>
                عند الإشارة إلى لوريم ابسوم ، يتم استخدام تعبيرات مختلفة ،
                وبالتحديد ملء النص أو نص وهمي أو نص مخفي أو نص عنصر نائب :
                باختصار ، يمكن أن يكون معناه أيضًا صفريًا ، ولكن فائدته واضحة
                جدًا بحيث تستمر عبر القرون وتقاوم الإصدارات السخرية والحديثة
                التي جاءت مع وصول الويب.
              </u></div>
              <div className="col-lg-4 col-md-6 col-12 text-center d-flex align-items-center">
                <Form className="d-flex justify-content-center align-items-center flex-column">
                  <div className="d-flex align-items-center mb-2">
                  <button className="btn ml-2" style={{
                    color:"white", background:"#EA4228", borderRadius:"0", borderTopRightRadius:"2rem", borderBottomRightRadius:"2rem" 
                  }}>اشترك</button>
                    <Form.Control className="w-75" style={{ borderTopLeftRadius:"2rem", borderBottomLeftRadius:"2rem", borderTopRightRadius:"0", borderBottomRightRadius:"0"}} />
                  </div>
                </Form>
              </div>
            </div>
          </section>
        </div>
        <div className="text-center p-3 bg-white " style={{ color: "#34AF90" }}>
          © 2023 Copyright:
          <a style={{ color: "#34AF90" }} href="https://github.com/MLZ101">
            MLZ101
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
