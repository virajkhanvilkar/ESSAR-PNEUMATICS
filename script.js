import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";


/* --------------------------------
   SCENE
-------------------------------- */

const container = document.getElementById("canvas-container");

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x050505);


/* --------------------------------
   CAMERA
-------------------------------- */

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 1.5, 8);


/* --------------------------------
   RENDERER
-------------------------------- */

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});

renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
);

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.shadowMap.enabled = true;

container.appendChild(renderer.domElement);


/* --------------------------------
   LIGHTING
-------------------------------- */

const ambientLight = new THREE.AmbientLight(
    0xffffff,
    1.5
);

scene.add(ambientLight);


const keyLight = new THREE.DirectionalLight(
    0xffffff,
    5
);

keyLight.position.set(5, 8, 5);

keyLight.castShadow = true;

scene.add(keyLight);


const rimLight = new THREE.PointLight(
    0x5577ff,
    15,
    20
);

rimLight.position.set(
    -5,
    3,
    -4
);

scene.add(rimLight);


/* --------------------------------
   INDUSTRIAL MACHINE
-------------------------------- */

const machine = new THREE.Group();

scene.add(machine);


/* Main cylinder */

const cylinderGeometry =
    new THREE.CylinderGeometry(
        1.25,
        1.25,
        3.8,
        64
    );

const metalMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x252525,
        metalness: 0.9,
        roughness: 0.25
    });

const cylinder =
    new THREE.Mesh(
        cylinderGeometry,
        metalMaterial
    );

cylinder.rotation.z = Math.PI / 2;

cylinder.castShadow = true;

machine.add(cylinder);


/* End caps */

const capGeometry =
    new THREE.CylinderGeometry(
        1.35,
        1.35,
        .3,
        64
    );

const capMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x444444,
        metalness: 1,
        roughness: .2
    });


const cap1 =
    new THREE.Mesh(
        capGeometry,
        capMaterial
    );

cap1.rotation.z = Math.PI / 2;

cap1.position.x = -2;

machine.add(cap1);


const cap2 =
    new THREE.Mesh(
        capGeometry,
        capMaterial
    );

cap2.rotation.z = Math.PI / 2;

cap2.position.x = 2;

machine.add(cap2);


/* Center piston */

const pistonGeometry =
    new THREE.CylinderGeometry(
        .45,
        .45,
        4.5,
        32
    );

const pistonMaterial =
    new THREE.MeshStandardMaterial({
        color: 0xbfc3c8,
        metalness: 1,
        roughness: .15
    });

const piston =
    new THREE.Mesh(
        pistonGeometry,
        pistonMaterial
    );

piston.rotation.z = Math.PI / 2;

machine.add(piston);


/* Connecting rod */

const rodGeometry =
    new THREE.BoxGeometry(
        2.2,
        .35,
        .35
    );

const rodMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x666666,
        metalness: .8,
        roughness: .25
    });

const rod =
    new THREE.Mesh(
        rodGeometry,
        rodMaterial
    );

rod.position.y = -1.5;

machine.add(rod);


/* Bolts */

const boltGeometry =
    new THREE.CylinderGeometry(
        .12,
        .12,
        .25,
        16
    );

const boltMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x999999,
        metalness: 1
    });


for (let i = 0; i < 8; i++) {

    const angle =
        (i / 8) * Math.PI * 2;

    const bolt =
        new THREE.Mesh(
            boltGeometry,
            boltMaterial
        );

    bolt.position.set(
        2.16,
        Math.cos(angle) * .9,
        Math.sin(angle) * .9
    );

    bolt.rotation.z =
        Math.PI / 2;

    machine.add(bolt);
}


/* --------------------------------
   FLOATING PARTICLES
-------------------------------- */

const particleGeometry =
    new THREE.BufferGeometry();

const particleCount = 700;

const positions =
    new Float32Array(
        particleCount * 3
    );

for (let i = 0; i < particleCount * 3; i++) {

    positions[i] =
        (Math.random() - .5) * 20;
}

particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
        positions,
        3
    )
);

const particleMaterial =
    new THREE.PointsMaterial({
        color: 0x777777,
        size: .025,
        transparent: true,
        opacity: .5
    });

const particles =
    new THREE.Points(
        particleGeometry,
        particleMaterial
    );

scene.add(particles);


/* --------------------------------
   CONTROLS
-------------------------------- */

const controls =
    new OrbitControls(
        camera,
        renderer.domElement
    );

controls.enableDamping = true;

controls.enableZoom = false;

controls.enablePan = false;

controls.autoRotate = true;

controls.autoRotateSpeed = .5;


/* --------------------------------
   MOUSE MOVEMENT
-------------------------------- */

let mouseX = 0;
let mouseY = 0;

window.addEventListener(
    "mousemove",
    (event) => {

        mouseX =
            (event.clientX /
                window.innerWidth -
                .5) * 2;

        mouseY =
            (event.clientY /
                window.innerHeight -
                .5) * 2;
    }
);


/* --------------------------------
   ANIMATION
-------------------------------- */

const clock = new THREE.Clock();

function animate() {

    requestAnimationFrame(animate);

    const elapsed =
        clock.getElapsedTime();


    /* Machine floating */

    machine.position.y =
        Math.sin(elapsed * 1.2) * .15;


    /* Mouse interaction */

    machine.rotation.y +=
        (mouseX * .25 -
            machine.rotation.y) * .02;

    machine.rotation.x +=
        (-mouseY * .1 -
            machine.rotation.x) * .02;


    /* Particles */

    particles.rotation.y =
        elapsed * .015;


    controls.update();

    renderer.render(
        scene,
        camera
    );
}

animate();


/* --------------------------------
   RESPONSIVE
-------------------------------- */

window.addEventListener(
    "resize",
    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );
    }
);


/* --------------------------------
   SCROLL ANIMATION
-------------------------------- */

const sections =
    document.querySelectorAll(
        ".section"
    );

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";
                    }

                }
            );

        },
        {
            threshold: .15
        }
    );


sections.forEach(
    section => {

        section.style.opacity = "0";

        section.style.transform =
            "translateY(60px)";

        section.style.transition =
            "1s ease";

        observer.observe(section);

    }
);