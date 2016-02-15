/// <reference path="./three.d.ts"/>

import { Injectable } from 'angular2/angular2';

@Injectable()
export class Three {

	static renderer : THREE.WebGLRenderer;
	static scene    : THREE.Scene;
	static camera   : THREE.PerspectiveCamera;

	constructor() {
		Three.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
		Three.camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.01, 10000 );
		Three.scene = new THREE.Scene();

		Three.renderer.setSize( window.innerWidth, window.innerHeight);
		document.body.insertBefore( Three.renderer.domElement, document.getElementById('nagameni') );

		Three.camera.position.z = 10;

		Three.render();
	}

	static addToScene (element) {
		Three.scene.add(element);
	}

	static render () {
		requestAnimationFrame( Three.render );
		Three.renderer.render(Three.scene, Three.camera);
	}
}
