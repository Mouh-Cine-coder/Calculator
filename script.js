let btns = Array.from(document.getElementsByClassName('button'));
let display = document.getElementById('display');

btns.map( btn => {
    btn.addEventListener('click', (e) => {
        console.log(e.target.innerText);
       switch (e.target.innerText) {
            case '←':
                display.innerText = display.innerText.slice(0, -1);
                break;
            case 'clear':
                display.innerText = '';
                break;
            default:
                display.innerText += e.target.innerText;
                
       }
    });
});
