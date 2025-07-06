class Initial_Page {
  static #header = document.querySelector("header");
  static #nav = document.querySelector("nav");
  static #content = document.querySelector("#content");

  static setupPage () {
    this.#setupHeader();
    this.#setupNav();
  }

  static #addButtons (parent) {
    const allButtons = ["home", "menu", "about"];
    for (let i of allButtons) {
      let button = document.createElement("button");
      button.textContent = i;
      button.classList.add(i);
      parent.appendChild(button);
    }
  }

  static #setupHeader () {
    const title = document.createElement("h1");
    title.textContent = "Home Style Cooks";
    this.#header.appendChild(title);

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");
    this.#header.appendChild(buttons);

    this.#addButtons(buttons);
  }

  static #setupNav () {
    const logo = document.createElement("div");
    logo.classList.add("logo");
    this.#nav.appendChild(logo);

    const chefHat = document.createElement("div");
    chefHat.classList.add("chef-hat");
    logo.appendChild(chefHat);

    const slogan = document.createElement("h2");
    slogan.textContent = "Very yummyyyy!!!";
    logo.appendChild(slogan);

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");
    this.#nav.appendChild(buttons);

    this.#addButtons(buttons);
  }
};

export default Initial_Page;