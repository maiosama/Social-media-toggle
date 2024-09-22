
const selectColorMode = () => {
    console.log(localStorage.getItem("colorMode"));
    localStorage.getItem("colorMode") == "light" ? setLightMode() : setDarkMode()
}



function setDarkMode() {
    document.querySelector("body").classList = "dark"
}

function setLightMode() {
    document.querySelector("body").classList = "light"
}

selectColorMode();
const radioButtons = document.querySelectorAll(".toggle__wrapper input");

for (let i = 0; i < radioButtons.length; i++) {
    console.log(radioButtons)
    radioButtons[i].addEventListener('click', (event) => {
        if (document.getElementById("dark").checked) {
            localStorage.setItem("colorMode", "dark")
        } else if (document.getElementById("light").checked) {
            localStorage.setItem("colorMode", "light")

        }
    })
}

