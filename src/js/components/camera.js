// Rotate camera
// AFRAME.registerComponent('camera-rotate', {
//     init: function () {
//         let camera = document.querySelector('#camera');
//         this.el.addEventListener('enter-vr', (events) => {
//             setTimeout(() => {
//                 camera.setAttribute('rotation', '0 90 0');
//             }, 2000);
//         });
//     }
// });

navigator.mediaDevices.getUserMedia({ audio: true })
  .then(function (stream) {
    var audioContext = new AudioContext();
    var source = audioContext.createMediaStreamSource(stream);
    // Use the audio source in your Three.js code
  });

