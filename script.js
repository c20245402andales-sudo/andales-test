    console.log ("Hello, world!");
    const myName = "Elmer Andales";
    let age = 20;
    const number = "9052418309";
    const address = "De leon st. bryg2";


    console.log (`Name: ${myName}`);
    console.log (`Age: ${age}`);
    console.log (`Number: ${number}`);
    console.log (`Address: ${address}`);

    function greet(name) {
        return `Good morning, ${name}`;

    }
    console.log(greet(`Rene`)); 


    

    function add (a,b) {
        return a + b;
    }
    function mdas (num1,num2) {
        let m = num1 * num2;
        let d = num1 / num2;
        let a = num1 + num2;
        let s = num1 - num2;
        return (`values: ${num1} and ${num2},\n product: ${m}, \n quotient: ${d}, \n sum: ${a}, \n difference: ${s}`);

        }

    console.log (mdas(5,3));

    const heading = document.querySelector("h1");
    console.log(heading);
    const contactHeading = document.querySelector("#contact h2");
    console.log(contactHeading);
    const servicesHeading = document.querySelector("#services h2");
    console.log(servicesHeading);

    heading.textContent = "My Portfolio";
    contactHeading.textContent = "Lets connect";
    projectHeading.textContent = "My Projects";
    