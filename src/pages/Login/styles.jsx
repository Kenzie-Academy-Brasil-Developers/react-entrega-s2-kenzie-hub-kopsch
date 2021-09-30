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
  border-radius: 10px;
  background: #fff;
  height: 350px;
  box-shadow: 0px 0px 40px 10px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 0px 40px 10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 40px 10px rgba(0, 0, 0, 0.3);
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
  @media (max-width: 639px) {
    width: 100%;
  }
`;

export const DivLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  @media (max-width: 639px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 50%;
`;

export const HaveLogin = styled.span`
  color: #007aff;
  font-size: 0.7rem;
`;

export const TextLink = styled.span`
  color: #0c0c5f;
`;

export const ComponentAdd = styled.div`
  width: 300px;
  height: 300px;
`;
