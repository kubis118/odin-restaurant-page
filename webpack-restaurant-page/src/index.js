import "./styles.css";
import "./home-page.css";
import { homePage } from "./home-page.js";
import { info, menu, contact } from "./data.js";
import { menuPage } from "./menu-page.js";
import { contactPage } from "./contact-page.js";

const container = document.querySelector("#content");
document.querySelector("#btn-home").addEventListener("click", () => {
  container.innerHTML = "";
  homePage(info, container);
});

document.querySelector("#btn-menu").addEventListener("click", () => {
  container.innerHTML = "";
  menuPage(menu, container);
});

document.querySelector("#btn-contact").addEventListener("click", () => {
  container.innerHTML = "";
  contactPage(contact, content);
});

homePage(info, container);
