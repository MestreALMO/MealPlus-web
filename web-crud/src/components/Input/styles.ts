import styled from 'styled-components';

const textColor = '#1b1a16';
const backgroundColor = '#fff';

export const Container = styled.div`
  background-color: ${backgroundColor};
  border: 2px solid ${backgroundColor};
  padding: 4px;
  border-radius: 10px;

  display: flex;
  align-items: center;

  svg {
    margin-left: 6px;
    color: ${textColor};
  }

  input {
    flex: 1;
    border: 0px;
    background: transparent;

    &::placeholder {
      color: ${textColor};
    }
  }

  & + div {
    margin-top: 8px;
  }
`;
