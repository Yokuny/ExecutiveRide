export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Taximeter",
  description: "Taximeter - A fullstack project",
  navItems: [
    { label: "inicio", href: "/" },
    { label: "sobre", href: "/about" },
    { label: "contato", href: "/contact" },
    { label: "acesso", href: "/login" },
  ],

  privatePages: [
    { label: "App", href: "/app" },
    { label: "Dados", href: "/app/dashboard" },
    { label: "Registro", href: "/app/register" },
    { label: "Perfil", href: "/app/user" },
  ],
};
