new Promise((resolve) => {
    setTimeout(()=>{
        let name = 'Espresso';
        console.log(name)
        resolve(name);
    }, 500)
})

    .then((prevName)=> {
        return new Promise((resolve) => {
            setTimeout(()=>{
                let name = prevName+ ', Americano';
                console.log(name)
                resolve(name);
            }, 500)
        })
    }) 
    .then((prevName)=> {
        return new Promise((resolve) => {
            setTimeout(()=>{
                let name = prevName+ ', Mocha';
                console.log(name)
                resolve(name);
            }, 500)
        })
    }) 
    .then((prevName)=> {
        return new Promise((resolve) => {
            setTimeout(()=>{
                let name = prevName+ ', Latte';
                console.log(name)
                resolve(name);
            }, 500)
        })
    }) 