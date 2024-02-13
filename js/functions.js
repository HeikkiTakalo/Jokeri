const button = document.querySelector('button')
const table = document.querySelector('table')
const paragraph = document.querySelector('p')
let rowCount = 0

function generateRandomNumber() {
    return Math.floor(Math.random() * 10)
}

function addNewRow() {
    rowCount++
    paragraph.textContent = `Arvottuja rivejä: ${rowCount}`
    const newRow = document.createElement('tr')
    for (let i = 0; i < 7; i++) {
        const cell = document.createElement('td')
        cell.textContent = generateRandomNumber()
        newRow.appendChild(cell)
    }
    table.appendChild(newRow)
}

button.addEventListener('click', addNewRow)