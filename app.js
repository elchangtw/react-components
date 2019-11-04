// TODO



// Creating and rendering a React component

// var App = () => (
//   <div id="app">
//     <ul>
//       <li>Tea</li>
//       <li>Milk</li>
//     </ul>
//   </div>
// );



// Creating and rendering nested React components

// var App = () => (
//   <div id="app">
//     <h2>Grocery List</h2>
//     <Tea />
//     <Milk />
//   </div>
// );

// var Tea = () => (
//   <li>Tea</li>
// );
  
// var Milk = () => (
//   <li>Milk</li>
// );
  


// Component Properties aka "props"

// var GroceryList = (props) => (
//   <ul>
//     <li>{props.todos[0]}</li>
//     <li>{props.todos[1]}</li>
//     <li>{props.todos[2]}</li>
//   </ul>
// );

// var App = () => (
// <div>
//   <h2>My Todo List</h2>
//   <GroceryList todos={['Tea', 'Milk', 'Death']}/>
// </div>
// );



// Handling User Events

// var GroceryList = (props) => {

//   // This function will be called when the first `<li>` below is clicked on
//   // Notice that event handling functions receive an `event` object
//   // We want to define it where it has access to `props`
  
//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   };
  
//   // Because we used curly braces with this arrow function
//   // we have to write an explicit `return` statement
//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.todos[0]}</li>
//       <li>{props.todos[1]}</li>
//       <li>{props.todos[2]}</li>
//     </ul>
//   );
// }
  
// var App = () => (
//   <div>
//     <h2>Grocery List</h2>
//     <GroceryList todos={['Tea', 'Milk', 'Death']}/>
//   </div>
// );



// Making applications interactive with state

// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
// class GroceryListItem extends React.Component {

//   // A `constructor` method is expected on all ES6 classes
//   // When React instantiates the component,
//   // it will pass `props` to the constructor
//   constructor(props) {
//     // Equivalent to ES5's React.Component.call(this, props)
//     super(props);
//   }
  
//   // Every class component must have a `render` method
//   // Stateless functional components are pretty much just this method
//   render() {
//     // `props` is no longer passed as an argument,
//     // but instead accessed with `this.props`
//     return (
//       <li>{this.props.todo}</li>
//     );
//   }
// }
  
// // Update our `TodoList` to use the new `TodoListItem` component
// // This can still be a stateless function component!
// var GroceryList = (props) => (
//   <ul>
//     {props.todos.map(todo =>
//       <GroceryListItem todo={todo} />
//     )}
//   </ul>
// );

// var App = () => (
//   <div>
//     <h2>Grocery List</h2>
//     <GroceryList todos={['Tea', 'Milk', 'Death']}/>
//   </div>
// );



// State

// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
class GroceryListItem extends React.Component {

  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);
    this.state = {
      checking: false
    };
  }
    
//   onListItemClick() {
//     this.setState({
//         done: !this.state.done
//     });
//   }
    
  onToggle(){
    this.setState({
        checking: !this.state.checking
    });
  }

  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {
    // Making the style conditional on our `state` lets us
    // update it based on user interactions.
    var style = {
      //textDecoration: this.state.done ? 'line-through' : 'none'
      textDecoration: this.state.checking ? 'bold' : 'none'
    };
    
    // You can pass inline styles using React's `style` attribute to any component
    // snake-cased css properties become camelCased this this object
    return (
      //<li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
      <li style={style} onMouseOver={this.onToggle.bind(this)}>{this.props.todo}</li>
    );
  }
}
    
// Update our `TodoList` to use the new `TodoListItem` component
// This can still be a stateless function component!
var GroceryList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <GroceryListItem todo={todo} />
    )}
  </ul>
);
  
var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList todos={['Tea', 'Milk', 'Death']}/>
  </div>
);








ReactDOM.render(<App />, document.getElementById("app"));