angular.module("chatapp", [])
         
.controller("MessageController", function($scope) {
	var socket = io();

	$scope.input = "";
	$scope.messages = "Welcome to the chat room\r\n";
	socket.on('chat message',function(msg){
		$scope.messages = $scope.messages + msg + "\r\n";
	});
	$scope.send = function(){
		socket.emit('chat message', $scope.input)
		$scope.input = "";
	}
});