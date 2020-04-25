let divSelectRoom = document.getElementById('selectRoom')
let divConsultingRoom = document.getElementById('consultingRoom')
let inputRoomNumber = document.getElementById('roomNumber')
let btnGoRoom = document.getElementById('goRoom')
let localVideo = document.getElementById('localVideo')
let remoteVideo = document.getElementById('remoteVideo')

let roomNumber, localStream, remoteStream, rtcPeerConnection, isCaller

const iceServers = {
    "iceServer": [
        { "url": "stun:stun.services.mozilla.com" },
        { "url": "stun:stun.l.google.com:19302" }
    ]
}

const streamConstraints = {
    "audio": true,
    "video": true
}

btnGoRoom.onclick = async () => {
    console.log("onclick")
    if (inputRoomNumber.value === '') {
        alert('Please type a room name')
    } else {
        try {
            let stream = await navigator.mediaDevices.getUserMedia(streamConstraints)
            localStream = stream
            localVideo.srcObject = stream
        } catch (err) {
            console.error("error ocurred ", err)
        }

        divSelectRoom.style = 'display: none'
        divConsultingRoom.style = 'display: block'
    }
}
