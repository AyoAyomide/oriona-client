import { socket } from "..";
import axios from "axios";

function fetchAudio(element) {
    axios.get("http://localhost:3000/mp3", { responseType: 'arraybuffer' }).then((res) => {
        let audio = new Audio();
        audio.src = URL.createObjectURL(new Blob([res.data], { type: 'audio/mp3' }));
        element.setAttribute('sound', 'src', audio.src);
    });
}

AFRAME.registerComponent('webaudioresponse', {
    init: function () {
        let audio = document.querySelector('#intro');
        this.el.sceneEl.addEventListener('enter-vr', (events) => {
            socket.on("audio", async (msg) => {
                // await fetchAudio(this.el);
                this.el.setAttribute('sound', 'src', `http://localhost:3000/mp3/${msg}`);
                console.log(this.el.getAttribute('sound'));
                this.el.components.sound.playSound();
            });
        })
    }
});
