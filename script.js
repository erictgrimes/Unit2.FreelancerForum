//initial array of freelancers
let freelancer = [
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
let newFreelancer = [
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

  const p = document.createElement("p");
  p.innerHTML = `The average starting price is `;
  root.append(p);

  const h2 = document.createElement("h2");
  h2.innerHTML = "Available Freelancers";
  root.append(h2);

  const freelancerTable = document.createHTML("table");
  const thead = document.createHTML("thead");
  const tbody = document.createHTML("tbody");

  for (let key of Object.keys(freelancer[0])) {
    const th = document.createElement("th");
    th.innerHTML(key);
    thead.appendChild(th);
  }
  freelancerTable.appendChild(thead);
  freelancerTable.appendChild(tbody);
  root.append(freelancerTable);

  //renderFreelancers();
}

//function renderFreelancers() {
//  const freelancerTable = document.querySelector("tbody");
//}

structure();
