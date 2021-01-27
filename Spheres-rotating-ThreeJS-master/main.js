//scene 
const scene=new THREE.Scene();

//camera
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);


//renderer
const renderer=new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

//geometry 
const geometry=new THREE.SphereGeometry(10,10,10);
const material=new THREE.MeshNormalMaterial({wireframe:true});
const sphere=new THREE.Mesh(geometry,material);
//add to scene
scene.add(sphere);

const geometry2=new THREE.SphereGeometry(10,10,10);
const material2=new THREE.MeshNormalMaterial({wireframe:true});
const sphere2=new THREE.Mesh(geometry2,material2);
sphere2.position.x=40;
//add to scene
scene.add(sphere2);

const geometry3=new THREE.SphereGeometry(10,10,10);
const material3=new THREE.MeshNormalMaterial({wireframe:true});
const sphere3=new THREE.Mesh(geometry3,material3);
sphere3.position.x=-40;
//add to scene
scene.add(sphere3);
camera.position.z=50;

//adding controls
const controls=new THREE.OrbitControls(camera,renderer.domElement);
controls.minDistance=1;
controls.maxDistance=1000;

//adding event when clicked once  sets wireframre to false and twice true;
var  is_clicked=false;
const domEvents=new THREEx.DomEvents(camera,renderer.domElement);
domEvents.addEventListener(sphere,'click',event=>{
    if(!is_clicked)
        {
            material.wireframe=false;
            is_clicked=true;
            
        }
    else
        {
            material.wireframe=true;
            is_clicked=false;
        }

})
/******************************************2********/
//adding event mouseover to scale bigger
domEvents.addEventListener(sphere2,'mouseover',event=>{
    sphere2.scale.set(2,2,2);
})
//adding event mouseout to scale less
domEvents.addEventListener(sphere2,'mouseout',event=>{
    sphere2.scale.set(1,1,1);
})
/******************************************1********/
//adding event mouseover to scale bigger
domEvents.addEventListener(sphere,'mouseover',event=>{
    sphere.scale.set(2,2,2);
})
//adding event mouseout to scale less
domEvents.addEventListener(sphere,'mouseout',event=>{
    sphere.scale.set(1,1,1);
})
/******************************************3********/
//adding event mouseover to scale bigger
domEvents.addEventListener(sphere3,'mouseover',event=>{
    sphere3.scale.set(2,2,2);
})
//adding event mouseout to scale less
domEvents.addEventListener(sphere3,'mouseout',event=>{
    sphere3.scale.set(1,1,1);
})
//animate function
const animate=() =>{
        requestAnimationFrame(animate);

        sphere.rotation.x+=0.01;
        sphere.rotation.y+=0.01;

        sphere2.rotation.x+=0.01;
        sphere2.rotation.y+=0.01;

        sphere3.rotation.x+=0.01;
        sphere3.rotation.y+=0.01;
        
        renderer.render(scene,camera);

        controls.update();
}
animate(); 

