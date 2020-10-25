import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background-color: #e83f5b;
  border-radius: 10px;
  height: 56px;
  padding: 0 16px;
  width: 100%;
  margin-top: 16px;
  color: #312e38;
  border: 0;
  font-weight: 500;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.1, '#e83f5b')};
  }
`;
