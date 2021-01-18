
let client1Elements = document.querySelector(".client1");
let client2Elements = document.querySelector(".client2");
let client3Elements = document.querySelector(".client3");
let client4Elements = document.querySelector(".client4");
let client5Elements = document.querySelector(".client5");


client1Elements.addEventListener("click", (e) => {
    e.preventDefault();

});

client2Elements.addEventListener("click", (e) => {
    e.preventDefault();

}); client3Elements.addEventListener("click", (e) => {
    e.preventDefault();

}); client4Elements.addEventListener("click", (e) => {
    e.preventDefault();

}); client5Elements.addEventListener("click", (e) => {
    e.preventDefault();

});



client1Elements.addEventListener("click", () => {

    let pElement = document.createElement("p");

    pElement.id = "JardinsAriana"
    pElement.textContent = "Jardins d'Ariana";
    console.log(pElement);
    let divElement = document.querySelector("#clientName");
    divElement.appendChild(pElement);

    let dElement = document.createElement("span");
    let date1 = new Date();
    let date = date1.toLocaleString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
    dElement.textContent = date;
    console.log(dElement);
    // let dateElement = document.querySelector("#clientList");
    divElement.appendChild(dElement);

})

client2Elements.addEventListener("click", () => {

    let pElement = document.createElement("p");

    pElement.id = "Livran"
    pElement.textContent = "Jérôme Livran";
    console.log(pElement);
    let divElement = document.querySelector("#clientName");
    divElement.appendChild(pElement);

    let dElement = document.createElement("span");
    let date1 = new Date();
    let date = date1.toLocaleString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
    dElement.textContent = date;
    console.log(dElement);
    let dateElement = document.querySelector("#dateNow");
    dateElement.appendChild(dElement);

})

client3Elements.addEventListener("click", () => {

    let pElement = document.createElement("p");

    pElement.id = "Parguey"
    pElement.textContent = "Philippe Parguey";
    console.log(pElement);
    let divElement = document.querySelector("#clientName");
    divElement.appendChild(pElement);

    let dElement = document.createElement("span");
    let date1 = new Date();
    let date = date1.toLocaleString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
    dElement.textContent = date;
    console.log(dElement);
    let dateElement = document.querySelector("#dateNow");
    dateElement.appendChild(dElement);

})

client4Elements.addEventListener("click", () => {

    let pElement = document.createElement("p");

    pElement.id = "Archimed"
    pElement.textContent = "Archimed";
    console.log(pElement);
    let divElement = document.querySelector("#clientName");
    divElement.appendChild(pElement);

    let dElement = document.createElement("span");
    let date1 = new Date();
    let date = date1.toLocaleString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
    dElement.textContent = date;
    console.log(dElement);
    let dateElement = document.querySelector("#dateNow");
    dateElement.appendChild(dElement);

})

client5Elements.addEventListener("click", () => {

    let pElement = document.createElement("p");

    pElement.id = "BeCom"
    pElement.textContent = "Becom";
    console.log(pElement);
    let divElement = document.querySelector("#clientName");
    divElement.appendChild(pElement);

    let dElement = document.createElement("span");
    let date1 = new Date();
    let date = date1.toLocaleString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
    dElement.textContent = date;
    console.log(dElement);
    let dateElement = document.querySelector("#dateNow");
    dateElement.appendChild(dElement);

    

});


