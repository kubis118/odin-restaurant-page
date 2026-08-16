import { createNameSection } from "./general.js";

function homePage(info, content) {
  content.appendChild(createNameSection(info.name));
  content.appendChild(createSection("About", info.about));
  content.appendChild(createHoursSection("Hours", info.hours));
  content.appendChild(createSection("Location", info.location));

  function createSection(title, text) {
    const container = document.createElement("div");
    container.classList.add("container");

    const heading = document.createElement("h2");
    heading.textContent = title;

    const paragraph = document.createElement("p");
    paragraph.textContent = text;

    container.append(heading, paragraph);

    return container;
  }

  function createHoursSection(title, hours) {
    const container = document.createElement("div");
    container.classList.add("container");

    const heading = document.createElement("h2");
    heading.textContent = title;

    container.append(heading);

    for (const key in hours) {
      if (!Object.hasOwn(hours, key)) continue;

      const element = hours[key];

      const dayHours = document.createElement("p");
      dayHours.textContent = `${capitalizeFirstLetter(key)} ${element.open} - ${element.close}`;

      container.appendChild(dayHours);
    }

    return container;
  }

  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}

export { homePage };
