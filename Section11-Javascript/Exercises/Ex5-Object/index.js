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
    password: "password",
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
  if (username === database[0].username && password === database[0].password)
    console.log(newsFeed);
  else console.log("Invalid login, try again!");
}

signIn("meow", "password");
