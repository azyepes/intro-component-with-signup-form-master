let $ = (id) => document.querySelector(id)

let fields = {
    0: 'First Name',
    1: 'Last Name',
    2: 'Email Address',
    3: 'Password'
}

let button = $('#button')

button.addEventListener('click', () => {

    let firstName = $('#f-name')
    let lastName = $('#l-name')
    let email = $('#email')
    let password = $('#password')

    let arrayInputs = [firstName, lastName, email, password]

    let labelFirstName = $('#label-f-name')
    let labelLastName = $('#label-l-name')
    let labelEmail = $('#label-email')
    let labelPassword = $('#label-password')

    let arrayLabels = [labelFirstName, labelLastName, labelEmail, labelPassword]

    validateFields(arrayInputs, arrayLabels)
    
})

function validateFields(inputs, labels) {
    
    for (let i = 0; i < inputs.length; i++) {

        let myLabelArray = Array.from(labels[i].childNodes)

        if (myLabelArray.length > 3) {

            for (let j = 3; j < myLabelArray.length; j++) {

                labels[i].removeChild(myLabelArray[j])
                
            }
            
        }


        if (inputs[i].value ==='') {

            let img = document.createElement('img')
            img.src = './images/icon-error.svg'
            img.className = 'icon'

            let p = document.createElement('p')
            p.className = 'error-msg'
            p.textContent = `${fields[i]} cannot be empty`

            labels[i].append(img, p)
            inputs[i].setAttribute("style", "border: solid 0.2rem hsl(0, 100%, 74%);")
            inputs[i].removeAttribute("placeholder")

        } else {

            if (i === 2) {
                
                validateEmail(inputs[i], labels[i])
            } else {

                console.log(inputs[i].value, i);
                let img = document.createElement('img')
                img.src = './images/check.png'
                img.className = 'icon'

                labels[i].append(img)
                inputs[i].setAttribute("style", "")
            }

            
        }
    }
}

function validateEmail(value, array) {
    let regExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (regExp.test(value.value)) {

        let img = document.createElement('img')
        img.src = './images/check.png'
        img.className = 'icon'

        array.append(img)
        value.setAttribute("style", "")
    }

    else {

        let img = document.createElement('img')
        img.src = './images/icon-error.svg'
        img.className = 'icon'

        let p = document.createElement('p')
        p.className = 'error-msg'
        p.textContent = `Looks like this is not an email`

        array.append(img, p)
        value.setAttribute("style", "border: solid 0.2rem hsl(0, 100%, 74%); color: hsl(0, 100%, 74%)")
        value.setAttribute("placeholder", `${value.value}`)
    }
}