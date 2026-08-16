function createNameSection(name) {
  const container = document.createElement("div");
  container.classList.add("heading-container");
  const heading = document.createElement("h1");
  heading.textContent = name;

  container.appendChild(heading);

  return container;
}

export { createNameSection };
