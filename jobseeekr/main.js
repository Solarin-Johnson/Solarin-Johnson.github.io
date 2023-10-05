
const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo (Congo-Kinshasa)", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia (formerly Macedonia)", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste (East Timor)", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

const select = document.getElementById("country");

countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country;
    option.classList = 'cntry'
    option.text = country;
    select.appendChild(option);
});

select.addEventListener('click', () => {
    if (select.value === '') {
        select.classList = 'field fade'
    } else {
        select.classList = 'field'
    }

})


var mode = document.querySelectorAll('.material-symbols-outlined')[0]
var cancel = document.querySelectorAll('.material-symbols-outlined')[1]
var body = document.body
var sub = document.getElementById('sub')
var info = document.getElementById('info')
var form = document.querySelectorAll('.form')
var real_form = document.querySelectorAll('form')[0]
var cntry = document.querySelectorAll('.cntry')

if (sessionStorage.getItem('mode') === '1') {
    sessionStorage.setItem('mode', 0)
    modechange()
} else if (sessionStorage.getItem('mode') === '0') {
    sessionStorage.setItem('mode', 1)
    modechange()
}
// color = sessionStorage.getItem('mode')
mode.addEventListener('click', () => {
    modechange()
})

if (!sessionStorage.getItem('mode')) {
    sessionStorage.setItem('mode', 0)
    modechange()
}

function modechange() {
    if (sessionStorage.getItem('mode') === '1') {
        mode.innerText = 'dark_mode'
        mode.classList = 'material-symbols-outlined dark'
        // cancel.classList = 'dark'
        body.classList = 'dark'
        form[0].classList = 'form dark'
        real_form.classList = 'blur-dark'
        sub.classList = 'fade'
        info.classList = 'fade'
        sessionStorage.setItem('mode', 0)
        for (i = 0; i < cntry.length; i++) {
            cntry[i].classList = 'country dark'
        }
    } else {
        mode.innerHTML = 'light_mode'
        mode.classList = 'material-symbols-outlined light'
        // cancel.classList = 'light'
        body.classList = 'light'
        form[0].classList = 'form light'
        real_form.classList = ''
        info.classList = ''
        sub.classList = ''
        sessionStorage.setItem('mode', 1)
        for (i = 0; i < cntry.length; i++) {
            cntry[i].classList = 'country light'
        }
    }
}


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var div = document.querySelectorAll('div');
    for (var i = 0; i < div.length; i++) {
        div[i].style.cursor = 'none';
    }
}


var apply = document.querySelectorAll('.apply')
var index = document.querySelectorAll('#index')

for (var i = 0; i < apply.length; i++) {
    apply[i].addEventListener('click', () => {
        setTimeout(() => {
            index[0].style.display = 'none'
        }, 500);
        form[0].id = 'sliden'
        // form[0].style.transform = 'translateX(0)'
    })
}

cancel.addEventListener('click', () => {
    index[0].style.display = 'grid'
    form[0].id = ''
})


// const validateAddress = (address) => {
//     const addressRegex = /^[0-9A-Za-z\s\.,#-]+$/;
//     return addressRegex.test(address);
// };

// const validateZip = (zip) => {
//     const zipRegex = /^[A-Za-z0-9\s-]*$/;
//     return zipRegex.test(zip);
// };


// function validateSSN(ssn) {
//     const ssnPattern = /^(?!000|666|9\d\d)\d{3}-(?!00)\d{2}-(?!0000)\d{4}$/;
//     return ssnPattern.test(ssn);
// }

function truncateString(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    } else {
        return str.slice(0, maxLength) + ' ...';
    }
}


file = document.getElementById('id')
_label = document.querySelectorAll('.file')[0]
file.addEventListener("change", function () {
    upload = document.getElementById('upload')
    const fileName = this.value.split("\\").pop();
    _label.innerText = truncateString(fileName, 20) || "No file selected";
});

setTimeout(() => {
    apply[0].click()
}, 10000);

select.click()

// submit = document.getElementById('submit')
// submit.addEventListener('click', () => {
//     zip = validateZip(document.getElementById('zip'))
//     ssn = validateSSN(document.getElementById('ssn'))
//     address = validateAddress(document.getElementById('address'))
//     country = document.getElementById('country')
//     // if (!form.checkValidity()) {
//     if (!zip) {
//         document.getElementById('zip').focus()
//         document.getElementById('zip_err').innerText = 'Invalid Zip Code'
//     }
//     // }
//     // real_form.submit()
// })