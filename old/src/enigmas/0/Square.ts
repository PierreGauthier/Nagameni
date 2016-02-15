
import { Component, View, NgFor, Inject } from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';

@Component({
	selector: 'enigma',
})
@View({
	directives: [NgFor, RouterLink],
	templateUrl: '/src/enigmas/0/templates/square.html'
})

class Tile
{
	private x: number;
	private y: number;
	private color: string;

	constructor (x, y, color) {
		this.x = x;
		this.y = y;
		this.color = color;
	}

	move (x, y) {

	}
}

export class Enigma_0
{
	private tiles: Tile[];

	constructor(routeParam: RouteParams) {

		for (var i=0; i < 3; i++) {
			for (var j=0; j < 3; i++) {
				this.tiles.push(new Tile(i, j, '#ff' + i + 'f' + j + 'f'));
			}
		}

	}
}
