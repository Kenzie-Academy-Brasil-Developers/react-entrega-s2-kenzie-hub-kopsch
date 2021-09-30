import "./styles";
import { Name, Status } from "./styles";

const TechCard = ({ title, status }) => {
  return (
    <>
      <Name>
        <span>Tech: {title}</span>
      </Name>
      <Status>
        <span>Nível: {status}</span>
      </Status>
    </>
  );
};

export default TechCard;
