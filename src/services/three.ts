/// <reference path="./three.d.ts"/>

import { Injectable } from 'angular2/angular2';

@Injectable()
export class Three {

	static renderer : THREE.WebGLRenderer;
	static scene    : THREE.Scene;
	static camera   : THREE.PerspectiveCamera;

	constructor() {
		console.log('salut');

		Three.renderer = new THREE.WebGLRenderer({ alpha: true });
		Three.camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 1000 );
		Three.scene = new THREE.Scene();

		Three.renderer.setSize( window.innerWidth, window.innerHeight);
		document.body.appendChild( Three.renderer.domElement );

		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		var _3_cube = new THREE.Mesh( geometry, material );

		this.addToScene(_3_cube);
		Three.camera.position.z = 5;

		var prerender = function () {
			requestAnimationFrame( prerender );
			_3_cube.rotation.x += 0.01;
			_3_cube.rotation.y += 0.01;
		};

		prerender();

		Three.render();
	}

	public addToScene (element) {
		Three.scene.add(element);
	}

	static render () {
		requestAnimationFrame( Three.render );
		Three.renderer.render(Three.scene, Three.camera);
	}
}
