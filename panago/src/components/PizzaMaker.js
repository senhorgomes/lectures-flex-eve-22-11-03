import PizzaOven from "./PizzaOven";
import { useState } from "react";

function PizzaMaker() {
    const [listOfIngredients, setListOfIngredients] = useState(["Pepperoni ", "Pineapple "])
    const [individualIngredient, setIndividualIngredient] = useState("")
    const addNewIngredient = () => {
        //Grab the first set of ingredients, and add the new on in front
        setListOfIngredients((prev) => [...prev, individualIngredient]);
        //Reset our input field to blank
        setIndividualIngredient("")
    }
    const pizzaOrder = {
        Ingredients: listOfIngredients,
        Size: "XL",
        Crust: "stuffed crust",
        Sauce: "marinara",
        Shape: "circle"
    }
    return (
        <div>
            <h2>Welcome to Panago How can we help you?</h2>
            {/* The onChange event will update individualIngredient by using the setter individualIngredient */}
            <input value={individualIngredient} onChange={(event) => { individualIngredient(event.target.value) }} />
            {/* Upon clicking, we will trigger our function */}
            <button onClick={addNewIngredient}>Add new ingredient</button>
            <PizzaOven
                pizzaOrder={pizzaOrder}
            />
        </div>
    );
}

export default PizzaMaker;