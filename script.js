const grid = document.querySelector('.grid');
const container = document.querySelector('.container');


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
    document.querySelector('#sizeLbl').textContent = "Size: "+ size + 'x' + size;

    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(' + size + ', 1fr)';

    for (let i = 0; i < (Math.pow(size,2)); i++)
    {
        let square = document.createElement('div');
        square.className = 'square';
        square.addEventListener('mouseover', hover);
        grid.appendChild(square);
    }

    document.container.appendChild(grid);
}

//Hover over and change color of div
function hover(e) {
    //Rainbow tone
    e.target.style.backgroundColor = 'rgba(' + Math.random()*255+1 +', ' + Math.random()*255+1 + ', '+Math.random()*255+1 +')';
    
    //Tones of red
    // e.target.style.backgroundColor = 'rgba(' + Math.random()*255+1 +', 0 , 0)';
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