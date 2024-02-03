const display = document.getElementById('display')
const result = document.getElementById('result')


const buttons = document.getElementsByClassName('btn')
for (const btn of buttons) {
    btn.addEventListener("click", function () {
        console.log(btn.innerText)


        if (btn.innerText == 'C') {
            display.innerText = ''
        }
        else if (btn.innerText == '←') {
            display.innerText = display.innerText.slice(0, -1)
        }
        else if (btn.innerText == '=') {
            result.innerText = eval(display.innerText)
        }
        else if (btn.innerText == '%') {
            result.innerText = display.innerText / 100
        }
        else {
            display.innerText += btn.innerText
        }
    }
    )
}
