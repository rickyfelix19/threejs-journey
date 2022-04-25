console.log('Hello 3js');
console.log(THREE);

// First, we make a SCENE;
// its very identical to a container
// or like real-life where you have a (movie) scene

const scene = new THREE.Scene();

// Second, we make OBJECTS;
// it can be many things such as:
/* primitive geometries, imported models, particles, lights, etc */

// to create a visible object, you need to make a MESH
// It is the combination of: Geometry (shape) and Material (look)

// creating red cube
// pseudocode: create gemotery, material, then put them inside mesh

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: '#ff0000' }); // 0xff0000
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh); // it is required to add mesh to the scene, otherwise it wont run

// creating camera
// it is possible to have multiple cameras, however only 1 camera per render
// there are also different type of cameras
// camera require 2 parameters (field of view(in degrees angle), aspect ratio)

const sizes = {
  width: 800,
  height: 600
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// to transform object, you can use either: position, rotation, and scale
// each respective way, uses X Y and Z
camera.position.z = 3;
camera.position.x = 1;
scene.add(camera);

// create renderer
// create a scene based on your camera pov
// canvas is created at index.html

const canvas = document.querySelector('canvas.webgl');
const renderer = new THREE.WebGLRenderer({
  // dom element
  // canvas: canvas
  canvas
});
console.log(canvas);

renderer.setSize(sizes.width, sizes.height);

// to make your first render
// it requires a scene and camera
// scene is empty because camera is in the center of scene
renderer.render(scene, camera);
