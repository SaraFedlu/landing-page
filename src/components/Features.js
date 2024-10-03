import React from 'react';
import styled from 'styled-components';

const Features = () => {
  return (
    <FeaturesSection>
      <Feature>
        <FeatureTitle>Our Features</FeatureTitle>
        <FeatureDescription>Fluid AI was born out of the desire to simplify and streamline modern life</FeatureDescription>
      </Feature>
    </FeaturesSection>
  );
};

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
  font-size: 1.2rem;
  color: grey;
`;

const FeatureDescription = styled.p`
  font-size: 3.5rem;
  color: white;
  width: 60%;
  margin: 20px auto;
`;

export default Features;
