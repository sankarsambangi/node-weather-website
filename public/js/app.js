const form = document.querySelector('form')
const address = document.querySelector('input')
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')

msg1.textContent = 'From Javascript'

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(address.value)
    msg1.textContent = 'Loading...'
    msg2.textContent = ''
    fetch('http://localhost:3000/weather?address='+address.value).then((res) =>{
        res.json().then((data) => {
            if (data.error) {
                msg1.textContent = data.error
                return
            }

            msg1.textContent = data.location
            msg2.textContent = data.forecast
        })
    })
})