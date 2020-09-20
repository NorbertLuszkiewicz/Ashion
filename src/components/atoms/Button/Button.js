import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.s};
  background: transparent;
  border: none;
  padding: 8px;

  :hover {
    background: #88cc84;
  }
`;

export default Button;
