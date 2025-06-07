let bookingHistory = [];

function registerUser() {
  const name = document.getElementById("username").value.trim();
  if (name) {
    alert(`Registered successfully as ${name}`);
    console.log(`Email sent: Welcome ${name}, your account has been created.`);
  } else {
    alert("Please enter your username.");
  }
}

function bookCylinder() {
  const paymentMethod = document.getElementById("payment").value;
  const time = new Date().toLocaleString();
  const record = `Cylinder booked on ${time} using ${paymentMethod}`;
  bookingHistory.push(record);
  updateHistory();
  console.log(`Email sent: Cylinder booking confirmed. Payment by ${paymentMethod}`);
}

function updateHistory() {
  const list = document.getElementById("historyList");
  list.innerHTML = "";
  bookingHistory.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}