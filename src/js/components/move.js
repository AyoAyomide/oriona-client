AFRAME.registerComponent('move', {
    init: function () {
        let camera;
        if (this.el.id == 'right') {
            camera = document.querySelector('#rig');
        } else {
            camera = document.querySelector('a-box');
        }
        this.el.addEventListener('thumbstickmoved', (events) => (this.logThumbstick(events, camera)));
        console.log(camera.object3D);
    },
    logThumbstick: function (evt, object) {
        if (evt.detail.y > 0.95) { console.log("DOWN"); moveObject(object, 'BACKWARD') }
        if (evt.detail.y < -0.95) { console.log("UP"); moveObject(object, 'FORWARD') }
        if (evt.detail.x < -0.95) { console.log("LEFT"); moveObject(object, 'LEFT') }
        if (evt.detail.x > 0.95) { console.log("RIGHT"); moveObject(object, 'RIGHT') }
    }
});

function moveObject(object, direction) {
    let speed = 0.1,
        calc = {
            BACKWARD: () => { object.object3D.position.z += speed; },
            FORWARD: () => { object.object3D.position.z -= speed },
            LEFT: () => { object.object3D.position.x -= speed },
            RIGHT: () => { object.object3D.position.x += speed },
            UP: () => { object.object3D.position.y += speed },
            DOWN: () => { object.object3D.position.y -= speed }
        };
    calc[direction]();
}

