const inputText = document.querySelector('#txt');
const mybutton = document.querySelector('.btn-list');
const list = document.querySelector('.container ul');

mybutton.addEventListener('click', (e) =>{
    if(inputText.value != ""){
        e.preventDefault();

        //create li
        const myLi = document.createElement('li'); //Criando uma lista
        myLi.innerHTML = inputText.value // criando a lista com o elemente escrito no inputText
        list.appendChild(myLi); // colocando a lista no ul
        
        //create span
        const mySpan = document.createElement('span');
        mySpan.innerHTML = 'x'
        myLi.appendChild(mySpan);
    }
    const close = document.querySelectorAll('span');
    for(let i=0; i < close.length; i++){
        close[i].addEventListener('click', () =>{
            close[i].parentElement.style.opacity = 0;
            
            setTimeout(() =>{
                close[i].parentElement.style.display = 'none';
                close[i].parentElement.remove();

            }, 500);
        });
    }
    inputText.value ="";
});