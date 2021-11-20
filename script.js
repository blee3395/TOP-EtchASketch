const grid = document.querySelector('.grid');

//Get grid size
document.querySelector('#sizeSlider').addEventListener('mouseup', resize);

//Create grid of divs
function resize(e) {
    if (grid === null) {
        alert('grid has not been initialized');
    }
    else {
        clear();
    }

    let size = e.target.value;
    document.querySelector('#sizeLbl').textContent = "Size "+ size;

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
    let square = document.querySelector('.square');
    console.log(square.style.width);

    document.body.appendChild(grid);
}

//Hover over and change color of div
function hover(e) {
    e.target.style.backgroundColor = 'rgba(255, 0, 0, 1)';
    
}

//Clear board button
document.querySelector('.clear').addEventListener('click', clear)

//Clear board function
function clear(e) {
    if (grid === null) {
        alert('grid has not been initialized');
    }
    else {
        while (grid.firstChild) {
            grid.removeChild(grid.lastChild);
        }
    }

}