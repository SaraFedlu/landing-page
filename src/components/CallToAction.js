import React from 'react';
import styled from 'styled-components';

const CallToAction = () => {
  return (
    <CTASection>
      <Text>Join the Fluid AI Waitlist Today!</Text>
      <InputGroup>
        <Input type="email" placeholder="Enter your email" />
        <CTAButton>Subscribe</CTAButton>
      </InputGroup>
    </CTASection>
  );
};

const CTASection = styled.section`
  padding: 50px;
  text-align: center;
  background-color: #1e1e1e;
`;

const Text = styled.h2`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  width: 300px;
`;

const CTAButton = styled.button`
  padding: 10px 20px;
  background-color: #ff6347;
  color: white;
  border: none;
  cursor: pointer;
`;

export default CallToAction;
