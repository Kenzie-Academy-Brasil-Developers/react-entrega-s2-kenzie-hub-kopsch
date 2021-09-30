import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField, makeStyles } from "@material-ui/core";
import {
  StyledForm,
  DivForm,
  DivLogo,
  Image,
  HaveLogin,
  TextLink,
  DivLogin,
} from "./styles";
import logo from "../../assets/img/kenzie.svg";
import { Link, useHistory, Redirect } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

const Login = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();

  const useStyles = makeStyles({
    input: {
      marginBottom: "20px",
      width: "75%",
    },
    button: {
      marginBottom: "30px",
    },
    link: {
      textDecoration: "none",
    },
  });

  const classes = useStyles();

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Formato inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = ({ email, password }) => {
    const user = { email, password };
    api
      .post("/sessions", user)
      .then((response) => {
        const { token } = response.data;
        const { name } = response.data.user;
        localStorage.setItem("@Tech:token", JSON.stringify(token));
        localStorage.setItem("@Tech:name", JSON.stringify(name));
        setAuthenticated(true);
        return history.push("/dashboard");
      })
      .catch((_) => toast.error("Senha ou e-mail incorretos."));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <DivLogin>
      <DivForm>
        <StyledForm onSubmit={handleSubmit(handleLogin)}>
          <TextField
            className={classes.input}
            variant="outlined"
            label="Escreva seu email"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            size="small"
          />

          <TextField
            className={classes.input}
            variant="outlined"
            type="password"
            label="Informe sua senha"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            size="small"
          />

          <Button className={classes.button} variant="outlined" type="submit">
            LOGIN
          </Button>
          <HaveLogin>
            Ainda não está cadastrado? Aperte{" "}
            <Link className={classes.link} to="/">
              <TextLink>aqui</TextLink>
            </Link>
          </HaveLogin>
        </StyledForm>
      </DivForm>
      <DivLogo>
        <Image src={logo} alt="Kenzie Academy" />
      </DivLogo>
    </DivLogin>
  );
};

export default Login;
