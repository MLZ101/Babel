import Accordion from "react-bootstrap/Accordion";
import "./MostRead.css";

function MostReadAccordions() {
  return (
    <Accordion defaultActiveKey="0">




      <Accordion.Item eventKey="0">
        <Accordion.Header>
        &#160; الحديث عن الحرب القادمة 
        </Accordion.Header>
        <Accordion.Body style={{background:"#EDE9E8"}}>
          تتحدث وسائل الإعلام عن حرب محتملة بين أطراف متعددة، لكن هذه الحرب
          ستتضمن استراتيجيات مختلفة كثيراً عما كان معروفاً من قبل
          
        </Accordion.Body >
      </Accordion.Item>



      <Accordion.Item eventKey="1">
        <Accordion.Header>
        &#160; ميسي ورونالدو: نهاية حقبة 
        </Accordion.Header>
        <Accordion.Body style={{background:"#EDE9E8"}}>
          ميسي ورونالدو لاعبان استثنائيان ويعتقد الكثيرون أنهما الأفضل على
          الإطلاق، لكن الآن بعد كل هذه السنوات من إمتاعنا، يقتربان من خطواتهما
          الأخيرة في مسيرتهما
        </Accordion.Body >
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>
        &#160;الليرة اللبنانية: قصة حزينة 
        </Accordion.Header>
        <Accordion.Body style={{background:"#EDE9E8"}}>
          وبعد سنوات من استقرار قيمة الليرة، واجهت انخفاضًا هائلًا في السنوات
          القليلة الماضية، وفقدت هامشًا كبيرًا يزيد عن 100% من قيمتها.
        </Accordion.Body >
      </Accordion.Item>
    </Accordion>
  );
}

export default MostReadAccordions;
