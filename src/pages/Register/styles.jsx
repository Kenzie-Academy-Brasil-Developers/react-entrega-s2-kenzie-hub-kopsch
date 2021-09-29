import styled from "styled-components";

export const DivRegister = styled.div`
  display: flex;
  height: 100vh;
`;

export const StyledForm = styled.form`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  border-radius: 10px;
  background: #fff;
  height: 580px;
  box-shadow: 0px 0px 40px 10px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 0px 40px 10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 40px 10px rgba(0, 0, 0, 0.3);
`;

export const StyledSelect = styled.select`
  width: 75%;
  border: none;
  height: 40px;
  outline: none;
  border-radius: 5px;
  background: #4343ff;
  color: #fff;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 0 10px;
`;

export const DivUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  background: #4343ff;
`;

export const DivLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
`;

export const Image = styled.img`
  width: 50%;
`;

export const HaveLogin = styled.small`
  color: #007aff;
  font-size: 0.7rem;
`;

export const TextLink = styled.span`
  color: #0c0c5f;
`;
