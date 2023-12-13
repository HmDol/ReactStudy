import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #dc3545;
  border : 1px solid red;
  color: white;
  border-radius : .5rem;
  padding: 20px;
  text-align: center;
  position : relative;
  top :200px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 Your Company. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
