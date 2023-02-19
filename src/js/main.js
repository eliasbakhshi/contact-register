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
        console.log(company);
        companyBox.innerHTML += `<li id=${company.id}>
                                    <div class="company-logo"></div>
                                    <div class="info">
                                      <span class="name">${company.name}</span>
                                      <span class="title"><br> ${company.address}</span>
                                      <span class="contact-person"><br>${userIcon}<a href="tel:"${company.address}">${company.address}</a></span>
                                    </div>
                                    <div class="actions">
                                    <a class="edit" href="/?page=company&action=edit&id=${company.id}">${editIcon}</a>
                                    <span class="delete delete-company">${deleteIcon}</span>
                                    </div>
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
      let contactPersonsId = document.querySelector("section.persons").dataset.persons;
      if (contactPersonsId) contactPersonsId.split(",");
      let selected = "";
      data.info.map((person) => {
        if (!noIcons) {
          personsBox.innerHTML += `<li id=${person.id}>
                                    <div class="avatar"></div>
                                    <div class="info">
                                      <span class="name">${person.name}</span>
                                      <span class="title"><br> ${person.title}</span>
                                    </div>
                                    <div class="actions">
                                    <a class="edit" href="/?page=person&action=edit&id=${person.id}">${editIcon}</a>
                                    <span class="delete delete-person">${deleteIcon}</span>
                                    </div>
                                  </li>`;
        } else {
          selected = contactPersonsId.indexOf(String(person.id)) !== -1 ? "selected" : "";
          personsBox.innerHTML += `<li class="selectable ${selected}" id=${person.id}>
                                    <div class="avatar"></div>
                                    <div class="info">
                                      <span class="name">${person.name}</span>
                                      <span class="title"><br> ${person.title}</span>
                                    </div>
                                  </li>`;
        }
      });
      // Make the persons selectable if needed
      if (noIcons) {
        let selectablePersons = personsBox.querySelectorAll(".selectable");
        selectablePersons.forEach((selectPerson) => {
          selectPerson.addEventListener("click", (e) => {
            if( selectPerson.contains(e.target) ) {
              selectPerson.classList.toggle("selected");
            }
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
 * @param {string} contactPersonsId - The connected persons
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
 * @param {string} contactPersonsId - The connected persons
 */
const updateCompany = async (id, name, address, contactPersonsId) => {
  let url = "?page=fetch&action=updateCompany&id=" + id + "&name=" + name + "&address=" + address + "&contactPersonsId=" + contactPersonsId;
  let response = await fetch(url);
  if (response.status === 200) {
    let data = await response.json();
    let message = document.querySelector(".message");
    message.style.display = "block";
    if (data.info) {
      message.innerHTML = "Updated";
    } else {
      message.innerHTML = "Failed";
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
  if (companyForm) {
    companyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let id = Number(e.target.id);
      let name = e.target.querySelector('[name="name"]').value.trim();
      let address = e.target.querySelector('[name="address"]').value.trim() || "";
      let contactPersonsId = "";
      let selectablePersons = e.target.querySelectorAll(".selectable.selected");
      selectablePersons.forEach((selectPerson) => {
        contactPersonsId += selectPerson.id + ",";
      });
      // Remove extra comma at the start and at the end
      contactPersonsId = contactPersonsId.replace(/,\s*$/, "");

      if (name !== "" && companyForm.id === "register") {
        registerCompany(name, address, contactPersonsId);
        e.target.reset();
      } else if (name !== "" && companyForm.id !== "register") {
        console.log(id, name, address, contactPersonsId);
        updateCompany(id, name, address, contactPersonsId);
      }
    });
  }
}

// --------- Person page
if (main.id == "personPage") {
  let personForm = document.querySelector(".person form");

  // Register a person
  if (personForm) {
    personForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let id = Number(e.target.id);
      let name = e.target.querySelector('[name="name"]').value.trim();
      let title = e.target.querySelector('[name="title"]').value.trim() || "";
      let address = e.target.querySelector('[name="title"]').value.trim() || "";
      let phone = e.target.querySelector('[name="phone"]').value.trim() || "";
      if (name !== "" && personForm.id === "register") {
        registerPerson(name, address, phone);
        e.target.reset();
      } else if (name !== "" && personForm.id !== "register") {
        updatePerson(id, name, title, phone);
      }
    });
  }

  // Update a person's info
  // if (personForm.id !== "register") {
  //   personForm.addEventListener("submit", (e) => {
  //     e.preventDefault();
  //     let id = Number(e.target.id);
  //     let name = e.target.querySelector('[name="name"]').value.trim();
  //     let title = e.target.querySelector('[name="title"]').value.trim() || "";
  //     let phone = e.target.querySelector('[name="phone"]').value.trim() || "";
  //     if (name !== "") {
  //       updatePerson(id, name, title, phone);
  //     } else {
  //       console.log("name is empty");
  //     }
  //     e.target.reset();
  //   });
  // }
}
