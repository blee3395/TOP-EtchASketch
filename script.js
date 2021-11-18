//Create 16 x 16 grid of divs
const size = 16;
const grid = document.createElement('div');
grid.className = 'grid';
for (let i = 0; i < size; i++)
{
    let row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < size; j++)
    {
        let square = document.createElement('div');
        square.className = 'square';
        square.addEventListener('mouseover', hover);
        row.appendChild(square);
    }
    grid.appendChild(row);
}
document.body.appendChild(grid);


//Hover over and change color of div
function hover(e) {
    e.target.style.backgroundColor = 'rgba(255, 0, 0, 1)';
    
}