module.exports = {
  title: "Руководство пользователя",
  lang: "ru",
  base: "/project-starter-user-documentation/",
  appearance: false,

  themeConfig: {
    sidebar: getSidebar(),
    outlineTitle: "На этой странице",
    docFooter: {
      prev: "Предыдущая страница",
      next: "Следующая страница",
    },
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
