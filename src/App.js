import React from 'react';
import './App.css';
import ToDoList from './todolist';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
        products: [
            {
                id: 1,
                text: "Face - Wash   ",
                completed: false,
            },
            {
                id: 2,
                text: "Brush-teeth",
                completed: true,
            },

            {
                id: 3,
                text: "Break  - fast ",
                completed: true,
            },
            {
                id: 4,
                text: "Office-Work",
                completed: true,
            },
            {
                id: 5,
                text: "Exercise-Gym",
                completed: true,
            },
        ]
    }


}
/*toggleChange = (product) => {
    // const{products}=this.state;
    // const index=products.indexOf(product);

    this.setState((prevState) => ({
        completed: !prevState.completed
    }), () => {
        console.log("this.state",);

    });

}
*/

toggleChange = (id) => {
  console.log("this.state", this.state);
    this.setState((prevState) => {
        const updatedProducts = prevState.products.map((product) => {
            if (product.id === id) {
                // Toggle the completed status
                return { ...product, completed: !product.completed };
            }
            return product;
        });

        return {
            products: updatedProducts,
        };
    });
}
render(){
  const {products}=this.state;
  return (
    <div className="App">
      <h1>My Goals</h1>
         <ToDoList
         products={products}
         onToggleChange={this.toggleChange}
         />   
    </div>
  );
}
}

export default App;
