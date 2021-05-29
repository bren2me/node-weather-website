const weatherForm = document.querySelector('form')
const searchTerm = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    const location = searchTerm.value

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = 'Loaded!'
                messageTwo.textContent = data.forecast + ' in ' + data.location + ' and ' + data.temperature + ' degrees. '  
                messageTwo.textContent += 'The humidity is ' + data.humidity + '% with ' + data.cloudCover + '% cloud cover.'
            }
        })
    })
})