import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

loader.load('planet.glb', function(gltf) {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    scene.add(gltf.scene);

    scene.add(new THREE.AxesHelper(5));

    const light = new THREE.AmbientLight( 0x404040 );
    scene.add( light );

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.set(0, 0, 0.1);
    camera.lookAt(new THREE.Vector3());
    scene.add(camera);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }

    document.body.appendChild(renderer.domElement);

    animate();
}, undefined, function(error) {
    console.error(error);
});