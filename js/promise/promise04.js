const addCoffee = (name) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(name);
        }, 500)
    });
};


const coffeeMaker = async () => {
    let coffeeList = '';
    let _addCoffee = async(name) => {
        coffeeList += (coffeeList ? ', ' : '') + (await addCoffee(name));
    };

    await _addCoffee('Espresso');
    console.log(coffeeList);
    await _addCoffee('Americano');
    console.log(coffeeList);
    await _addCoffee('Mocha');
    console.log(coffeeList);
    await _addCoffee('Latte');
    console.log(coffeeList);
};

coffeeMaker();
