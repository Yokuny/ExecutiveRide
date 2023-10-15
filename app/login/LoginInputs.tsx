import { Input } from "@nextui-org/input";
import type { LoginInputsProps } from "@/types";

const LoginInputs = ({ emailErr, passwordErr, emailValidation, passwordValidation }: LoginInputsProps) => {
  return (
    <>
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

export default LoginInputs;
