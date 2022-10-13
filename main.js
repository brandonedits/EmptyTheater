// prevent paste
numberOfTheaters.addEventListener('paste', (e) => {
    e.preventDefault()
});

// prevent -+.e -- only numbers allowed
numberOfTheaters.addEventListener('keypress', function (e) {
    if (e.which != 13 && e.which != 8 && e.which != 0 && e.which < 48 || e.which > 57){
        e.preventDefault();
    }

    if(e.which == 13){
        numberOfTheaters.blur();
    }
});

// populate theater btns
const GetTheatersBtn = document.getElementById('getTheaters');
GetTheatersBtn.addEventListener('submit', (e) => {
    
    e.preventDefault();
    const numberOfTheaters = document.getElementById('numberOfTheaters');
    const data = document.getElementById('data');
    const theaters = document.getElementById('theaters');

    // validate input
    let err = [];
    if(numberOfTheaters.value.trim() === ''){
        err.push('app don\'t work w/o a #');
    }
  
    if(numberOfTheaters.value.trim() != '' && numberOfTheaters.value.trim() == 0){
        err.push('need a different number');
    }

    if(err.length > 0){
        numberOfTheaters.value = '';
        numberOfTheaters.classList.add('err');
        numberOfTheaters.placeholder = err;
    } else {
        data.style.display = 'none';
        theaters.style.display = 'flex';

        for(let i = 0; i < numberOfTheaters.value; i++){
            let btn = document.createElement('button');
            btn.classList.add('not-selectable');
            btn.innerHTML = 'Theater ' + [i + 1];
            theaters.appendChild(btn);

            // mobile
            let touchmoved;
            let lastClick = 0;
            btn.addEventListener('touchend', (e) => {
                e.preventDefault();

                if(touchmoved != true){
                    toggleBtn(btn);
                }

                // detect dblTouch
                let date = new Date();
                let time = date.getTime();
                const timeDiff = 200;
                if(time - lastClick < timeDiff){
                    delBtn(btn);
                }
                lastClick = time;
            });
            
            btn.addEventListener('touchmove', (e) => {
                touchmoved = true;
            });

            btn.addEventListener('touchstart', (e) => {
                touchmoved = false;
            });
    
            //change btn color
            btn.addEventListener('click', () => {
                toggleBtn(btn);
            });
    
            // del btn
            btn.addEventListener('dblclick', () => {
                delBtn(btn);
            });    
        }
    
        // create reset btn
        const resetBtn = document.createElement('button');
        resetBtn.innerHTML = 'RESET';
        resetBtn.id = 'reset';
        resetBtn.classList.add('not-selectable');
        theaters.appendChild(resetBtn);
    
        // go to previous screen
        resetBtn.addEventListener('click', () => {
            resetPage();
        });

        function toggleBtn(btn){
            btn.classList.toggle('active');
        }

        function delBtn(btn){
            if(btn.classList.contains('active')){
                btn.remove();
                countBtns();    
            }
        }

        // return to home once clear
        function countBtns(){
            let btns = document.querySelectorAll('#theaters button');
            if(btns.length == 1){
               resetPage();
            }
        }

        function resetPage(){
            theaters.innerHTML = '';
            theaters.style.display = 'none';
            data.style.display = 'block';
            numberOfTheaters.classList.remove('err');
        }
        
    }

});