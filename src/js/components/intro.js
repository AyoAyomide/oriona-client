AFRAME.registerComponent('intro-audio', {
    init: function () {
      let Orion = document.querySelector('#orion');
      this.el.addEventListener('enter-vr', (events) => {
        setTimeout(() => {
        Orion.components.sound.playSound();
        }, 2000);
        console.log('enter-vr');
       });
    }
});
