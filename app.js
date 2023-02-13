//set initial value
let count = 0;

//select value and buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        if(count>0){
            value.style.color = "blue";
        }
        if(count<0){
            value.style.color = "blue";
        }
        if(count == 00){
            value.style.color = "blue"
        }
        value.textContent = count;
    });

});
