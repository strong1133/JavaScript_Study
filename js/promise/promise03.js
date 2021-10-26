const addCoffee = (name) => {
    return (prevName) => {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                const newName = prevName ? `${prevName} , ${name}` : name;
                console.log(newName)
                resolve(newName);
            }, 500)
        });
    };
};

addCoffee('Espresso')()
    .then(addCoffee('Americano'))
    .then(addCoffee('Mocha'))
    .then(addCoffee('Latte'));