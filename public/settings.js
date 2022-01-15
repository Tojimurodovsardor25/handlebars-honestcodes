let setContent = document.querySelectorAll('.content-settings')
let setMenuContent = document.querySelectorAll('.list-settings-menu')
console.log(setContent, setMenuContent);


setMenuContent.forEach(element => {
    let content_Id = element.getAttribute('set-number')

    console.log(content_Id);
    if (number_Id = content_Id) {
        console.log('ishladi');
    } else {
        console.log('barbot boldi');
    }

})

setContent.forEach(element => {
    console.log(element);
    let number_Id = element.getAttribute('set-number-id')

    console.log(number_Id);

    element.addEventListener('click', function () {

    })

});