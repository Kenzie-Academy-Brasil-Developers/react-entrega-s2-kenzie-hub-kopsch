import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField, makeStyles } from "@material-ui/core";
import {
  StyledForm,
  StyledSelect,
  DivUser,
  DivLogo,
  Image,
  HaveLogin,
  TextLink,
  DivRegister,
} from "./styles";
import logo from "../../assets/img/kenzie.svg";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

const Register = () => {
  const history = useHistory();

  const useStyles = makeStyles({
    input: {
      marginBottom: "20px",
      width: "75%",
    },
    button: {
      marginBottom: "20px",
    },
    link: {
      textDecoration: "none",
    },
  });

  const classes = useStyles();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Formato inválido"),
    course_module: yup.string().ensure().required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        "^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
        "A senha precisa no mínimo de um número e um símbolo"
      ),
  });

  const options = [
    {
      value: "Primeiro módulo (Introdução ao Frontend)",
      label: "Primeiro módulo",
    },
    { value: "Segundo módulo (Frontend Avançado)", label: "Segundo módulo" },
    {
      value: "Terceiro módulo (Introdução ao Backend)",
      label: "Terceiro módulo",
    },
    { value: "Quarto módulo (Backend avançado)", label: "Quarto módulo" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = ({
    name,
    email,
    bio,
    course_module,
    password,
    contact,
  }) => {
    const user = { name, email, bio, course_module, password, contact };
    api
      .post("/users", user)
      .then((_) => {
        toast.success("Sucesso ao criar a conta");
        history.push("/login");
      })
      .catch((_) => toast.error("Erro ao criar a conta. Use outro e-mail."));
  };

  return (
    <DivRegister>
      <DivUser>
        <StyledForm onSubmit={handleSubmit(handleLogin)}>
          <TextField
            className={classes.input}
            variant="outlined"
            inputProps={{ style: { textAlign: "center" } }}
            label="Escreva seu usuário"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
            size="small"
          />

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
            label="Escreva sua bio"
            {...register("bio")}
            error={!!errors.bio}
            helperText={errors.bio?.message}
            size="small"
          />

          <TextField
            className={classes.input}
            variant="outlined"
            label="Informe seu contato"
            {...register("contact")}
            error={!!errors.contact}
            helperText={errors.contact?.message}
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

          <StyledSelect {...register("course_module")}>
            {options.map((elm, index) => (
              <option key={index} value={elm.value}>
                {elm.label}
              </option>
            ))}
          </StyledSelect>
          <Button className={classes.button} variant="outlined" type="submit">
            REGISTRAR
          </Button>
          <HaveLogin>
            Já está cadastrado? Aperte{" "}
            <Link className={classes.link} to="/login">
              <TextLink>aqui</TextLink>
            </Link>
          </HaveLogin>
        </StyledForm>
      </DivUser>
      <DivLogo>
        <Image src={logo} alt="Kenzie Academy" />
      </DivLogo>
    </DivRegister>
  );
};

export default Register;
