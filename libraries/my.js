function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



$('button').on("click", function() {
  $(this).toggleClass('active');
});

10

$(document).ready(function () {
    var expand = $("#Expand");
    expand.cliked = 1;
    expand.click(function () {
        $("#expand_p").text((expand.cliked++ % 2 == 0) ? "More information" : "Less information");
    });
});



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active2");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

 



function changeColor() {}

function changeImage(obj) {
    obj.classList.toggle('playing');
}



jQuery(function ($) {
    $.fn.hScroll = function (amount) {
        amount = amount || 120;
        $(this).bind("DOMMouseScroll mousewheel", function (event) {
            var oEvent = event.originalEvent, 
                direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
                position = $(this).scrollLeft();
            position += direction > 0 ? -amount : amount;
            $(this).scrollLeft(position);
            event.preventDefault();
        })
    };
});

$(document).ready(function() {
    $('#box').hScroll(60); // You can pass (optionally) scrolling amount
});



var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



var flipbookEL = document.getElementById('flipbook');

window.addEventListener('resize', function (e) {
	flipbookEL.style.width = '';
  flipbookEL.style.height = '';
  $(flipbookEL).turn('size', flipbookEL.clientWidth, flipbookEL.clientHeight);
});

$(flipbookEL).turn({
    autoCenter: true
});



       let scene, camera, renderer;
      function init() {
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xdddddd);
        camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
        camera.rotation.y = 45/180*Math.PI;
        camera.position.x = 800;
        camera.position.y = 100;
        camera.position.z = 1000;
        controls = new THREE.OrbitControls(camera);
        controls.addEventListener('change', renderer);
        hlight = new THREE.AmbientLight (0x404040,100);
        scene.add(hlight);
        directionalLight = new THREE.DirectionalLight(0xffffff,100);
        directionalLight.position.set(0,1,0);
        directionalLight.castShadow = true;
        scene.add(directionalLight);
        light = new THREE.PointLight(0xc4c4c4,10);
        light.position.set(0,300,500);
        scene.add(light);
        light2 = new THREE.PointLight(0xc4c4c4,10);
        light2.position.set(500,100,0);
        scene.add(light2);
        light3 = new THREE.PointLight(0xc4c4c4,10);
        light3.position.set(0,100,-500);
        scene.add(light3);
        light4 = new THREE.PointLight(0xc4c4c4,10);
        light4.position.set(-500,300,500);
        scene.add(light4);
        renderer = new THREE.WebGLRenderer({antialias:true});
        renderer.setSize(window.innerWidth,window.innerHeight);
        document.body.appendChild(renderer.domElement);
        let loader = new THREE.GLTFLoader();
        loader.load('scene.gltf', function(gltf){
          car = gltf.scene.children[0];
          car.scale.set(0.5,0.5,0.5);
          scene.add(gltf.scene);
          animate();
        });
      }
      function animate() {
        renderer.render(scene,camera);
        requestAnimationFrame(animate);
      }
      init();
        