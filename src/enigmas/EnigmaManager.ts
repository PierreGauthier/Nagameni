import { Component, View } from 'angular2/angular2';
import { RouteConfig, RouterLink, RouterOutlet, RouteParams } from 'angular2/router';

import { Enigma_0 } from './0/enigma';

@Component({
	selector: 'nagameni'
})

@View({
	directives: [RouterLink, RouterOutlet],
	templateUrl: '../templates/enigma.html'
})

@RouteConfig([
  { path: '/',   	redirectTo: '/0' },
  { path: '/0',		component: Enigma_0 },
])

export class EnigmaManager {
	title: string;
	constructor(routeParam: RouteParams) {
		this.title = 'Enigma';
	}
}
