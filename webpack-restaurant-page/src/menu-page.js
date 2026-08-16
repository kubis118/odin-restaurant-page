import { createNameSection } from "./home-page.js";

function menuPage(menu, content) {
  content.appendChild(createNameSection("Menu"));
  content.appendChild(createFoodGroupHeading("Beverages"));
  content.appendChild(createGroupFoodCards(menu.beverages));
  content.appendChild(createFoodGroupHeading("Sides"));
  content.appendChild(createGroupFoodCards(menu.sides));
  content.appendChild(createFoodGroupHeading("Main Courses"));
  content.appendChild(createGroupFoodCards(menu.mains));

  function createFoodGroupHeading(heading) {
    const container = document.createElement("div");
    container.classList.add("menu-group-heading-container");

    const text = document.createElement("h2");
    text.textContent = heading;

    container.append(text);

    return container;
  }
  function createGroupFoodCards(group) {
    const container = document.createElement("div");
    container.classList.add("menu-group-container");

    for (let i = 0; i < group.length; i++) {
      const element = group[i];

      const itemContainer = document.createElement("div");
      itemContainer.classList.add("item-container");

      const heading = document.createElement("h3");
      heading.textContent = element.name;
      const description = document.createElement("p");
      description.textContent = element.description;
      const containerImg = document.createElement("div");
      containerImg.classList.add("menu-img-container");
      const price = document.createElement("h4");
      price.textContent = element.price;
      const img = document.createElement("div");
      img.classList.add("food-img");

      containerImg.append(price, img);
      itemContainer.append(heading, description, containerImg);
      container.append(itemContainer);
    }

    return container;
  }
}

export { menuPage };
