window.addEventListener('load', initScene = () =>{
    let orbits = document.querySelectorAll('.Orbita');

            orbits.forEach((orbit, index) => {
                meteors.forEach(pos => {
                    const meteor = document.createElement("a-entity");
                    meteor.setAttribute('geometry', { primitive: "sphere", radius: Math.random() * 1.5 + 0.5 });
                    meteor.setAttribute("material", { shader: "flat", src: "#Objetivo" });
                    meteor.setAttribute("class", "meteor");
                    meteor.object3D.position.set(pos.x, pos.y, pos.z);
                    meteor.setAttribute("shootable", '');
                    orbit.appendChild(meteor);
                })
            });
        }

);
        AFRAME.registerComponent("shootable", {
            init: function () {
                this.el.addEventListener("click", () => {
                    this.el.parentNode.removeChild(this.el);
                    puntuacion++;
                    document.querySelector("a-text").setAttribute("value", `${puntuacion} Lunas Golpeadas`);
                });
            }
        });
 
const meteors = [
            { x: 0, y: 0, z: -30 },
            { x: 0, y: 0, z: 30 },
            { x: 30, y: 0, z: 0 },
            { x: -30, y: 0, z: 0 },
            { x: 20, y: 0, z: 20 },
            { x: 20, y: 0, z: -20 },
            { x: -20, y: 0, z: -20 },
            { x: -20, y: 0, z: 20 }
 ];

let puntuacion = 0;