let forms = document.querySelector('.form')
forms.addEventListener('submit', loader)

function loader(e) {
    e.preventDefault()
    window.location.assign('http://127.0.0.1:5500/intro-component-with-signup-form-master/Thanks.html')
}