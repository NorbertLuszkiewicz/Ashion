import React from 'react';
import styled from 'styled-components';
import Nav from 'components/organisms/Nav/Nav';
import Footer from 'components/molecules/Footer/Footer';

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
`;

const PageTemplates = ({ children }) => (
  <>
    <Nav />
    <Wrapper>
      {children}
      <Footer />
    </Wrapper>
  </>
);

export default PageTemplates;
