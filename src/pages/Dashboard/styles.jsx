import styled from "styled-components";

export const DivUser = styled.div`
  width: 100%;
  height: 25vh;
  background: #007aff;
`;

export const DivDashboard = styled.div`
  height: 100vh;
`;

export const DivUserCard = styled.div`
  width: 400px;
  height: 12%;
  background-color: #fff;
  border-radius: 50px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  top: 19vh;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 424px) {
    width: 280px;
  }
`;

export const DivTechs = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

export const ImageAdd = styled.img`
  width: 75%;
`;

export const TechDesc = styled.h3`
  color: #00afc3;
`;

export const TechAdd = styled.div`
  &:hover ${ImageAdd} {
    filter: brightness(125%);
  }
  &:hover ${TechDesc} {
    filter: brightness(125%);
  }
  width: 200px;
  height: 250px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 60px 40px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  cursor: pointer;
`;

export const ComponentAdd = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  position: absolute;
  top: 30%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  background-color: #84ffe8;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const CardTech = styled.div`
  width: 200px;
  height: 250px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 60px 40px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  position: relative;
`;
