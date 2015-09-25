var app = angular.module('angularPlayground');

app.controller('ControllersController', ControllersController);


function ControllersController(){
	this.controllersStatus = 'Working';
	this.friends = ['Joey', 'Chandler', 'Monica', 'Phebes', 'Ross & Rachel'];
	this.newFriend = "";
	this.addFriend = function () {
		this.friends.push(this.newFriend);
		this.newFriend = '';
	}
	
}