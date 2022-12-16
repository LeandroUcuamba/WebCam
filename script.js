var video = document.querySelector('video');

navigator.mediaDevices.getUserMedia({video:true})
.then(stream => {
    video.srcObject = stream;
    video.play();
})
.catch(erro => {
    console.log(erro);
})


document.querySelector('button').addEventListener('click', () => {
    var foto = document.querySelector('canvas');
    foto.height = video.videoHeight;
    foto.width = video.videoWidth;
    var context = foto.getContext('2d');
    context.drawImage(video, 0, 0);
})