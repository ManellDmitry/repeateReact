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
    "https://upload.wikimedia.org/wikipedia/uk/thumb/a/a4/%D0%92%D0%BE%D0%BB%D0%B4%D0%B5%D0%BC%D0%BE%D1%80%D1%82.jpg/250px-%D0%92%D0%BE%D0%BB%D0%B4%D0%B5%D0%BC%D0%BE%D1%80%D1%82.jpg",
  name: {
    firstName: "Lord",
    lastName: "Voldemort",
  },
};

export const AppContext = createContext({ navLinks, user });
