let themeDot = document.getElementsByClassName('theme-dot')
let themeStyle = document.getElementById('theme-style')

const setTheme = (mode) => {
    themeStyle.href = `${mode}.css`
    localStorage.setItem('theme', mode)
}

let theme = localStorage.getItem('theme')

if (theme === null) {
    setTheme('default')
} else {
    setTheme(theme)
}

for (let i = 0; i < themeDot.length; i++) {
    themeDot[i].addEventListener('click', () => {
        let mode = themeDot[i].dataset.mode 
        setTheme(mode)
    })
}
