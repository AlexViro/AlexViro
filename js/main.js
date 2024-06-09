"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
       e.preventDefault();

       let error = formValidate(form);

       if (error === 0) {
         form.classList.add('_sending');
         let response = await fetch('sendmail.php', {
            method: 'POST'
       });
       if (response.ok) {
          let result = await response.json();
          alert(result.message);
          form.reset();
          form.classList.remove('_sending');
       } else {
          alert("Ошибка")
          form.classList.remove('_sending');
       }
    } else {
       alert('Заполните обязательные поля');
     }
  
    }


    function formValidate(form) {
      let error = 0;
      let formReq = document.querySelectorAll('._req');

      for (let index = 0; index < formReq.length; index++) {
          const input = formReq[index];
          formRemoveError(input)

          if (input.classList.contains('_email')) {
             if (emailTest(input)) {
                formAddError(input);
                error++;
              }
          } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
              formAddError(input);
              error++;
          } else {
              if (input.value === '') {
                  formAddError(input);
                  error++;
              }
          }   
      }
      return error;
  }
  function formAddError(input) {
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
  }
  function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
  }
  //Функция текста email
  function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
  });       

const catItem = document.querySelectorAll(".catalog__block");
const catContent = document.querySelectorAll('.catalog-cards__item');


catItem.forEach(function(element) {
 element.addEventListener('click', open)
})

function open(evt) {
  const catTarget = evt.currentTarget;
  const button = catTarget.dataset.button;

  catItem.forEach(function(item){
    item.classList.remove("catalog__block-active");
  });
  
  
  catTarget.classList.add("catalog__block-active");

  catContent.forEach(function(item){
    item.classList.remove("catalog-cards__item-active");
  });

  document.querySelector(`#${button}`).classList.add('catalog-cards__item-active');
}

const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});