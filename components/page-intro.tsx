import { title, subtitle } from "@/components/primitives";

const PageIntro = () => {
  return (
    <div className="inline-block max-w-lg text-center justify-center">
      <h1 className={title()}>Escolha seu&nbsp;</h1>
      <h1 className={title({ color: "green" })}>destino&nbsp;</h1>
      <h2 className={subtitle({ class: "mt-4" })}>Seu aplicativo</h2>
    </div>
  );
};

export default PageIntro;
