
let clientElements = document.querySelectorAll(".client");

console.log(clientElements.length);

for (const clientElement of clientElements) {

    clientElement.addEventListener("click", (e) => {
        e.preventDefault();
        let pElement = document.createElement("p");
        let textC = clientElement.textContent;
        pElement.textContent = textC;
        let divElement = document.querySelector("#clientName");
        divElement.appendChild(pElement);
        let dElement = document.createElement("span");
        dElement.textContent = new Date().toLocaleString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });

        let dateElement = document.querySelector("#dateNow");
        dateElement.appendChild(dElement);
        window.scrollTo(0, document.body.scrollHeight);
    })
}