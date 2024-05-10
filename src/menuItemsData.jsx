export const menuItemsData = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Films",
    url: "/films",
    icon: "fas fa-bars",
    submenu: [
      {
        title: "Now Playing",
        url: "/nowplaying",
      },
      {
        title: "Coming Soon",
        url: "comingsoon",
      },
      {
        title: "Popular",
        url: "popular",
      },
      {
        title: "Top Rated",
        url: "toprated",
      },
    ],
  },
  {
    title: "Lists",
    url: "lists",
  },
  {
    title: " ",
    url: "user",
    icon: "fas fa-magnifying-glass",
  },
  {
    title: " ",
    url: "add",
    icon: "fas fa-add",
  },
];
