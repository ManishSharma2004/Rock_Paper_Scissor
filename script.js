const start = document.querySelector(".start .button")
const displayIcon = document.querySelector(".result img")
const displayResult = document.querySelector(".resultText")
// const response = document.querySelector(".")

const MainFunction = function (optionId) {
    // const option = document.querySelector(".choose button")
    let correctChoice = (Math.round(Math.random()*10))%3;
    switch (correctChoice) {
        case 0:
            displayIcon.src = "Assests/Rock.png"
            break;
        case 1:
            displayIcon.src = "Assests/paper.png"

            break;
        case 2:
            displayIcon.src = "Assests/sizer.png"

            break;
    
        default:
            break;
    }
    if (correctChoice == optionId){
        displayResult.innerHTML = "Win";
        displayResult.style.color = "green";
    }
    else {
        displayResult.innerHTML = "Retry";
        displayResult.style.color = "rgb(97, 12, 6)"
        // displayResult.style.font-weight = "500px"

    }
}
document.querySelectorAll(".choose button").forEach(button => {
    button.addEventListener("click", function() {
        const optionId = parseInt(this.id); // Get the ID of the clicked button as an integer
        MainFunction(optionId);
    });
});

// start.addEventListener("click", () => {
//     MainFunction()
// });
