
import { Component, View, NgFor, Inject } from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';

@Component({
	selector: 'enigma',
})
@View({
	directives: [NgFor, RouterLink],
	templateUrl: '/src/enigmas/0/templates/landing.html',
	styleUrls:  ['/media/styles/enigma_0.min.css']
})

export class Enigma_0 {
	constructor() {
	}
}
