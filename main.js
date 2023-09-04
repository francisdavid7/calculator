const btns = document.querySelectorAll('.buttons div button');
let display = document.getElementById('display');

btns.forEach(btn => btn.addEventListener('click', (e) => {
   e.preventDefault();
   switch(e.target.innerText) {
      case 'C':
         display.value = ''
         display.classList.remove('error')
         break;
      case '←':
         if (display.value){
            display.value = display.value.slice(0, -1)
            display.classList.remove('error')
         }
         break;
      case '=':
         try {
            display.value = eval(display.value)
            display.classList.remove('error')
         } catch {
            display.value = 'SyntaxError'
            display.classList.add('error')
         }
         break;
      default:
         display.value += e.target.innerText
         display.classList.remove('error')
   };
}));