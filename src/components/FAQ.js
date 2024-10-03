import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqItems = [
    'Does Fluid AI increase wellbeing and meaning in life?',
    'What can curiosity, wonder, and awe do for you?',
    'Does Fluid AI increase wellbeing and meaning in life?',
    'What can curiosity, wonder, and awe do for you?',
    'Does Fluid AI increase wellbeing and meaning in life?',
    'What can curiosity, wonder, and awe do for you?'
  ];

  return (
    <div className="container">
      {/* Left Section */}
      <div className="left">
        <h1>What can curiosity, wonder, and awe do for you?</h1>
        <p>Research shows that experiencing curiosity and awe can immensely benefit our mental, physical, and professional health. Here’s a brief overview of what curiosity and awe can do for you.</p>
      </div>
      
      {/* Right Section */}
      <div className="right">
        {faqItems.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="question" onClick={() => toggleExpand(index)}>
              {item}
              <span className="icon">{expandedIndex === index ? '-' : '+'}</span>
            </div>
            {expandedIndex === index && (
              <div className="answer">
                <p>This is the detailed answer for: {item}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
