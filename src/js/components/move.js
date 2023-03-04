AFRAME.registerComponent('move', {
    init: function () {
        this.stickStop = 0;
        this.direction = "UP";
        this.camera = document.querySelector('#rig');
        this.el.addEventListener('thumbstickmoved', (events) => { this.stickStop += 1; this.logThumbstick(events) });
    },
    logThumbstick: function (evt) {
        let { x, y } = evt.detail;
        if (y === 0 && x === 0) { console.log('UNMOVED'); this.stickStop = 1; }
        if (y > 0.95) { console.log("DOWN"); this.direction = "BACKWARD"; }
        if (y < -0.95) { console.log("UP"); this.direction = "FORWARD"; }
        if (x < -0.95) { console.log("LEFT"); this.direction = "LEFT"; }
        if (x > 0.95) { console.log("RIGHT"); this.direction = "RIGHT"; }
    },
    tick: function (deltaTime) {
        let speed = 5;
        let velocity = speed * (deltaTime / 1000000);
        if (this.stickStop > 1) moveObject(this.camera, this.direction, velocity);
        console.log(this.stickStop, this.direction);
        // moveObject(this.camera, 'BACKWARD', velocity);
        // this.logThumbstick('name', this.camera, 0.0001)
        // console.log(1 * (deltaTime / 100000));
        // this.el.addEventListener('thumbstickmoved', (events) => (this.logThumbstick(events, this.camera, velocity)));

    }
});

function moveObject(object, direction, time) {
    let speed = 1,
        calc = {
            BACKWARD: () => { object.object3D.position.z += time; },
            FORWARD: () => { object.object3D.position.z -= time; },
            LEFT: () => { object.object3D.position.x -= time },
            RIGHT: () => { object.object3D.position.x += time },
            UP: () => { object.object3D.position.y += time },
            DOWN: () => { object.object3D.position.y -= time }
        };
    calc[direction]();
}

