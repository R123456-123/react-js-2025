//creating and nexting a component
function Button() {
    return (
        <button>I'm a button</button>
    );
}

export default function MyButton() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <Button />
        </div>
    );
}

//Displaying a component with props
const user = {
    name: 'Hanr Yaha',
    imageUrl: 'https://randomuser.me/api/portraits',
    imageSize: 90
};

export default function UserProfile() {
    return (
        <div>
            <h1>{user.name}</h1>
            <img 
            className="avatar"
            src={user.imageUrl}
            alt={"Photo of " + user.name}
            style={{ 
                width: user.imageSize,
                height: user.imageSize
            }}
            />
        </div>
    )
}

//conditional rendering
let content;
if(isLoggedIn) {
    content = <AdminPanel />;
} else {
    content = <LoginPanel />;
}

return (
    <div> 
        {content}
    </div>
)

//<div> {isLoggedIn ? (<AdminPanel />) : (<LoginPanel />)} <div />

//When you don’t need the else branch, you can also use a shorter logical && syntax:

{/* <div>
  {isLoggedIn && <AdminPanel />}
</div> */}

//rendering a list

// const products = [
//     {id: 1, name: 'Apple'},
//     {id: 2, name: 'Banana'}
// ];

// const productlist = products.map(product => {
//     <li key={product.id}>
//         {product.name}
//     </li>
// });

// return (
//     <ul>{productlist}</ul>
// );

//rendering the lists
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
    const productList = products.map(product => 
        <li 
        key={product.id}
        style={{
            color: product.isFruit ? 'red' : 'green'
        }}>
            {product.title}
        </li>
    );

    return (
        <ul>{productList}</ul>
    );
}

const lists = [
    {title: 'Cabbage', isFruit: false, id: 1},
    {title: 'Spanich', isFruit: false, id: 2 },
    {title: 'Apple', isFruit: true, id: 3 }
]

export default function App() {
   const listsItem = lists.map(product => 
       <li 
           key={product.id}
           style={{
               color : product.isFruit ? 'orange'  : 'green'
           }}>
           {product.title}
       </li>
   )
    
    return (
        <>
        <ul>
            {listsItem}
        </ul>
        </>
    )
}

//responding to events
export default function MyFunction() {
    function Event() {
        alert("I am Bittu")
    }

    return (
        <>
        <button onClick={Event}>I am a Button</button>
        </>
    )
}

//updating the screen
import {useState} from 'react'

export default function App() {
    return (
        <div>
          <h3>Updating separately</h3>
          <MyButton />  
          <MyButton />
        </div>
    )
}

function MyButton() {
    const [count , setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    
    return (
        <>
          <button 
              onClick={handleClick} >
              The {count} is changing.
          </button>
        </>
    )
}

//Functions starting with use are called Hooks. useState is a built-in Hook provided by React. You can
// find other built-in Hooks in the API reference. You can also write your own Hooks by combining the existing ones.
//Hooks are more restrictive than other functions. You can only call Hooks at the top of your components 
// (or other Hooks). If you want to use useState in a condition or a loop, extract a new component and put it there.

//This is called “lifting state up”. By moving state up, you’ve shared it between components.import {useState} from 'react'
//Sharing data between components 
export default function App() {

    const [count , setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    return (
        <div>
          <h3>Updating separately</h3>
          <MyButton  count={count} onClick={handleClick} />  
          <MyButton count={count} onClick={handleClick} />
        </div>
    )
}

function MyButton( { count, onClick }) {
    return (
        <>
          <button 
              onClick={onClick} >
              The {count} is changing.
          </button>
        </>
    )
}