import React, { Component }from "react"
import "./app.css"
import Cart from "./components/cart/cart"  
import Card from "./components/cart/Card"


class App extends Component {
  constructor(props){
    super(props);
    this.state =  Cart; //create state for Cart
  }
  render() {
    return (
    this.state.map((pricing) => {   //create new array using map function
      return (        
        <div className="App">
          <Card // getting detalis through cart
          title = {pricing.title} 
          price = {pricing.price}
          priceper = {pricing.priceper}
          currency = {pricing.currency}
          features = {pricing.data}
          nofeatures = {pricing.data1}
          />
        </div>
      );
    })
    )
  }
}

export default App;
