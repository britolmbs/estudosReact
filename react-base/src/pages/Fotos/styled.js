import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  label {
    width: 180px;
    heigth: 180px;
    display: flex;
    backgroud: #eee;
    align-items: center;
    justify-content: center;
    border: 5px dashed ${colors.primaryColor};
    margin: 30px auto;
    cursor: pointer;
    boder-radius: 50%;
    overflow: hidden;
  }
    img {
    width: 180px;
    heigth: 180px;
    }
  input {
    display: none;
  }
`;
