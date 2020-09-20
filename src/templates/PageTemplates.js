import React from 'react';
import Nav from 'components/organisms/Nav/Nav';
import Footer from 'components/molecules/Footer/Footer';

const PageTemplates = ({ children }) => (
  <>
    <Nav />
    <>{children}</>
    <Footer />
  </>
);

export default PageTemplates;
