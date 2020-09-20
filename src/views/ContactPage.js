import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import PageTemplate from 'templates/PageTemplates';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faPhone, faLifeRing } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 7px;
  color: ${({ theme }) => theme.mainRed};
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ContactPage = () => (
  <PageTemplate>
    <Wrapper>
      <Heading>CONTACT INFO</Heading>
      <div>
        <NameWrapper>
          <StyledFontAwesomeIcon icon={faMap} />
          <h3>Address</h3>
        </NameWrapper>
        <StyledParagraph>
          160 Pennsylvania Ave NW, Washington, Castle, PA 16101-5161
        </StyledParagraph>
      </div>
      <div>
        <NameWrapper>
          <StyledFontAwesomeIcon icon={faPhone} />
          <h3>Phone</h3>
        </NameWrapper>
        <StyledParagraph>125-711-811 | 125-668-886</StyledParagraph>
      </div>
      <div>
        <NameWrapper>
          <StyledFontAwesomeIcon icon={faLifeRing} />
          <h3>Support</h3>
        </NameWrapper>
        <StyledParagraph>Support.photography@gmail.com</StyledParagraph>
      </div>
    </Wrapper>
  </PageTemplate>
);

export default ContactPage;
