app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/doctors', {
            controller: 'DoctorCtrl',
            templateUrl: 'partials/doctors.html'
        })
        .when('/patients', {
            controller: 'PatientCtrl',
            templateUrl: 'partials/patients.html'
        })
        .when('/login', {
            controller: 'LoginCtrl',
            templateUrl: 'partials/login.html'
        })
        .otherwise({
            redirectTo: '/login'
        })
})
