import { Input } from "@nextui-org/input";
import type { RegisterInputsProps } from "@/types";
import { useState } from "react";

const RegisterInputs = ({
  nameErr,
  emailErr,
  passwordErr,
  nameValidation,
  emailValidation,
  passwordValidation,
}: RegisterInputsProps) => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <>
      <Input
        type="text"
        label="Nome"
        value={nameValue || ""}
        onChange={(e) => {
          setNameValue(e.target.value);
          nameValidation(e.target.value);
        }}
        errorMessage={nameErr && "Nome inválido"}
        color={nameErr ? "danger" : "success"}
        variant="faded"
      />
      <Input
        type="email"
        label="Email"
        value={emailValue || ""}
        onChange={(e) => {
          setEmailValue(e.target.value);
          emailValidation(e.target.value);
        }}
        errorMessage={emailErr && "Email inválido"}
        color={emailErr ? "danger" : "success"}
        variant="faded"
      />
      <Input
        type="password"
        label="Senha"
        value={passwordValue || ""}
        onChange={(e) => {
          setPasswordValue(e.target.value);
          passwordValidation(e.target.value);
        }}
        errorMessage={passwordErr && "Senha inválida"}
        color={passwordErr ? "danger" : "success"}
        variant="faded"
      />
    </>
  );
};

export default RegisterInputs;
