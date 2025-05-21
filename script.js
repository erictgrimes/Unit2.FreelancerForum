//initial array of freelancers
let freelancers = [
  {
    name: "Alice",
    occupation: "Writer",
    price: 30,
  },
  {
    name: "Bob",
    occupation: "Teacher",
    price: 50,
  },
];

//freelancers to be added overtime
const randomName = ["Allen", "Jake", "Beverly", "Richard", "Blake", "Jerry"];
const randomOccupation = ["Writer", "Plummer", "Handyman", "Designer", "CPA"];

//table structure
function structure() {
  const root = document.querySelector("#root");

  const h1 = document.createElement("h1");
  h1.innerHTML = "Freelancer Forum";
  root.append(h1);

  const avgDiv = document.createElement("div");
  avgDiv.setAttribute("id", "avgPrice");
  root.append(avgDiv);
  renderAverage();

  const h2 = document.createElement("h2");
  h2.innerHTML = "Available Freelancers";
  root.append(h2);

  //creates elements of table
  const freelanceTable = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  //creates thead names for all keys
  freelanceTable.appendChild(thead);
  for (let key of Object.keys(freelancers[0])) {
    const th = document.createElement("th");
    th.innerText = key;
    thead.appendChild(th);
  }

  freelanceTable.appendChild(tbody);
  root.appendChild(freelanceTable);
  renderFreelancers();
}

function renderFreelancers() {
  const freelancerTable = document.querySelector("tbody");
  const freelancerValue = freelancers.map((freelancer) => {
    const row = document.createElement("tr");
    const freeName = document.createElement("td");
    freeName.innerHTML = freelancer.name;

    const freeOccupation = document.createElement("td");
    freeOccupation.innerHTML = freelancer.occupation;

    const freePrice = document.createElement("td");
    freePrice.innerHTML = freelancer.price;

    row.appendChild(freeName);
    row.appendChild(freeOccupation);
    row.appendChild(freePrice);

    return row;
  });

  freelancerTable.replaceChildren(...freelancerValue);
}
const renderAverage = () => {
  const avgDiv = document.querySelector("#avgPrice");
  const avgPrice = calcAvg(freelancers);
  const p = document.createElement("p");
  p.innerHTML = `The average starting price is $${avgPrice}`;
  avgDiv.replaceChildren(p);
};

function calcAvg(arr) {
  const avgPrice =
    arr.reduce((total, person) => total + person.price, 0) / arr.length;
  return avgPrice.toFixed(2);
}

function addFreelancer() {
  const name = randomName[Math.floor(Math.random() * randomName.length)];
  const occupation =
    randomOccupation[Math.floor(Math.random() * randomOccupation.length)];
  const price = Math.floor(Math.random() * 100);
  freelancers.push({ name, occupation, price });
  renderAverage();
  renderFreelancers();
}

setInterval(addFreelancer, 3000);
structure();
