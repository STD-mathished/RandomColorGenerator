let code = document.querySelector("#code");

function NewColor() {
    //Generate a random number between 0 and 255
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    //applaying the new style
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    //showing the rgb code
    code.innerHTML = `rgb(${red}, ${green}, ${blue})`;

}