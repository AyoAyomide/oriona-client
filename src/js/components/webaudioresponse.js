AFRAME.registerComponent('webaudioresponse', {
    init: function () {
        this.el.sceneEl.addEventListener('enter-vr', (events) => {
            const socket = io(import.meta.env.VITE_SOCKET_URL);

            socket.on("connect", () => {
                console.log(socket.id);
            });

            socket.on("disconnect", () => {
                console.log(socket.id);
            });

            socket.on("audio", (msg) => {
                const audio = new Audio(`${import.meta.env.VITE_RESPONSE_URL}/_${msg}`);
                this.el.setAttribute('sound', 'src', audio.src);
                this.el.components.sound.playSound();
            });
        });

    }
});
