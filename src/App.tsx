import { FC } from 'react';

import './style.css';
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;
export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <Title>Hello {name}!</Title>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};
