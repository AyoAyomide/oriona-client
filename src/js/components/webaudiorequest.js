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
          const audioBlob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
          chunks = [];
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
    let formData = new FormData();
    formData.append('audio', audioBlob);

    return axios.post(import.meta.env.VITE_REQUEST_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

  }
});

