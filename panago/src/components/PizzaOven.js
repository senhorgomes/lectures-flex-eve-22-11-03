function PizzaOven({pizzaOrder}){
    //This takes in a list of ingredients
    const customPizza=(pizzaObject) => {
        const arrayOfLi = []
        for(let arg in pizzaObject){
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