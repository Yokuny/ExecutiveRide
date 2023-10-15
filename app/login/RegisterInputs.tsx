import { Input } from "@nextui-org/input";
import type { RegisterInputsProps } from "@/types";

const RegisterInputs = ({
  nameErr,
  emailErr,
  passwordErr,
  nameValidation,
  emailValidation,
  passwordValidation,
}: RegisterInputsProps) => {
  return (
    <>
      <Input
        type="text"
        label="Nome"
        onChange={(e) => nameValidation(e.target.value)}
        errorMessage={nameErr && "Nome inválido"}
        color={nameErr ? "danger" : "success"}
        variant="faded"
      />
      <Input
        type="email"
        label="Email"
        onChange={(e) => emailValidation(e.target.value)}
        errorMessage={emailErr && "Email inválido"}
        color={emailErr ? "danger" : "success"}
        variant="faded"
      />
      <Input
        type="password"
        label="Senha"
        onChange={(e) => passwordValidation(e.target.value)}
        errorMessage={passwordErr && "Senha inválida"}
        color={passwordErr ? "danger" : "success"}
        variant="faded"
      />
    </>
  );
};

export default RegisterInputs;
