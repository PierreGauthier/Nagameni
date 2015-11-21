import { Component, View, bootstrap, bind } from 'angular2/angular2';
import { routerInjectables, LocationStrategy, HashLocationStrategy, RouteConfig, RouterLink, RouterOutlet } from 'angular2/router';

import { EnigmaManager } from './enigmas/EnigmaManager';
import { Three } from './services/three';

@Component({
	selector: 'nagameni'
})

@View({
	directives: [RouterLink, RouterOutlet],
	templateUrl: '../templates/app.html'
})

@RouteConfig([
  { path: '/',                               redirectTo: '/enigma/' },
  { path: '/enigma/...',    as: 'enigma',    component: EnigmaManager }
])

export class Nagameni {
	title: string;
	constructor() {
		this.title = 'Nagameni';
	}
}

var universalInjectables = [
  routerInjectables,
  Three,
  bind(LocationStrategy).toClass(HashLocationStrategy)
];

bootstrap(Nagameni, [universalInjectables]);
