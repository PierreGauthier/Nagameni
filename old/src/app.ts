import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {bootstrap} from 'angular2/platform/browser';

import { EnigmaManager } from './enigmas/EnigmaManager';
import { Three } from './services/three';

@Component({
  selector: 'nagameni',
  templateUrl: '../templates/app.html',
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  // {path:'/', 		name: 'CrisisCenter', component: CrisisListComponent},
  { path:'/enigma',  name: 'Enigma',       component: EnigmaManager }
])

export class Nagameni { }

bootstrap(Nagameni, [
  ROUTER_PROVIDERS
]);


// import { Component, View, bootstrap, bind } from 'angular2/core';
// import { routerInjectables, LocationStrategy, HashLocationStrategy, RouteConfig, RouterLink, RouterOutlet } from 'angular2/router';
//
// import { EnigmaManager } from './enigmas/EnigmaManager';
// import { Three } from './services/three';
//
// @Component({
// 	selector: 'nagameni'
// })
//
// @View({
// 	directives: [RouterLink, RouterOutlet],
// 	templateUrl: '../templates/app.html'
// })
//
// @RouteConfig([
//   { path: '/enigma/...',    name: 'enigma',    component: EnigmaManager }
// ])
//
// export class Nagameni {
// 	title: string;
// 	constructor() {
// 		this.title = 'Nagameni';
// 	}
// }
//
// var universalInjectables = [
//   routerInjectables,
//   Three,
//   bind(LocationStrategy).toClass(HashLocationStrategy)
// ];
//
// bootstrap(Nagameni, [universalInjectables]);
