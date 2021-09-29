import styled from "styled-components";

export const DivLogin = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 100vh;
`;

export const StyledForm = styled.form`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  border-radius: 20px;
  background: #fff;
  height: 350px;
  box-shadow: rgba(255, 255, 255, 0.4) 5px 5px,
    rgba(255, 255, 255, 0.3) 10px 10px, rgba(255, 255, 255, 0.2) 15px 15px,
    rgba(255, 255, 255, 0.1) 20px 20px, rgba(255, 255, 255, 0.05) 25px 25px;
`;

export const StyledSelect = styled.select`
  border: none;
  height: 34px;
  outline: none;
  border-radius: 5px;
  background: #007aff;
  color: #fff;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const DivForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  background: #007aff;
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

export const HaveLogin = styled.span`
  color: #007aff;
  font-size: 0.7rem;
  align-self: flex-end;
  margin-right: 15px;
`;

export const TextLink = styled.span`
  color: #0c0c5f;
`;
