"use strict";

let main = document.querySelector("main");

// --------- Functions ---------
/**
 * Get all companies as list
 */
const deleteCompany = async (companyBox) => {};
/**
 * Get all companies as list
 */
const getCompaniesList = async (companyBox) => {
  let url = "?dir=fetch&action=getCompaniesList";
  let response = await fetch(url);

  if (response.status === 200) {
    let data = await response.json();
    companyBox.innerHTML = "";
    if (data.info) {
      data.info.map((company) => {
        companyBox.innerHTML += `<li id=${company.id}>name: ${company.name} and address: ${company.address}
                                  <span class="delete-company">${deleteIcon}</span>
                                  <a href="/?dir=edit&type=company&id=${company.id}">${editIcon}</a>
                                </li>`;
      });

      let deleteCompanies = Array.from( document.querySelectorAll(".delete-company"));
      console.log(deleteCompanies);
      deleteCompanies.forEach((el) => {
        el.addEventListener("click", (e) => {
          console.log(e);
        });
      });
    } else {
      companyBox.innerHTML = "<li>There is no company to show.</li>";
    }
  } else {
    console.log("Something went wrong with the error code " + response.status);
  }
};

/**
 * Get all persons as list
 */
const getPersonsList = async (personsBox) => {
  let url = "?dir=fetch&action=getPersonsList";
  let response = await fetch(url);
  if (response.status === 200) {
    let data = await response.json();
    personsBox.innerHTML = "";
    if (data.info) {
      data.info.map((person) => {
        personsBox.innerHTML += `<li id=${person.id}>name: ${person.name} and title: ${person.title} and phone: ${person.phone}</li>`;
      });
    } else {
      personsBox.innerHTML = "<li>There is no person to show.</li>";
    }
  } else {
    console.log("Something went wrong with the error code " + response.status);
  }
};

/**
 * Register a new company
 * @param {string} name - The name
 * @param {string} address - The address
 */
const registerCompany = async (name, address) => {
  let url = "?dir=fetch&action=registerCompany&name=" + name + "&address=" + address;
  let response = await fetch(url);
  if (response.status === 200) {
    let data = await response.json();
    if (data.info) {
      console.log("registered");
    } else {
      console.log("Failed");
    }
  } else {
    console.log("Something went wrong with the error code " + response.status);
  }
};

/**
 * Register a new person
 * @param {string} name - The name
 * @param {string} title - The address
 * @param {string} phone - The phone
 */
const registerPerson = async (name, title, phone) => {
  let url = "?dir=fetch&action=registerPerson&name=" + name + "&title=" + title + "&phone=" + phone;
  let response = await fetch(url);
  if (response.status === 200) {
    let data = await response.json();
    if (data.info) {
      console.log("registered");
    } else {
      console.log("Failed");
    }
  } else {
    console.log("Something went wrong with the error code " + response.status);
  }
};

/**
 * Update a company's info
 * @param {int} id - The ID
 * @param {string} name - The name
 * @param {string} address - The address
 */
const updateCompany = async (id, name, address) => {
  let url = "?dir=fetch&action=updateCompany&id=" + id + "&name=" + name + "&address=" + address;
  let response = await fetch(url);
  if (response.status === 200) {
    let data = await response.json();
    if (data.info) {
      console.log("Updated");
    } else {
      console.log("Failed");
    }
  } else {
    console.log("Something went wrong with the error code " + response.status);
  }
};

/**
 * Update a person's info
 * @param {int} id - The ID
 * @param {string} name - The name
 * @param {string} title - The address
 * @param {string} phone - The phone
 */
const updatePerson = async (id, name, title, phone) => {
  let url = "?dir=fetch&action=updatePerson&id=" + id + "&name=" + name + "&title=" + title + "&phone=" + phone;
  let response = await fetch(url);
  if (response.status === 200) {
    let data = await response.json();
    if (data.info) {
      console.log("Updated");
    } else {
      console.log("Failed");
    }
  } else {
    console.log("Something went wrong with the error code " + response.status);
  }
};

// --------- Script ---------
// --------- Start page
if (main.id == "startPage") {
  let companyBox = document.querySelector(".companies .body .list");
  let personsBox = document.querySelector(".persons .body .list");

  // Show companies in the box
  if (companyBox) {
    getCompaniesList(companyBox);
  }

  // Show persons in the box
  if (personsBox) {
    getPersonsList(personsBox);
  }
}

// --------- Create page
if (main.id == "createPage") {
  let companyForm = document.querySelector(".company form");
  let personForm = document.querySelector(".person form");

  // Functions

  // Register a company
  if (companyForm) {
    companyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let name = e.target.querySelector('[name="name"]').value.trim();
      let address = e.target.querySelector('[name="address"]').value.trim() || "";
      if (name !== "") {
        registerCompany(name, address);
      } else {
        console.log("name is empty");
      }
    });
  }

  // Register a person
  if (personForm) {
    personForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let name = e.target.querySelector('[name="name"]').value.trim();
      let address = e.target.querySelector('[name="title"]').value.trim() || "";
      let phone = e.target.querySelector('[name="phone"]').value.trim() || "";
      if (name !== "") {
        registerPerson(name, address, phone);
      } else {
        console.log("name is empty");
      }
    });
  }
}

// --------- Edit page
if (main.id == "editPage") {
  let companyForm = document.querySelector(".company form");
  let personForm = document.querySelector(".person form");

  // Update a company's info
  if (companyForm) {
    companyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let id = Number(e.target.id);
      let name = e.target.querySelector('[name="name"]').value.trim();
      let address = e.target.querySelector('[name="address"]').value.trim() || "";
      console.log(id, name, address);
      if (name !== "") {
        updateCompany(id, name, address);
      } else {
        console.log("name is empty");
      }
    });
  }

  // Update a person's info
  if (personForm) {
    personForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let id = Number(e.target.id);
      let name = e.target.querySelector('[name="name"]').value.trim();
      let title = e.target.querySelector('[name="title"]').value.trim() || "";
      let phone = e.target.querySelector('[name="phone"]').value.trim() || "";
      if (name !== "") {
        updatePerson(id, name, title, phone);
      } else {
        console.log("name is empty");
      }
    });
  }
}
