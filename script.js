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
let newFreelancers = [
  {
    name: "Carol",
    occupation: "programmer",
    price: 70,
  },
  {
    name: "Frank",
    occupation: "Handyman",
    price: 80,
  },
  {
    name: "Beverly",
    occupation: "designer",
    price: 120,
  },
  {
    name: "Richard",
    occupation: "Finance",
    price: 50,
  },
  {
    name: "Dr. Henly",
    occupation: "Nutritionist",
    price: 40,
  },
  {
    name: "Marco",
    occupation: "Plummer",
    price: 80,
  },
  {
    name: "Leslie",
    occupation: "Wedding Planner",
    price: 100,
  },
];

//table structure
function structure() {
  const root = document.querySelector("#root");

  const h1 = document.createElement("h1");
  h1.innerHTML = "Freelancer Forum";
  root.append(h1);

  //have to add template literal for average
  const p = document.createElement("p");
  p.innerHTML = `The average starting price is`;
  root.append(p);

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

const addFreelancer = () => {
  const newFreelancer =
    newFreelancers[Math.floor(Math.random() * newFreelancers.length)];

  freelancers.push(newFreelancer);

  renderFreelancers();
};
const average = 
setInterval(addFreelancer, 3000);
structure();
