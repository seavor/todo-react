(function(){
'use strict';

/**
 * @ngdoc function
 * @name app.interceptors.simulatorInterceptor
 * # SimulatorInterceptor_
 */
angular
  .module( 'app.interceptors.simulator', [
    'app.services.simulator'
  ])
  .factory( 'SimulatorInterceptor', [ '$q', 'SpinnerSvc_', 'SimulatorSvc_', SimulatorInterceptor ] );

function SimulatorInterceptor( $q, SpinnerSvc_, SimulatorSvc_ ) {
  var DISABLED = false,
    ENABLED_FOR_QA = true;

  return {
    responseError : responseError
  };

  // public defs
  function responseError(err) {
    var deferred = $q.defer(),
      stubbedCodes = [404, 500, 405, -1],
      isNotLocal = (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1');

    // Disable simulator for non-local environments
    if ((DISABLED || isNotLocal) && !ENABLED_FOR_QA) {
      return err;
    }

    // If endpoint was not defined by the backend
    if (stubbedCodes.indexOf(err.status) !== -1 ) {
      SimulatorSvc_.getResource(err.config.method.toLowerCase(), err.config.url)
        .then(function(res) {
          err.status = 200;
          err.data = res;
          deferred.resolve(err);
        }, function() {
          // Otherwise return original endpoint error
          deferred.reject(err);
        });
    } else {
      // TODO ('Need to handle other codes than 404 and -1 in simulator.interceptor.js'

      // resolve to push to .then, reject to .catch
      deferred.reject(err);
    }

    setTimeout(function(){
      SpinnerSvc_.hide('mainSpinner');
    }, 750);

    return deferred.promise;
  }

}

angular
  .module('app.services')
  .config(function($httpProvider){
    $httpProvider.interceptors.push(SimulatorInterceptor);
});
}());
