
import { Component, View, NgFor, Inject } from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';

import { Three } from '../../services/three';

@Component({
	selector: 'enigma',
})
@View({
	directives: [NgFor, RouterLink],
	templateUrl: '/src/enigmas/0/templates/landing.html',
	styleUrls:  ['/media/styles/enigma_0.min.css']
})

export class Enigma_0 {

	constructor(threeService: Three) {
		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0xffffff, shininess: 50 } );
		var _3_cube = new THREE.Mesh( geometry, material );

		var _3_light = new THREE.DirectionalLight( 0xaa8833, 0.5 );
		_3_light.position.set( 0.5, 2, 3 );

		Three.addToScene(_3_cube);
		Three.addToScene(_3_light);

		var cursorPos = { x : 0, y : 0};
		var onDocumentMouseMove = function( event ) {
			cursorPos.x = ( event.clientX - window.innerWidth/2 );
			cursorPos.y = ( event.clientY - window.innerHeight/2 );
		}
		document.addEventListener( 'mousemove', onDocumentMouseMove, false );

		var e0_animation = function () {
			requestAnimationFrame( e0_animation );
			_3_cube.rotation.x = (cursorPos.y/Math.abs(cursorPos.y)) * Math.abs(cursorPos.y) / 500;
			_3_cube.rotation.y = (cursorPos.x/Math.abs(cursorPos.x)) * Math.abs(cursorPos.x) / 500;

			_3_cube.rotation.x = (isNaN(_3_cube.rotation.x) ? 0 : _3_cube.rotation.x);
			_3_cube.rotation.y = (isNaN(_3_cube.rotation.y) ? 0 : _3_cube.rotation.y);
		};

		e0_animation();
	}
}
