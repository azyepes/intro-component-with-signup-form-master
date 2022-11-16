let $ = (id) => document.querySelector(id)

let fields = {
    0: 'First Name',
    1: 'Last Name',
    2: 'Email Address',
    3: 'Password'
}

let button = $('#button')

button.addEventListener('click', () => {

    let firstName = $('#f-name').value
    let lastName = $('#l-name').value
    let email = $('#email').value
    let password = $('#password').value

    let arrayInputs = [firstName, lastName, email, password]

    let labelFirstName = $('#label-f-name')
    let labelLastName = $('#label-l-name')
    let labelEmail = $('#label-email')
    let labelPassword = $('#label-password')

    let arrayLabels = [labelFirstName, labelLastName, labelEmail, labelPassword]

    console.log(firstName, lastName, email, passwrod, arrayInputs);

    validateFields(arrayInputs, arrayLabels)
    
})

function validateFields(inputs, labels) {
    
    for (let i = 0; i < inputs.length; i++) {
        
        if (inputs[i] ==='') {
            let img = document.createElement('img')
            img.src = './images/icon-error.svg'
            img.className = 'icon-error'

            let p = document.createElement('p')
            p.className = 'error-msg'
            p.textContent `${fields[i]} cannot be empty`

            labels[i].append(img, p)

        } else {

            if (condition) {
                
            } else {
                
            }
            let img = document.createElement('img')
            img.src = './images/check.png'
            img.className = 'icon-error'

            labels[i].append(img)
        }
    }
}

function validateEmail(value) {
    let regExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (regExp.test(value)) {
        console.log('VALID');
        iconValid.classList.remove('hiden')
        error.textContent = `This email is valid.`
        iconError.classList.add('hiden')
        email.classList.remove('invalid')
        submit.classList.remove('invalid-button')

    } else if (value === '') {

        iconError.classList.remove('hiden')
        error.textContent = `Email is required.`
        iconValid.classList.add('hiden')
        email.classList.add('invalid')
        submit.classList.add('invalid-button')

    }
    else {
        console.log('INVALID');
        iconError.classList.remove('hiden')
        error.textContent = `Please provide a valid email.`
        iconValid.classList.add('hiden')
        email.classList.add('invalid')
        submit.classList.add('invalid-button')
    }
}