// ############## Dom Variables ################
var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/
var form = document.querySelector('form')
var email = document.getElementById('field_email')
var firstName = document.getElementById('field_firstname')

var lastName = document.getElementById('field_lastname')
var organisation = document.getElementById('field_organisation')

var pres_title = document.getElementById('field_pres_title')
var message = document.getElementById('field_message')

// ################ Functions ################

// ########## en lista för att spara validerade input-field i den ########################
let validList = []

// ################# Visa error och ändra färg och text på input-field label ###################
function visaError (inputNamn) {
  let str = inputNamn.labels[0]
  // ############# om en lyckas att ändra en valid input field till fel  ##################  
  if (str.innerText.includes('Valid')) {
    str.innerText = str.innerText.slice(6, str.innerText.length)
    // ############### så den raderas från listan ##################
    validList.splice(validList.indexOf(str.innerText), 1)

    str.innerText = `Vänligen fill i ${inputNamn.labels[0].innerText}`
  }
  else if (!str.innerText.includes('Vänligen')) {
    str.innerText = `Vänligen fill i ${inputNamn.labels[0].innerText}`
  }

  inputNamn.labels[0].setAttribute('class', 'form-err')
}

// ############### validera om input-field value är korrekt och ändra input label till valid ####################
function validera (inputNamn) {
  let str = inputNamn.labels[0]
  // ############ om en input field är fel och ändras efter varning ####################
  if (str.innerText.includes('Vänligen')) {
    str.innerText = str.innerText.slice(16, str.innerText.length)
    // ################## lägg den valid input i listan #########################
    validList.push(str.innerText)

    str.innerText = `Valid ${str.innerText}`
  }

  else if (!str.innerText.includes('Valid')) {
    // ################## lägg den valid input i listan #########################
    validList.push(str.innerText)

    str.innerText = `Valid ${str.innerText}`
  }

  inputNamn.labels[0].classList.remove('form-err')
}

// ################ Event Listeners ###################

// ################ Til Diskussion behövs inga titel så den borde bli hidden ####################
document.getElementById('pres_type_3').addEventListener('click', function () {
  pres_title.labels[0].classList.remove('form-err')
  pres_title.labels[0].innerText = ''
  pres_title.setAttribute('class', 'discuss')
})

// #################### All eventlisteners ########################
form.addEventListener('submit', function (e) {
  e.preventDefault()
  var pres_type = document.querySelector('input[type="radio"]:checked').value

  if (email.value === '' || !pattern.test(email.value)) {
    visaError(email)
  }else {
    validera(email)
  }

  if (firstName.value === '' || firstName.value < 2) {
    visaError(firstName)
  }else {
    validera(firstName)
  }

  if (lastName.value === '' || lastName.value < 2 || lastName.value > 22) {
    visaError(lastName)
  }else {
    validera(lastName)
  }

  if (organisation.value === '' || organisation.value < 4) {
    visaError(organisation)
  }else {
    validera(organisation)
  }

  if (pres_title.value === '' && pres_type !== 'discussion') {
    visaError(pres_title)
  }else {
    validera(pres_title)
  }

  // ################# räkna hur många character har en skrivit i message ###################
  if (message.value.length > 200) {
    let extra_length = message.value.length - 200
    message.labels[0].innerText = `Meddelande kan vara max 200. Du har skrivit ${extra_length} character för mycket!`
    message.labels[0].setAttribute('class', 'form-err')
  }else {
    message.labels[0].classList.remove('form-err')
    message.labels[0].innerText = 'Meddelande till arrangör'
  }

  // ################## final kontrol och skicka till server ####################
  // kontroll för att se hur många input-field är validerade 
  let unique = [...new Set(validList)]
  console.log(unique)
  if (pres_type !== 'discussion' && unique.length >= 5) {
    form.submit()
    form.reset()
  }
  // ################## kontroll om en skrivit i titel och sen klickat på diskussion radio button ################
  else if (pres_type === 'discussion' && unique.includes('Discussion')) {
    if (unique.splice(unique.indexOf('Discussion'), 1).length >= 4) {
      form.submit()
      form.reset()
    }
  }else if (pres_type === 'discussion' && unique.length >= 4) {
    form.submit()
    form.reset()
  }
})
