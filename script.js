const app = document.getElementById('app');
const colors = ['red', 'yellow', 'green', 'blue', 'black'];
let picker = '';
const canvasSize = 11;

for (let i = 0; i < colors.length; i++) {
    const div = document.createElement('div');
    div.classList.add("palette-item", colors[i]);
    app.append(div);

    div.addEventListener("click", () => {
        picker = colors[i];

    })
}


const table = document.createElement('table');
app.append(table);

for (let i = 0; i < canvasSize; i++) {
    const row = document.createElement('tr');
    table.append(row);
    for (let j = 0; j < canvasSize; j++) {
        const cell = document.createElement('td');
        row.append(cell);
        cell.addEventListener("click", () => {
            cell.classList.add(picker);
        })
    }
}





