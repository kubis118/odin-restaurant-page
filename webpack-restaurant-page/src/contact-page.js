import { createNameSection } from "./general.js";

function contactPage(contacts, content) {
  content.appendChild(createNameSection("Contact Us"));
  content.appendChild(createContactCard(contacts.contacts));

  function createContactCard(contact) {
    const container = document.createElement("div");
    container.classList.add("contact-container");

    for (let i = 0; i < contact.length; i++) {
      const element = contact[i];

      const contactContainer = document.createElement("div");
      contactContainer.classList.add("contact-card-container");

      const heading = document.createElement("h2");
      heading.textContent = element.name;
      const position = document.createElement("p");
      const phone = document.createElement("p");
      const email = document.createElement("p");
      position.textContent = element.position;
      phone.textContent = element.phone;
      email.textContent = element.email;

      contactContainer.append(heading, position, phone, email);
      container.append(contactContainer);
    }

    return container;
  }
}

export { contactPage };
