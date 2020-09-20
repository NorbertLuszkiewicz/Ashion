import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px;
  background-color: ${({ color }) => color};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: bold;
  color: white;
`;

const Label = ({ children, color }) => <Wrapper color={color}>{children}</Wrapper>;

export default Label;
