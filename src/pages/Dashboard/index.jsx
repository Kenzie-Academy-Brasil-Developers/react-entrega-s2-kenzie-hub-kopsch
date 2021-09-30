import { Button, Typography } from "@material-ui/core";
import {
  DivDashboard,
  DivTechs,
  ImageAdd,
  TechAdd,
  TechDesc,
  ComponentAdd,
  CardTech,
} from "./styles";
import { DivUser } from "./styles";
import { TextField, makeStyles } from "@material-ui/core";
import { DivUserCard } from "./styles";
import logoAdd from "../../assets/img/add-icon.png";
import { useEffect, useState } from "react";
import api from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import TechCard from "../../components/TechCard";

const Dashboard = ({ authenticated }) => {
  const token = JSON.parse(localStorage.getItem("@Tech:token"));
  const name = JSON.parse(localStorage.getItem("@Tech:name"));

  const [showComponent, setShowComponent] = useState(false);
  const [infoTech, setInfoTech] = useState([]);

  const useStyles = makeStyles({
    input: {
      marginBottom: "20px",
    },
  });

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  useEffect(() => {
    if (token) {
      api
        .get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => setInfoTech(response.data.techs))
        .catch((_) => toast.error("Algo deu errado."));
    }
  }, [infoTech]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const classes = useStyles();

  const handleTech = (data) => {
    console.log(data);
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.info("Tech criada com sucesso!");
      })
      .catch((_) => toast.error("Algo deu errado."));
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <DivDashboard>
      <DivUser>
        <DivUserCard>
          <Typography variant="h5" color="primary">
            Bem vindo, {name}!
          </Typography>
        </DivUserCard>
      </DivUser>
      <DivTechs>
        <TechAdd onClick={() => setShowComponent(true)}>
          <ImageAdd src={logoAdd} alt="Adicionar" />
          <TechDesc>Add Tech</TechDesc>
        </TechAdd>
        {infoTech.map((tech, index) => {
          const { title, status, id } = tech;
          return (
            <CardTech key={index}>
              <TechCard id={id} token={token} title={title} status={status} />
            </CardTech>
          );
        })}
      </DivTechs>
      {showComponent && (
        <ComponentAdd onSubmit={handleSubmit(handleTech)}>
          <TextField
            className={classes.input}
            type="text"
            variant="filled"
            label="Adicione o nível"
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title?.message}
          />
          <TextField
            className={classes.input}
            type="text"
            variant="filled"
            label="Adicione o nível"
            {...register("status")}
            error={!!errors.status}
            helperText={errors.status?.message}
          />
          <Button
            variant="outlined"
            type="submit"
            onClick={() => setTimeout(() => setShowComponent(false), 100)}
          >
            Criar Tech
          </Button>
        </ComponentAdd>
      )}
    </DivDashboard>
  );
};

export default Dashboard;
