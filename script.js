function helper(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    })
}

function toggleBtn(){
    document.querySelector('.n1').classList.toggle('show');
}