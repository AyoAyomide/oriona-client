import { gui } from "..";

AFRAME.registerComponent('animation-camera', {
    init: function () {
    },

    update: function () {
        this.el.object3D.rotation.y = this.rotation.y;
        // Do something when component's data is updated.
    },

    remove: function () {
        // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
    
    }
});
