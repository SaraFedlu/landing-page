import React from 'react';
import styled from 'styled-components';

const MobileShowcase = () => {
  return (
    <ShowcaseSection>
      {/* First section: text on the left, image centered */}
      <Showcase>
        <TextSectionLeft>
          <Title>Fluid AI: Simplify, Organize, and Achieve More</Title>
          <Description>
            In a world where daily tasks, communication, and goals often become overwhelming, 
            Fluid AI offers an innovative solution. Combining advanced AI technology with 
            a user-friendly interface, it brings together to-do lists, chats, saved items, 
            and bucket lists into one seamless platform.
          </Description>
        </TextSectionLeft>
        <PhoneImageWrapper>
          <PhoneImage src="phone1.png" alt="Phone Showcase" />
        </PhoneImageWrapper>
      </Showcase>

      {/* Second section: text on the right, image centered */}
      <Showcase>
        <PhoneImageWrapper>
          <PhoneImage src="phone2.png" alt="Phone Showcase" />
        </PhoneImageWrapper>
        <TextSectionRight>
          <Title>Fluid AI: Simplify, Organize, and Achieve More</Title>
          <Description>
            In a world where daily tasks, communication, and goals often become overwhelming, 
            Fluid AI offers an innovative solution. Combining advanced AI technology with 
            a user-friendly interface, it brings together to-do lists, chats, saved items, 
            and bucket lists into one seamless platform.
          </Description>
        </TextSectionRight>
      </Showcase>

      {/* 3rd section: text on the left, image centered */}
      <Showcase>
        <TextSectionLeft>
          <Title>Fluid AI: Simplify, Organize, and Achieve More</Title>
          <Description>
            In a world where daily tasks, communication, and goals often become overwhelming, 
            Fluid AI offers an innovative solution. Combining advanced AI technology with 
            a user-friendly interface, it brings together to-do lists, chats, saved items, 
            and bucket lists into one seamless platform.
          </Description>
        </TextSectionLeft>
        <PhoneImageWrapper>
          <PhoneImage src="phone3.png" alt="Phone Showcase" />
        </PhoneImageWrapper>
      </Showcase>

      {/* 4th section: text on the right, image centered */}
      <Showcase>
        <PhoneImageWrapper>
          <PhoneImage src="phone4.png" alt="Phone Showcase" />
        </PhoneImageWrapper>
        <TextSectionRight>
          <Title>Fluid AI: Simplify, Organize, and Achieve More</Title>
          <Description>
            In a world where daily tasks, communication, and goals often become overwhelming, 
            Fluid AI offers an innovative solution. Combining advanced AI technology with 
            a user-friendly interface, it brings together to-do lists, chats, saved items, 
            and bucket lists into one seamless platform.
          </Description>
        </TextSectionRight>
      </Showcase>

      <FeaturesSection>
        <Feature>
          <FeatureTitle>Fluid AI was born out of the desire to simplify and streamline modern life</FeatureTitle>
          <FeatureDescription src="Frame.png" alt="Phone Showcase" />
        </Feature>
      </FeaturesSection>
        
    </ShowcaseSection>

    
  );
};

// Styled Components

const ShowcaseSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 50px 0;
  background-color: black;
`;

const Showcase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 40px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 90%;  /* Adjust the width for mobile */
  }
`;

const PhoneImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhoneImage = styled.img`
  width: 300px;
  height: auto;
  object-fit: contain;
  /* Ensures the phone images are vertically aligned */
`;

const TextSectionLeft = styled.div`
  flex: 1;
  color: white;
  text-align: left;
  margin-right: 40px;

  @media (max-width: 768px) {
    text-align: center;
    margin-right: 0;
    margin-top: 20px; /* Adds space between image and text on mobile */
  }
`;

const TextSectionRight = styled(TextSectionLeft)`
  text-align: right;
  margin-left: 40px;
  margin-right: 0;

  @media (max-width: 768px) {
    text-align: center;
    margin-left: 0;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: gray;
`;

const FeaturesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  background-color: black;
`;

const Feature = styled.div`
  margin: 20px 0;
  text-align: center;
`;

const FeatureTitle = styled.div`
  text-align: left;
  width: 65%;
  padding-left: 70px;
  font-size: 3rem;
  color: white;
`;

const FeatureDescription = styled.img`
  width: 100%;
  margin: 20px auto;
`;

export default MobileShowcase;
