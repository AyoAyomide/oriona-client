import { socket } from "..";
import getUserMedia from 'get-user-media-promise';
import axios from 'axios';

AFRAME.registerComponent('webaudiorequest', {
  init: function () {
    let chunks = [];
    this.el.sceneEl.addEventListener('enter-vr', (events) => {
      getUserMedia({ audio: true }).then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = (rawRecord) => { chunks.push(rawRecord.data); };
        mediaRecorder.onstop = () => {
          console.log(chunks);
          const audioBlob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
          chunks = [];
          console.log(audioBlob);
          // send audioBlob to server
          this.uploadAudio(audioBlob);
        };
        // Start recording when the button is pressed.
        this.el.addEventListener('abuttondown', function (evt) {
          mediaRecorder.start();
        });
        // Stop recording when the button is released.
        this.el.addEventListener('abuttonup', function (evt) {
          mediaRecorder.stop();
        });
      }).catch(err => { throw new Error('unable to get audio data') });
    });
  },
  uploadAudio(audioBlob) {
    console.log('send audio')
    let formData = new FormData();
    formData.append('audio', audioBlob);
    return axios.post('http://localhost:3000/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).catch(error => {
      console.log(error);
    })
  }
});

