module.exports = {
  title: "Руководство пользователя",
  lang: "ru",
  base: "/project-starter-user-documentation/",

  themeConfig: {
    sidebar: getSidebar(),
    outlineTitle: "На этой странице",
  },
};

function getSidebar() {
  return [
    {
      text: "Начало работы",
      items: [{ text: "Регистрация", link: "/registration" }],
    },
  ];
}
