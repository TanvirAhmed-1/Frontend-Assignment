import { IoIosArrowDown, IoIosHelpCircleOutline } from "react-icons/io";
import { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Open the 3rd one by default

  const faqData = [
    {
      question: "Enim sed faucibus turpis in eu bibendum neque egestas?",
      answer: "Mattis ullamcorper velit sed ullamcorper morbi tincidunt. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Diam quis enim lobortis scelerisque fermentum dui faucibus. Urna nunc id cursus metus aliquam eleifend mi. Gravida quis blandit turpis cursus in hac.",
    },
    {
      question: "Amet consectetur adipiscing elit pellentesque habitant morbi tristique?",
      answer: "Mattis ullamcorper velit sed ullamcorper morbi tincidunt. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Diam quis enim lobortis scelerisque fermentum dui faucibus. Urna nunc id cursus metus aliquam eleifend mi. Gravida quis blandit turpis cursus in hac.",
    },
    {
      question: "Elit pellentesque habitant morbi tristique senectus?",
      answer:
        "Nulla facilisi morbi tempus iaculis urna id. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Diam quis enim lobortis scelerisque fermentum dui faucibus. Ultricies lacus sed turpis cursus in hac. Gravida quis blandit turpis cursus in hac. Mi ipsum faucibus vitae aliquet nec.",
    },
    {
      question: "Gravida quis blandit turpis cursus in hac. Mi ipsum faucibus vitae aliquet nec?",
      answer: "Mattis ullamcorper velit sed ullamcorper morbi tincidunt. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Diam quis enim lobortis scelerisque fermentum dui faucibus. Urna nunc id cursus metus aliquam eleifend mi. Gravida quis blandit turpis cursus in hac.",
    },
    {
      question: "Est pellentesque elit ullamcorper dignissim cras. In pellentesque massa placerat?",
      answer: "Mattis ullamcorper velit sed ullamcorper morbi tincidunt. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Diam quis enim lobortis scelerisque fermentum dui faucibus. Urna nunc id cursus metus aliquam eleifend mi. Gravida quis blandit turpis cursus in hac.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq" className="faq1">
      <div className="faq-container">
        <div className="f">
        <span className="f-title">FAQ</span>
        </div>
        <div className="feq-title">
        <h1 className="feq-title1">Frequently Asked Questions</h1>
        </div>
        <p className="title-2">
          Fermentum facilisis eu non diam phasellus vestibulum. Volutpat commodo sed egestas egestas fringilla phasellus. Donec ac odio tempor orci dapibus ultrices.
        </p>

        <div className="accordion">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`accordion-item ${activeIndex === index ? "active" : ""}`}
            >
              <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                <div className="icon-wrapper">
                  <IoIosHelpCircleOutline size={24} />
                </div>
                <div className="question">{item.question}</div>
                <div className={`arrow1 ${activeIndex === index ? "rotate" : ""}`}>
                  <IoIosArrowDown className="arrowDown" />
                </div>
              </div>
              {activeIndex === index && item.answer && (
                <div className="accordion-content">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
