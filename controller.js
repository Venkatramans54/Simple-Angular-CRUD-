app.controller('myCtrl', function($scope) {
    var uid = 0;
    $scope.contacts = [];
    $scope.saveContact = function (id) {
        if (id == null) {
        $scope.newcontact.id = uid++;
        $scope.contacts.push($scope.newcontact);
        $scope.newcontact = {};
        }
        else{
            for (i in $scope.contacts) {
                if ($scope.contacts[i].id == id) {
                    $scope.contacts[i]=$scope.newcontact;
                    $scope.newcontact = {};
                    }
                }

        }
    }
    
    $scope.deleteContact = function (id) {
       alert(id);
       for (i in $scope.contacts) {
        if ($scope.contacts[i].id == id) {
            $scope.contacts.splice(i, 1);
            }
        }
    }

    $scope.getContact=function(id){
        alert(id);
        for (i in $scope.contacts) {
            if ($scope.contacts[i].id == id) {
                $scope.newcontact= $scope.contacts[i];
            }
        }
    }

    
});