 let display = document.getElementById('display');

 let butttons = Array.from(document.getElementsByClassName('button'));

 butttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'c':
                display.innerText = '';
                break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                    display.innerText += e.target.innerText;
        }
    });
 });
 