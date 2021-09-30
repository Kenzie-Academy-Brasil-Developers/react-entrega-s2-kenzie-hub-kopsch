import "./styles";
import { Name, Status, DeleteTech } from "./styles";
import { toast } from "react-toastify";
import api from "../../services/api";

const TechCard = ({ id, token, title, status }) => {
  const deleting = (id) => {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.techs);
      })
      .catch((_) => toast.error("Algo deu errado."));
  };
  return (
    <>
      <DeleteTech onClick={() => deleting(id)}>X</DeleteTech>
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
