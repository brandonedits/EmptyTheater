
// populate theater btns
const GetTheatersBtn = document.getElementById('getTheaters');
GetTheatersBtn.addEventListener('submit', (e) => {
    e.preventDefault();

    const numberOfTheaters = document.getElementById('numberOfTheaters').value;
    const input = document.getElementById('input');
    const theaters = document.getElementById('theaters');

    input.style.display = 'none';
    theaters.style.display = 'flex';

    for(let i = 0; i < numberOfTheaters; i++){
        let btn = document.createElement('button');
        btn.innerHTML = 'Theater ' + [i + 1];
        theaters.appendChild(btn);

        //change btn color
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
        });

        // del btn
        btn.addEventListener('dblclick', () => {
            if(btn.classList.contains('active')){
                btn.remove();
            }
        });
    }

    // create reset btn
    const resetBtn = document.createElement('button');
    resetBtn.innerHTML = 'RESET';
    resetBtn.id = 'reset';
    theaters.appendChild(resetBtn);

    // go to previous screen
    resetBtn.addEventListener('click', () => {
        theaters.innerHTML = '';
        theaters.style.display = 'none';
        input.style.display = 'block';

    });

});