const socket = io()

const messageForm = document.getElementById('message-from')
const messageInput = messageForm.querySelector('input')
const messageButton = messageForm.querySelector('button')
const locationButton = document.getElementById('send-location')
const $messages = document.getElementById('messages')

const messageTemplate = document.getElementById('message-template').innerHTML
const locationTemplate = document.getElementById('location-template').innerHTML
const sidebarTemplate = document.getElementById('sidebar-template').innerHTML

const { username, room } = Qs.parse(location.search, { ignoreQueryPrefix : true })

const autoScroll = () => {
    // new messsage element
    const $newMessage = $messages.lastElementChild

    // height of new message
    const newMessageStyle = getComputedStyle($newMessage)
    const newMessageMargin = parseInt(newMessageStyle.marginBottom)
    const newMessageHeight = $newMessage.offsetHeight + newMessageMargin

    // visible height
    const visibleHeight = $messages.offsetHeight

    // height os messages container
    const containerHeight = $messages.scrollHeight

    // how far have user scroll
    const scrollOffset = $messages.scrollTop + visibleHeight

    if(containerHeight - newMessageHeight <= scrollOffset){
        $messages.scrollTop = $messages.scrollHeight
    }
}

socket.on('message', (msg) => {
    console.log(msg.text)
    const html = Mustache.render(messageTemplate, {
        username: msg.username,
        message: msg.text,
        createdAt: moment(msg.createdAt).format('hh:mm a')
    })
    $messages.insertAdjacentHTML('beforeend', html)
    autoScroll()
})

socket.on('locationMessage', (msg) => {
    const html = Mustache.render(locationTemplate, {
        username: msg.username,
        url: msg.url,
        createdAt: moment(msg.createdAt).format('hh:mm a')
    })
    $messages.insertAdjacentHTML('beforeend', html)
})

socket.on('roomData', ({ room , users }) => {
    const html = Mustache.render(sidebarTemplate, {
        room,
        users,
    })
    document.getElementById('sidebar').innerHTML = html
})

messageForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageButton.setAttribute('disabled', 'disabled')

    const message = messageInput.value

    socket.emit('sendMessage', message, (error) => {
        messageButton.removeAttribute('disabled')
        messageInput.value = ''
        messageInput.focus()

        if(error){
            return console.log(error)
        }
        console.log("The message was delivered!")
    })
})

locationButton.addEventListener('click', () => {
    if(!navigator.geolocation){
        return alert("Your browser dose not support geolocation")
    }
    
    locationButton.setAttribute('disabled', 'disabled')

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, () => {
            locationButton.removeAttribute('disabled')
            console.log('location shared')
        })
    })
})

socket.emit('join', { username, room }, (error) => {
    if(error){
        alert(error)
        location.href = '/'
    }
})
