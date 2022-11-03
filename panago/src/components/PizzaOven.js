function PizzaOven({pizzaOrder}){
    //This takes in an object of ingredients
    const customPizza=(pizzaObject) => {
        const arrayOfLi = []
        //Loops through the keys
        for(let arg in pizzaObject){
            //For each key in pizzaObject, we want to create a li element, with the key and keyValue
            //The li can be another component with the information passed down via props as well
            arrayOfLi.push(<li>
                {arg}: {pizzaObject[arg]}
                </li>)
        }
        return arrayOfLi
    }
    return (
        <ul>
            {customPizza(pizzaOrder)}
        </ul>
    );
}

export default PizzaOven;