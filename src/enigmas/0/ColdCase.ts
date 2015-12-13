
import { Component, View, NgFor, Inject } from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';

import { Three } from '../../services/three';

@Component({
	selector: 'enigma',
})
@View({
	directives: [NgFor, RouterLink],
	templateUrl: '/src/enigmas/0/templates/landing.html'
})

export class Enigma_0 {

	constructor(threeService: Three) {
		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshLambertMaterial( );

		var loader = new THREE.JSONLoader();
		var _3_cube;
	    loader.load('/src/enigmas/0/assets/cube.json', function(geometry, materials) {
	        _3_cube = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
			Three.addToScene(_3_cube);
	    });
		//_3_cube.rotation.x = 0.283 ;
		//_3_cube.rotation.y = -0.734;

		var _3_light_1 = new THREE.DirectionalLight( 0xffffff, 3 );
		_3_light_1.position.set( 0.5, 4, 1 );
		var _3_light_2 = new THREE.AmbientLight( 0xaaaaaa );
	    Three.addToScene(_3_light_1);
		Three.addToScene(_3_light_2);

		var cursorPos = { x : 0, y : 0};
		var moving = false;
		var onDocumentMouseMove = function( event ) {
			cursorPos.x = ( event.clientX - window.innerWidth/2 );
			cursorPos.y = ( event.clientY - window.innerHeight/2 );
		}
		var onDocumentMouseClick = function( event ) {
			moving = !moving;
		}
		document.addEventListener( 'mousemove', onDocumentMouseMove, false );
		document.addEventListener( 'click', onDocumentMouseClick, false );

		var e0_animation = function () {
			requestAnimationFrame( e0_animation );
			if (moving) {
				_3_cube.rotation.x = (cursorPos.y/Math.abs(cursorPos.y)) * Math.abs(cursorPos.y) / 500;
				_3_cube.rotation.y = (cursorPos.x/Math.abs(cursorPos.x)) * Math.abs(cursorPos.x) / 500;
				_3_cube.rotation.x = (isNaN(_3_cube.rotation.x) ? 0 : _3_cube.rotation.x);
				_3_cube.rotation.y = (isNaN(_3_cube.rotation.y) ? 0 : _3_cube.rotation.y);
			}
		};

		e0_animation();
	}
}
