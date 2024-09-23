

// setting the radio buttons
const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const radioButtons = document.querySelectorAll(".toggle__wrapper input");

//to chenge the mode when the radio button is clicked
const selectColorMode = () => {

    if (localStorage.getItem("colorMode") == "light") {
        setLightMode();
        lightButton.click()
    } else if (localStorage.getItem("colorMode") == "dark") {
        setDarkMode();
        darkButton.click()
    }
}


//to change to the dark mode
const setDarkMode = () => {
    document.querySelector("body").classList = "dark";
    localStorage.setItem('colorMode', 'dark')
}

// to change to the light mode
const setLightMode = () => {
    document.querySelector("body").classList = "light";
    localStorage.setItem('colorMode', 'light')
}

//check when th eprefer color scheme change to change the color mode
const checkModeChange = () => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
        console.log("checkModeChange");
        checkMode()
    })
}

//check the prefer color scheme for the oprating system and set the mode accordingly
const checkMode = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        darkButton.click();
        setDarkMode()
    } else if ((window.matchMedia('(prefers-color-scheme: light)').matches)) {
        lightButton.click();
        setLightMode();
    }
}
selectColorMode();
checkMode();
checkModeChange();

//add the eventListener to the radio buttons and set the local staorage accordignly
for (let i = 0; i < radioButtons.length; i++) {
    console.log(radioButtons)
    radioButtons[i].addEventListener('click', (event) => {
        if (darkButton.checked) {
            localStorage.setItem("colorMode", "dark");
            setDarkMode();
        } else if (lightButton.checked) {
            localStorage.setItem("colorMode", "light");
            setLightMode();

        }
    })
}

