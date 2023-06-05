const button = document.getElementById("selector-bar");
const monthly = document.querySelectorAll(".monthly");
const annually = document.querySelectorAll(".annually");
let activateButton = "Monthly";

button.addEventListener("click", () => {
    if (activateButton == "Monthly") {
        button.style.justifyContent = "flex-start";
        button.style.justifyContent = "flex-start";
        activateButton = "Annually";

        monthly.forEach(element => {
            element.style.display = "none";
        });

        annually.forEach(element => {
            element.style.display = "block";
        });

    } else {
        button.style.justifyContent = "flex-end";
        activateButton = "Monthly";

        annually.forEach(element => {
            element.style.display = "none";
        });

        monthly.forEach(element => {
            element.style.display = "block";
        });
    }
});
