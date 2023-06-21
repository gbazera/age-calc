const text = document.querySelector('p');
const date_input = document.querySelector('input');
const submit_btn = document.querySelector('button');

let i = 0;

submit_btn.addEventListener('click', ()=>{
    if(i == 0){
        i++;

        var cur_date = new Date();
        var birthday = new Date(date_input.value);
        var diff = cur_date.getTime() - birthday.getTime();

        var age = Math.floor(diff / 31536000000);

        date_input.remove();

        if(age < 0 || age >= 100 || isNaN(diff)){
            text.classList.add('big');
            text.innerHTML = '<span>incorrect date.</span>';

            submit_btn.innerText = 'try again';
        }else{
            text.classList.add('big');
            text.innerHTML = 'your are <span>' + age + '</span> years old.';

            submit_btn.innerText = 'try again';
        }

    }else{
        location.reload();
    }
});