//JS for React -----------------------------------------------------------------------------------------------------
//const: values that don’t change (e.g., constants, functions, React components).
//let: mutable variables (loops, counters, state manipulation inside functions).

//Arrow functions automatically bind this → useful in event handlers.

//Arrays methods 
// 1. .map() → Transform an array into another array
// Returns a new array (does not modify original).
// Commonly used to render lists of elements in React.

const numbers = [1,2,3];
const doubled = numbers.map(num => num * 3);
console.log(doubled);

//in react 
const users = ["Mamu", "Alex", "Ravi"];

<ul>
  {users.map((user, index) => (
    <li key={index}>{user}</li>
  ))}
</ul>

// 2. .filter() → Keep only items that match a condition
// Returns a new array.
// Useful for search, filtering lists, removing items.
// arr.filter(item => { /* condition */ })

const nums = [1, 2, 3, 4];
const even = nums.filter(n => n % 2 === 0);
console.log(even); // [2, 4]

const arr = [1,2,3,4,5,6,7];

export default function Even() {
    const even = arr.filter(i => i % 2 == 0)
        .map(i =>
            <li key={i}>{i}</li>
        );

    return (
        <ul>{even}</ul>
    );
}

//reduce() → Reduce an array to a single value
// Returns a single value (not an array).
// Useful for aggregating data, calculating totals, etc.
//arr.reduce((accumulator, currentValue) => { /* ... */ }, initialValue)
const nums2 = [1, 2, 3, 4];
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum); // 10

const list = [
    {title: 'Pen', price: 25},
    {title: 'Book', price: 35}
];

export default function Sum() {
    const total = list.reduce((acc, obj) => acc + obj.price, 0);
    return (
        <>{total}</>   
    )
}

//forEach() → Execute a function for each item
// Does not return anything (void).
// Used for side effects, not for transforming data.
// arr.forEach((item, index) => { /* ... */ })

const nums3 = [1, 2, 3];
nums.forEach(n => console.log(n * 2));
// Prints: 2, 4, 6

export default function ForEachExample() {
    const nums4 = [1, 2, 3];
    nums4.forEach(n => console.log(n * 2));
    return (
        <div>
            Check the console for output.
        </div>
    );
}

//find() → Find the first item that matches a condition
// Returns the first matching item or undefined.
// Useful for searching in arrays.
// arr.find(item => { /* condition */ })

const users1 = [{id:1, name:"Mamu"}, {id:2, name:"Alex"}];
const user1 = users.find(u => u.id === 2);
console.log(user); // {id:2, name:"Alex"}

export default function Find() {
    const users = [
        {user: 'Ram', id: 1},
        {user: 'Shyam', id: 2}
    ]
    const res = users.find(u => u.id == 1);

    return (
      <>Selected user: {res.user}.</>
    )
}

//some() → Check if at least one item matches a condition
// Returns true or false.
// Useful for checking conditions in arrays.
// arr.some(item => { /* condition */ })

const nums4 = [1, 2, 3];
console.log(nums.some(n => n > 2)); // true
console.log(nums.some(n => n > 5)); // false

export default function App() {
    const nums = [1, 2, 3];
    return (
        <>{nums.some(item => item == 4) && 
        <p>Luxury item in cart!</p>}
        </>
     )
}

//every() → Check if all items match a condition
// Returns true or false.
// Useful for validating conditions in arrays.
// arr.every(item => { /* condition */ })

const nums5 = [2, 4, 6];
console.log(nums.every(n => n % 2 === 0)); // true

export default function App() {
    const tasks = [
        {title: 'Work', id: '1', done: true},
        {title: 'Coding', id: '2', done: false}
    ]
    return (
        <>
            {tasks.every(task  => task.done) ? <p>All task are done yup...</p> : <p>Please do all task...</p>} 
        </>
     )
}

// map → render UI lists
// filter → remove or show specific items
// reduce → totals, calculations
// forEach → run side effects (logging, counters)
// find → locate a single item
// some → check if any item meets condition
// every → check if all items meet condition

//Object Destructuring
//Objects store data in key-value pairs. In React, props and state are objects.
//Destructuring extracts properties into variables.

const person = { name: "Mamu", age: 22 };
const { name, age } = person;

console.log(name); // "Mamu"
console.log(age);  // 22

export default function User() {
    const user = {
        userName: 'Ram',
        age: 25
    };
    const {userName, age} = user;

    return (
        <>
        <h2>The user {userName} and his/her age {age}.</h2>
        </>
        
    )
}

//You can destructure nested objects. 
const user2 = {
  id: 1,
  profile: {
    username: "Mamu",
    email: "mamu@example.com"
  }
};

const { profile: { username, email } } = user2;

console.log(username); // "Mamu"
console.log(email);    // "mamu@example.com"