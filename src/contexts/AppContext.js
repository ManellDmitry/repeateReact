import { createContext } from "react";
import { getLocale } from "../i18n";

const navLinks = [
  { id: "1", label: getLocale("home"), path: "", iconName: "home" },
  { id: "2", label: getLocale("owr_work"), path: "our-work", iconName: "team" },
  {
    id: "3",
    label: getLocale("about_us"),
    path: "about-us",
    iconName: "calendar",
  },
  {
    id: "4",
    label: getLocale("what_we_do"),
    path: "what-we-do",
    iconName: "documents",
  },
  {
    id: "5",
    label: getLocale("get_in_touch"),
    path: "get-in-touch",
    iconName: "projects",
  },
];

const user = {
  avatar:
    "https://i.pinimg.com/736x/44/43/d0/4443d00cfe2c55edd373d409981eba1b.jpg",
  name: {
    firstName: "Dima",
    lastName: "Manell",
  },
};

export const AppContext = createContext({ navLinks, user });
