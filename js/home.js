const htmlTag = document.getElementsByTagName("html")[0];
htmlTag.setAttribute("data-theme", "light");
// addevenlestener for noakhali donation
document
  .getElementById("noakhali-donation-btn")
  .addEventListener("click", function () {
    const amount = parseFloat(
      document.getElementById("amount-for-noakhali").value
    );
    if (amount < 0 || isNaN(amount)) {
      alert("balance failed to added");
      return;
    }
    // balance added to account balance
    const balance = document.getElementById("account-balance");
    const accountBalance = parseFloat(balance.innerText);
    const newAccountBalance = accountBalance - amount;
    if (newAccountBalance < 0) {
      alert("failed to donate money");
      return;
    }
    balance.innerText = newAccountBalance;

    // balance added to the noakhali donation page
    const donatedBalance = document.getElementById("noakhali-donated-balance");
    const noakhaliDonatedBalance = parseFloat(donatedBalance.innerText);
    const newDonatedBalance = noakhaliDonatedBalance + amount;
    donatedBalance.innerText = newDonatedBalance;

    // added to history
    const history = document.getElementById("history");
    const div = document.createElement("div");

    div.innerHTML = `
    <h1 class="text-lg font-bold"> ${amount} Taka is Donated for flood relief at Noakhali ,Bangladesh </h1>
           <p class="text-gray-600">Date: ${new Date()} </p>
    `;
    div.classList.add("border");
    div.classList.add("rounded-xl");
    div.classList.add("py-4");
    div.classList.add("my-4");
    history.append(div);

    amount = "";
  });

// add evenLestener for feni

document
  .getElementById("feni-donation-btn")
  .addEventListener("click", function () {
    const amount = parseFloat(document.getElementById("amount-for-feni").value);

    if (amount < 0 || isNaN(amount)) {
      alert("balance failed to added");
      return;
    }

    // balance added to account balance
    const balance = document.getElementById("account-balance");
    const accountBalance = parseFloat(balance.innerText);
    const newAccountBalance = accountBalance - amount;
    if (newAccountBalance < 0) {
      alert("failed to donate money");
      return;
    }
    balance.innerText = newAccountBalance;

    // balance added to the feni donation page
    const donatedBalance = document.getElementById("feni-donated-balance");
    const feniDonatedBalance = parseFloat(donatedBalance.innerText);
    const newDonatedBalance = feniDonatedBalance + amount;
    donatedBalance.innerText = newDonatedBalance;

    // added to history
    const history = document.getElementById("history");
    const div = document.createElement("div");

    div.innerHTML = `
    <h1 class="text-lg font-bold"> ${amount} Taka is Donated for flood relief at Feni,Bangladesh </h1>
           <p class="text-gray-600">Date: ${new Date()} </p>
    `;
    div.classList.add("border");
    div.classList.add("rounded-xl");
    div.classList.add("py-4");
    div.classList.add("my-4");
    history.append(div);
  });

// add evenListener for quota movement

document
  .getElementById("quota-donation-btn")
  .addEventListener("click", function () {
    const amount = parseFloat(
      document.getElementById("amount-for-quota").value
    );
    if (amount < 0 || isNaN(amount)) {
      alert("balance failed to added");
      return;
    }

    // balance added to account balance
    const balance = document.getElementById("account-balance");
    const accountBalance = parseFloat(balance.innerText);
    const newAccountBalance = accountBalance - amount;
    if (newAccountBalance < 0) {
      alert("failed to donate money");
      return;
    }
    balance.innerText = newAccountBalance;

    // balance added to the quota donation page
    const donatedBalance = document.getElementById("quota-donated-balance");
    const quotaDonatedBalance = parseFloat(donatedBalance.innerText);
    const newDonatedBalance = quotaDonatedBalance + amount;
    donatedBalance.innerText = newDonatedBalance;

    // added to history
    const history = document.getElementById("history");
    const div = document.createElement("div");

    div.innerHTML = `
    <h1 class="text-lg font-bold"> ${amount} Taka is Donated for quota movement ,Bangladesh </h1>
           <p class="text-gray-600">Date: ${new Date()} </p>
    `;
    div.classList.add("border");
    div.classList.add("rounded-xl");
    div.classList.add("py-4");
    div.classList.add("my-4");
    history.append(div);
  });

document.getElementById("history-btn").addEventListener("click", function () {
  document.getElementById("history").classList.remove("hidden");
  document.getElementById("donaton-part").classList.add("hidden");
});
document.getElementById("donation-btn").addEventListener("click", function () {
  document.getElementById("history").classList.add("hidden");
  document.getElementById("donaton-part").classList.remove("hidden");
});
