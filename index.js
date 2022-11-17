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

    console.log(firstName, lastName, email, password, arrayInputs);

    validateFields(arrayInputs, arrayLabels)
    
})

function validateFields(inputs, labels) {
    
    for (let i = 0; i < inputs.length; i++) {

        // console.log(labels[0].childNodes);
        if (labels[i].childNodes.length >= 5) {
            
            for (let j = 3; j < labels[i].childNodes.length; j++) {
                console.log(j);
                console.log(labels[i].childNodes[j], j);
                labels[i].removeChild(labels[i].childNodes[j])
                
            }
            
            // labels[i].removeChild(labels[i].childNodes[3])
        }


        if (inputs[i] ==='') {
            
            let img = document.createElement('img')
            img.src = './images/icon-error.svg'
            img.className = 'icon'

            let p = document.createElement('p')
            p.className = 'error-msg'
            p.textContent = `${fields[i]} cannot be empty`

            labels[i].append(img, p)
            // console.log(labels[0].childNodes.length);
        } else {

            if (i === 2) {
                validateEmail(inputs[i], labels[i])
            } else {
                let img = document.createElement('img')
                img.src = './images/check.png'
                img.className = 'icon'

                labels[i].append(img)
            }

            
        }
    }
}

function validateEmail(value, array) {
    let regExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (regExp.test(value)) {
        console.log('VALID');
        let img = document.createElement('img')
        img.src = './images/check.png'
        img.className = 'icon'

        array.append(img)

    }

    else {
        console.log('INVALID');
        let img = document.createElement('img')
        img.src = './images/icon-error.svg'
        img.className = 'icon'

        let p = document.createElement('p')
        p.className = 'error-msg'
        p.textContent = `Looks like this is not an email`

        array.append(img, p)
    }
}