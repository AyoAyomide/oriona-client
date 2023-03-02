import { gui } from "..";

AFRAME.registerComponent('animation-camera', {
    schema: {

    },

    init: function () {
        let { components } = this.el;
        this.rotation = components.rotation.data;
        this.position = components.position.data;
        gui.add(this.rotation, 'x').min(-360).max(0).step(-0.001);
        gui.add(this.rotation, 'y').min(-360).max(0).step(-0.001);
        gui.add(this.rotation, 'z').min(-360).max(0).step(-0.001);

        gui.add(this.position, 'x').min(0).max(100).step(0.001);
        gui.add(this.position, 'y').min(0).max(100).step(0.001);
        gui.add(this.position, 'z').min(-5).max(0).step(-0.001);


        // this.el.setAttribute('position', pos);
        // this.el.setAttribute('rotation', pos);
        console.log(components.position.data, components.rotation.data);
    },

    update: function () {
        // Do something when component's data is updated.
    },

    remove: function () {
        // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
        // this.el.setAttribute('rotation', this.rotation);
        // this.el.setAttribute('position', this.position);
        // Do something on every scene tick or frame.
    }
});
