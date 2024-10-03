import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterSection>
      <FooterContent>© 2024 Fluid AI. All Rights Reserved.</FooterContent>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  padding: 30px;
  background-color: black;
  color: white;
  text-align: center;
`;

const FooterContent = styled.p`
  font-size: 1rem;
`;

export default Footer;
