$(document).ready(function () {
    $(".profil-img").click(function () {
        $(".profil-silde-menu").toggle()
    })
    $(".room-grid-component").click(function () {
        $(".profil-silde-menu").hide()
    })
})

$(document).ready(() => {
    $(".active-class").click(() => {
        $(".specil-menu").toggle()
    })
    $(".room-grid-component").click(() => {
        $(".specil-menu").hide()
    })
})

/*
 <div class="error error_user">
           <div>
             <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64"><circle cx="32" cy="32" r="28" fill="none" stroke="#010101" stroke-miterlimit="10" stroke-width="4"/><line x1="32" x2="32" y1="18" y2="38" fill="none" stroke="#010101" stroke-miterlimit="10" stroke-width="4"/><line x1="32" x2="32" y1="42" y2="46" fill="none" stroke="#010101" stroke-miterlimit="10" stroke-width="4"/></svg>
             <span>Password or name error, try again :(</span>
           </div>
             <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="translate(1 1)"><circle cx="10" cy="10" r="10"/><path d="M13 7l-6 6M7 7l6 6"/></g></svg></div>
            </div>
*/

// window.addEventListener('load', function (e) {
//     const form = document.querySelector(".sign-box form")
//     const inpForm = document.querySelectorAll(".sign-box form input")
//     const signContainer = document.querySelector(".container-signin")

//     console.log(form, inpForm, signContainer);


//     form.addEventListener('submit', function (e) {

//         export function newElement() {
//             for (var i = 0; i <= inpForm.length - 1; i++) {
//                 if (inpForm[i].value == '') {
//                     // inpForm[i].classList.add('error')
//                     signContainer.innerHTML = `
//                 <div class="error error_user">
//                  <div>
//                   <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64"><circle cx="32" cy="32" r="28" fill="none" stroke="#010101" stroke-miterlimit="10" stroke-width="4"/><line x1="32" x2="32" y1="18" y2="38" fill="none" stroke="#010101" stroke-miterlimit="10" stroke-width="4"/><line x1="32" x2="32" y1="42" y2="46" fill="none" stroke="#010101" stroke-miterlimit="10" stroke-width="4"/></svg>
//                   <span>Password or name error, try again :(</span>
//                 </div>
//                 <div>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="translate(1 1)"><circle cx="10" cy="10" r="10"/><path d="M13 7l-6 6M7 7l6 6"/></g></svg></div>
//                 </div>
//                 `
//                     e.preventDefault()
//                 } else {
//                     // inpForm[i].classList.remove('error')
//                     signContainer.innerHTML = ``
//                 }
//             }
//         }
//         newElement()
//     })
// });