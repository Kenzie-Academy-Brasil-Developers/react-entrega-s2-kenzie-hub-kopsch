import styled from "styled-components";

export const Name = styled.div`
  height: 50%;
  background: #c3c3c3;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 13pt;
    text-transform: uppercase;
  }
`;

export const Status = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 10pt;
    text-transform: uppercase;
  }
`;

export const DeleteTech = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  cursor: pointer;
  background: #c3c3c3;
  padding: 8px 10px;

  &:hover {
    filter: brightness(125%);
  }
`;
