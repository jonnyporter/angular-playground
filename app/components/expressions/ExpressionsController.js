var app = angular.module('angularPlayground');

app.controller('ExpressionsController', ExpressionsController);


function ExpressionsController(){
	this.expressionsStatus = 'Working';
	this.test = 'Yipee! It works!'
}

app.controller('MyOwnFrikinController', MyOwnFrikinController);

function MyOwnFrikinController(){
	this.isTheBomb = "This is my own frikin property!";
}