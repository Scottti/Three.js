import * as THREE from '../orbit_controls/three.module.js';
import { OrbitControls } from '../orbit_controls/orbitcontrols.js';



// Creo escena,camara.
const scene = new THREE.Scene();

// scene.background = new THREE.Color(0x666666) // Cambiar color de fondo
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Renderizado
const renderer = new THREE.WebGLRenderer({alpha: true}); // Transparencia de fondo
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// cubo
const geometry = new THREE.BoxGeometry(); // Objeto
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00}); // Material
const cube = new THREE.Mesh(geometry, material);
cube.castShadow = true; // genera sombras
cube.position.set(1,2,2);
scene.add(cube);

// luz (son evaluadas por el renderizador)
let light = new THREE.DirectionalLight(0xffffff, 1, 100);
light.position.set(0,1,1);
light.castShadow = true; // esta luz genera sombra
scene.add(light);

// plano
let planeGeometry = new THREE.PlaneGeometry(20,20,32,32);
let planeMaterial = new THREE.MeshStandardMaterial({color: 0xff0000});
let plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.receiveShadow = true; // recibe sombra
plane.position.set(0,0,0);
scene.add(plane);

// let grid = new THREE.GridHelper(100, 10); // malla
// scene.add(grid);

camera.position.z = 5;
camera.position.y = -10;
camera.rotation.x = 1;

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame( animate);
    renderer.render( scene, camera)
}
animate()