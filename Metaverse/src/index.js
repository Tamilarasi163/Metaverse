import Movements from "./movements.js";


// Declaration  of a new scene with Three.js
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xbfd1e5);

// Camera and renderer configuration
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//Setting Scene light
const ambient_light = new THREE.AmbientLight(0xbda355);
const direction_light = new THREE.DirectionalLight(0xffffff, 1);
ambient_light.add(direction_light);
scene.add(ambient_light);



//Setting up flat space of the Metaverse
const geometry_space = new THREE.BoxGeometry(100, 0.2, 50);
const material_space = new THREE.MeshPhongMaterial({color:0xfffff});
const space = new THREE.Mesh(geometry_space,material_space);
scene.add(space);

//cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
//camera.position.z = 5;

const geometry_cylinder = new THREE.CylinderGeometry( 5, 5, 5, 32 ); 
const material_cylinder = new THREE.MeshPhongMaterial( {color: 0xff0000} ); 
const cylinder = new THREE.Mesh( geometry_cylinder, material_cylinder ); scene.add( cylinder );
cylinder.position.set(10, 5, 5);
scene.add( cylinder );


//cone
const geometry_cone= new THREE.ConeGeometry( 5, 20, 32 ); 
const material_cone = new THREE.MeshPhongMaterial( {color: 0xffff00} );
const cone = new THREE.Mesh(geometry_cone, material_cone ); scene.add( cone );
cone.position.set(-10, 5, 0);
scene.add( cone );


camera.position.set(10, 5, 40);

function animate() {
    cube.rotation.x +=0.1
    cube.rotation.y +=0.1

    cone.rotation.x +=0.1
    cone.rotation.y +=0.1
    
    cylinder.rotation.x +=0.1

    requestAnimationFrame(animate);
    // Movement to the left
    if (Movements.isPressed(37)) {
        camera.position.x -= 0.5;
    }
    // Upward movement
    if (Movements.isPressed(38)) {
        camera.position.x += 0.5;
        camera.position.y += 0.5;
    }
    // Movement to the right
    if (Movements.isPressed(39)) {
        camera.position.x += 0.5;
    }
    // Downward movement
    if (Movements.isPressed(40)) {
        camera.position.x -= 0.5;
        camera.position.y -= 0.5;
    }

    camera.lookAt(space.position);
    renderer.render(scene, camera);
}
animate();




