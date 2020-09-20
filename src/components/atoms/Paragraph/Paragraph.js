import styled from 'styled-components';

const Paragraph = styled.h2`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 400;
`;

export default Paragraph;
