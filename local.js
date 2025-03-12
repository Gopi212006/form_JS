/** @format */


document.querySelector("#Submit-btn").addEventListener("click", (e) => {
  e.preventDefault();

  let Name = document.getElementById("firstname").value;

  let gmail = document.getElementById("gmaild").value;

  let dob = document.getElementById("dob").value;

  let Age = document.getElementById("Age").value;

  let role = document.getElementById("Role").value;

  let gender = document.querySelector('input[name="Gender"]:checked').value;

  var store = JSON.parse(localStorage.getItem("customerData")) || [];

  let customersDeatils = {
    custName: Name,
    custgmail: gmail,
    custdob: dob,
    custRole: role,
    custgender: gender,
    custAge: Age,
    custInvites: formsinvite,
  };

  store.push(customersDeatils);

  localStorage.setItem("customerData", JSON.stringify(store));

  document.getElementById("formDetails").reset();

  formsinvite = [];

  document.getElementById("ul-container").innerHTML = "";

  alert("Successfuly register");
});
