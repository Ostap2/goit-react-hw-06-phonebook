import styled from 'styled-components';
import { Form } from 'formik';

export const Forma = styled(Form)`
  width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: black solid 3px;
  padding: 20px;
  border-radius: 10px;

  input {
    padding: 10px;
    background-color: transparent;
    border-radius: 24px;
    border: black solid 3px;
  }
  label {
    margin-top: 28px;
    margin-bottom: 10px;
  }
  button {
    cursor: pointer;
    padding: 10px;
    border-radius: 24px;
    background-color: transparent;
    border: black solid 2px;
    transition: 1s;
    margin-top: 30px;
    &:hover {
      scale: 1.06;
      transition: 1s;
    }
  }
  
`;
