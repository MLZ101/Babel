import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Form } from 'react-bootstrap';

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
                <a
                  href="#facebook-link"
                  className="text-dark mx-2"
                >
                  <FaFacebook size={30} />
                </a>
                <a
                  href="#instagram-link"
                  className="text-dark mx-2"
                >
                  <FaInstagram size={30} />
                </a>
                <a
                  href="#linkedin-link"
                  className="text-dark mx-2"
                >
                  <FaLinkedin size={30} />
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12 text-center"> 
                <h5><b>توصيات</b></h5>
                <p>
                  عند الإشارة إلى لوريم ابسوم ، يتم استخدام تعبيرات مختلفة ،
                  وبالتحديد ملء النص أو نص وهمي أو نص مخفي أو نص عنصر نائب :
                  باختصار ، يمكن أن يكون معناه أيضًا صفريًا ، ولكن فائدته
                  واضحة جدًا بحيث تستمر عبر القرون وتقاوم الإصدارات السخرية
                  والحديثة التي جاءت مع وصول الويب.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 col-12 text-center"> 
                <Form>
                  <Form.Group className='d-flex justify-content-center'>
                    <Form.Control className='w-75 mt-5 mb-2' />
                  </Form.Group>
                  <button className='btn btn-success mb-2'>
                    اشترك
                  </button>
                </Form>
              </div>
            </div>
          </section>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a className="text-dark" href="https://github.com/MLZ101">
            MLZ101
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
