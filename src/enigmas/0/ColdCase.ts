
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
		/*var _3_renderer: 	THREE.WebGLRenderer;
		var _3_camera:   	THREE.PerspectiveCamera;
		var _3_scene:		THREE.Scene;
		var _3_cube:		THREE.Mesh;
		var _window_width:  window.document.documentElement.clientWidth; //document.body.clientWidth;
		var _window_height: window.innerHeight; // document.body.clientHeight;

		_3_renderer = new THREE.WebGLRenderer({ alpha: true });
		_3_camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 1000 );
		_3_scene = new THREE.Scene();

		_3_renderer.setSize( window.innerWidth, window.innerHeight);
		document.getElementById('canvas-container').appendChild( _3_renderer.domElement );

		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		_3_cube = new THREE.Mesh( geometry, material );

		_3_scene.add( _3_cube );
		_3_camera.position.z = 5;

		var render = function () {
			requestAnimationFrame( render );

			_3_cube.rotation.x += 0.01;
			_3_cube.rotation.y += 0.01;

			_3_renderer.render(_3_scene, _3_camera);
		};

		render();*/
	}
}
