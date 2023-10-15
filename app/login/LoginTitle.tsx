import { title, subtitle } from "@/components/primitives";

const LoginTitle = () => {
  return (
    <div className="inline-block md:max-w-sm max-w-xs text-center justify-center">
      <h1 className={title()}>
        Gerencie suas <span className={title({ color: "blue" })}>corridas</span>.
      </h1>
      <h2 className={subtitle({ class: "mt-4" })}>Tenha acesso à seu app de gestão de transporte</h2>
    </div>
  );
};

export default LoginTitle;
