"use strict";

let main = document.querySelector("main");

// --------- Functions ---------
/**
 * Delete a company
 * @param {int} id - The id
 * @param {string} container - The Box
 */
const deleteCompany = async (id, container) => {
  let url = "?page=fetch&action=deleteCompany&id=" + id;
  let response = await fetch(url);
  if (response.status === 200) {
    let data = await response.json();
    if (data.info) {
      console.log("Deleted");
      getCompaniesList(container);
    } else {
      console.log("Failed");
    }
  } else {
    console.log("Something went wrong with the error code " + response.status);
  }
};

/**
 * Delete a person
 * @param {int} id - The id
 * @param {string} container - The Box
 */
const deletePerson = async (id, container) => {
  let url = "?page=fetch&action=deletePerson&id=" + id;
  let response = await fetch(url);
  if (response.status === 200) {
    let data = await response.json();
    if (data.info) {
      console.log("Deleted");
      getPersonsList(container);
    } else {
      console.log("Failed");
    }
  } else {
    console.log("Something went wrong with the error code " + response.status);
  }
};

/**
 * Get companies as a list
 * @param {Element} companyBox - The id
 */
const getCompaniesList = async (companyBox) => {
  let url = "?page=fetch&action=getCompaniesList";
  let response = await fetch(url);

  if (response.status === 200) {
    let data = await response.json();
    companyBox.innerHTML = "";
    if (data.info) {
      data.info.map((company) => {
        companyBox.innerHTML += `<li id=${company.id}>name: ${company.name} and address: ${company.address}
                                  <span class="delete-company">${deleteIcon}</span>
                                  <a href="/?page=company&action=edit&id=${company.id}">${editIcon}</a>
                                </li>`;
      });

      // Add event listener fo deleting a company
      let deleteCompanies = document.querySelectorAll(".delete-company");
      deleteCompanies.forEach((el) => {
        el.addEventListener("click", () => {
          deleteCompany(el.parentElement.id, companyBox);
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
 * Get persons as a list
 * @param {Element} companyBox - The id
 * @param {boolean} noIcons - The Box
 */
const getPersonsList = async (personsBox, noIcons = false) => {
  let url = "?page=fetch&action=getPersonsList";
  let response = await fetch(url);
  if (response.status === 200) {
    let data = await response.json();
    personsBox.innerHTML = "";
    if (data.info) {
      data.info.map((person) => {
        if (!noIcons) {
          personsBox.innerHTML += `<li id=${person.id}>name: ${person.name} and address: ${person.title} and phone: ${person.phone}
          <span class="delete-person">${deleteIcon}</span>
          <a href="/?page=person&action=edit&id=${person.id}">${editIcon}</a>
        </li>`;
        } else {
          personsBox.innerHTML += `<li class="selectable" id=${person.id}>name: ${person.name} and address: ${person.title} and phone: ${person.phone}</li>`;
        }
      });
      // Make the persons selectable if needed
      if (noIcons) {
        let selectablePersons = personsBox.querySelectorAll(".selectable");
        selectablePersons.forEach((selectPerson) => {
          selectPerson.addEventListener("click", (e) => {
            e.target.classList.toggle("selected");
          });
        });
      } else {
        // Make persons deletable
        let deleteCompanies = document.querySelectorAll(".delete-person");
        deleteCompanies.forEach((el) => {
          el.addEventListener("click", () => {
            deletePerson(el.parentElement.id, personsBox);
          });
        });
      }
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
 * @param {string} contactPersonsId - The connected person
 */
const registerCompany = async (name, address, contactPersonsId) => {
  let url = "?page=fetch&action=registerCompany&name=" + name + "&address=" + address + "&contactPersonsId=" + contactPersonsId;
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
  let url = "?page=fetch&action=registerPerson&name=" + name + "&title=" + title + "&phone=" + phone;
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
  let url = "?page=fetch&action=updateCompany&id=" + id + "&name=" + name + "&address=" + address;
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
  let url = "?page=fetch&action=updatePerson&id=" + id + "&name=" + name + "&title=" + title + "&phone=" + phone;
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

// --------- Company page
if (main.id == "companyPage") {
  let companyForm = document.querySelector(".company form");
  let personsBox = document.querySelector(".persons .body .list");

  // Show persons in the form
  if (personsBox) {
    getPersonsList(personsBox, true);
  }

  // Register a company
  if (companyForm.id === "register") {
    companyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let name = e.target.querySelector('[name="name"]').value.trim();
      let address = e.target.querySelector('[name="address"]').value.trim() || "";
      let contactPersonsId = "";
      let selectablePersons = e.target.querySelectorAll(".selectable.selected");
      selectablePersons.forEach((selectPerson) => {
        contactPersonsId += selectPerson.id + ",";
      });

      if (name !== "") {
        registerCompany(name, address, contactPersonsId);
      } else {
        console.log("name is empty");
      }
    });
  }

  // Update a company's info
  if (companyForm !== "register") {
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
}

// --------- Person page
if (main.id == "personPage") {
  let personForm = document.querySelector(".person form");

  // Register a person
  if (personForm.id === "register") {
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

  // Update a person's info
  if (personForm.id !== "register") {
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
