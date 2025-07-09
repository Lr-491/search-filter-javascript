
document.querySelector('#search-input').addEventListener('input', function () {
    let filter = this.value.toUpperCase();
    let names = document.querySelector('.liste').getElementsByTagName("li");

    for( let i = 0; i < names.length; i++) {
        let name = names[i].textContent || names[i].innerHTML;

        if (name.toUpperCase().indexOf(filter) > -1) {
            names[i].style.display = ""
        } else {
            names[i].style.display= "none"
        }
    }
})