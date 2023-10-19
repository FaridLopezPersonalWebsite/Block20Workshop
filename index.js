const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() { 
  const root = document.getElementById("root");

  if (root){
  const h1 = document.createElement("h1");
  h1.innerHTML = "FREELANCERS";
  root.appendChild(h1);
  } else {
    console.log("Not Working");
}

// if (root){
//     const ul = document.createElement("ul");
//     const listTwo = document.createElement("ul");
//     ul.innerHTML = "Unordered list";
//     listTwo.innerHTML = "Unordered list";
//     root.appendChild(ul);
//     root.appendChild(listTwo);
// } else { 
//     console.log("error");
// }

}
main()

function main2() {
    
  const root = document.getElementById("root");

  if (root) {
    for (let i = 0; i < users.length; i++) {
      let listName = document.createElement("ul");
      let listAge = document.createElement("ul");
      let listOccupation = document.createElement("ul");
      listName.innerHTML = users[i].name;
      root.appendChild(listName);
      listAge.innerHTML = users[i].age;
      root.appendChild(listAge);
      listOccupation.innerHTML = users[i].occupation;
      root.appendChild(listOccupation);
        }
  } else {
      console.error("list element not found");
    }
};

main2()

