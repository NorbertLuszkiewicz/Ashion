import React from 'react';
import styled from 'styled-components';
import logo from 'assets/logo.png';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import payment1 from 'assets/payment/payment-1.png';
import payment2 from 'assets/payment/payment-2.png';
import payment3 from 'assets/payment/payment-3.png';
import payment4 from 'assets/payment/payment-4.png';
import payment5 from 'assets/payment/payment-5.png';

const Wrapper = styled.section`
  margin: 50px auto;
`;

const StyledParagraph = styled(Paragraph)`
  line-height: 160%;
`;

const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: center;
`;

const ListItem = styled.li`
  margin: 7px 0;
  cursor: pointer;
`;

const PaymentBox = styled.div`
  display: flex;
`;

const Payment = styled.img`
  width: 40px;
  border-radius: 50%;
  margin: 5px 7px;
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.s};
  text-align: center;
`;

const StyledFooter = styled.footer`
  position: relative;
  margin: 10px auto;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding-top: 15px;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    background: #ddd;
    width: 100%;
  }
`;

const Footer = () => (
  <>
    <Wrapper>
      <img src={logo} alt="logo Ashion" />
      <StyledParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        cilisis. Sed elementum tortor vitae dictum egestas. Curabitur massa enim, congue id commodo
        quis.
      </StyledParagraph>
      <PaymentBox>
        <Payment src={payment1} alt="" />
        <Payment src={payment2} alt="" />
        <Payment src={payment3} alt="" />
        <Payment src={payment4} alt="" />
        <Payment src={payment5} alt="" />
      </PaymentBox>
      <StyledHeading>QUICK LINKS</StyledHeading>
      <LinkList>
        <ListItem>My Account</ListItem>
        <ListItem>About</ListItem>
        <ListItem>Blogs</ListItem>
        <ListItem>FAQ</ListItem>
      </LinkList>
    </Wrapper>
    <StyledFooter>
      Copyright © 2020 All rights reserved | This template made by Colorlib
    </StyledFooter>
  </>
);

export default Footer;
