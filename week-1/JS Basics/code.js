function firstEx() {
  let boughtTesla = true;
  const yearOfTeslaPurchase = 2014;
  let isUSCitizen = false;
  let currentYear = 2017;

  if (boughtTesla === true && isUSCitizen === true) {
    if (yearOfTeslaPurchase - currentYear >= 4) {
      console.log("Would you like an upgrade?");
    } else {
      console.log("Are you satisfied with the car?");
    }
  } else if (boughtTesla === true && isUSCitizen === false) {
    console.log("Would you like to move to the US?");
  } else {
    console.log("Do you want to buy a Tesla");
  }
}

function secondEx() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(numbers);
  numbers.splice(1, 2);
  console.log(
    "Instruction: delete the second and third elements\nArr: " + numbers
  );
  numbers[3] = 1;
  console.log("Instruction: change the fourth element to 1\nArr: " + numbers);
  numbers.splice(numbers.length - 4, 4);
  console.log("Instruction: delete the last 4 elements\nArr: " + numbers);
  numbers.unshift(0);
  console.log(
    "Instruction: add another element 0 to the beginning of the array\nArr: " +
    numbers
  );

  console.log("Instruction: print the modified array\nArr: " + numbers);
}

function thirdEx() {
  let p1 = {
    name: "Jill",
    age: 23,
    city: "Not Haifa",
  };
  let p2 = {
    name: "Robert",
    age: 23,
    city: "Haifa",
  };
  if (p1.age == p2.age) {
    if (p1.city == p2.city) {
      console.log(p1.name + " wanted to date " + p2.name);
    } else {
      console.log(p1.name + " wanted to date " + p2.name + ", but couldn’t");
    }
  }
}

function fourthEx() {
  const reservations = {
    bob: { claimed: false },
    ted: { claimed: true },
  };

  const name = prompt(
    "Please enter the name for your reservation"
  ).toLowerCase();
  if (reservations[name] != undefined) {
    if (reservations[name].claimed == false) {
      console.log("Welcome, " + name + ".");
    } else {
      console.log(
        "Hello, " + name + ". Hmm, someone already claimed this reservation"
      );
    }
  } else {
    reservations[name] = { clamed: true };
    console.log(reservations);
  }
}

function fifthEx() {
  const names = ["Ashley", "Donovan", "Lucas"];
  const ages = [23, 47, 18];
  const people = [];
  for (let i in names) {
    people.push({ name: names[i], age: ages[i] });
  }
  console.log(people);
  for (item of people) {
    console.log(item.name + " is " + item.age + " years old");
  }
}

function sixthEx() {
  const posts = [
    { id: 1, text: "Love this product" },
    { id: 2, text: "This is the worst. DON'T BUY!" },
    { id: 3, text: "So glad I found this. Bought four already!" },
  ];
  for (let ind in posts) {
    if (posts[ind].id === 2) {
      posts.splice(ind, 1);
      break;
    }
  }
  console.log(posts);
}

function seventhEx() {
  const posts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]
}