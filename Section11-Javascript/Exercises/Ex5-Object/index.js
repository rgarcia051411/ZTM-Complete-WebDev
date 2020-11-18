// Create an object and an array which we will use in our facebook exercise.

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

const userLogin = {
  username: "robinson",
  password: "password",
};

// 2. Create an array which contains the object you have made above and name the array "database".

const database = [
  {
    username: "robinson",
    password: "robinsongarcia",
  },
  {
    username: "kristine",
    password: "kristinegarcia",
  },
  {
    username: "thor",
    password: "thorgarcia",
  },
  {
    username: "lexy",
    password: "lexygarcia",
  },
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

const newsFeed = [
  {
    username: "Sheldon",
    timeLine: "I hate geologist",
  },
  {
    username: "Howard",
    timeLine: "Loves women",
  },
  {
    username: "Rajesh",
    timeLine: "how to talk to women?",
  },
];

//function declaration

function signIn(username, password) {
  for (let i = 0; i < database.length; i++) {
    if (
      username === database[i].username &&
      password === database[i].password
    ) {
      return newsFeed;
    }
  }
  return "invalid login";
}

console.log(signIn("robinson", "robinsongarcia"));
