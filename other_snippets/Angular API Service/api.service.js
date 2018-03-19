'use strict';

/**
 * @ngdoc function
 * @description
 * # API Service
 */
angular.module('app').factory('API', ['$q', '$http', 'toastr', 'Spinners',
  function ($q, $http, toastr, Spinners) {
    var SERVICE_URL = '/api',
      MEDIA_REPO_URL = null,

      service = {
        get: _get,
        post: _post,
        put: _put,
        delete: _delete,

        suppress: suppressMultipleRequests,

        setMediaUrl: function(url) { MEDIA_REPO_URL = url; },
        getMediaUrl: function() { return MEDIA_REPO_URL; },

        parseParams: parseParams

      },

      _resources = {
        get: {
          welcome: '/welcome',
          titles: '/titles',
          title: '/titles/{id}',
          taxonomy: '/taxonomy',
          textsets: '/textsets',
          bookmarks: '/bookmarks',
          reservations: '/reservations?title_id={id}',
          titleStatus: '/titles/{id}/status',
          adminReservations: '/admin/reservations',
          adminLostTitles: '/lost-titles?org_id={id}',
          myLostTitles: '/lost-titles/my'
        },

        post: {
          addBookmark: '/bookmarks?title_id={id}',
          state: '/state?stateName={name}',
          addTextset: '/textsets?title={title}&description={description}&level={level}',
          addTextsetEntry: '/textsets/{id}?title_id={title}',
          addReservation: '/reservations?title_id={id}',
          adminSettings: '/settings?setting={setting}&value={value}',
          adminLostTitles: '/lost-titles?title_id={title}&org_id={org}&available_copies={copies}'
        },

        put: {
          editTextset: '/textsets?id={id}&title={title}&description={description}&level={level}',
        },

        delete: {
          deleteBookmark: '/bookmarks?bookmark_id={id}',
          deleteTextset: '/textsets?id={id}',
          deleteTextsetEntry: '/textsets/{id}?title_id={title}',
          deleteReservation: '/reservations?reservation_id={id}',
          adminReservations: '/admin/reservations' // [IDs]
        }
      },

      // Hold in-progress requests to serve to duplicate requests
      cachedRequests = {
        get: {},

        suppressed: {
          post: {},
          put: {},
          delete: {}
        }
      },

      spinners = 0;

    return service;

    // Public Methods
    /**************************************************/
    function _get(resource, params) {
      var request = SERVICE_URL + parseParams(_resources.get[resource], params),
        cachedReq = cachedRequests.get[request];

      if (!cachedReq) {
        Spinners.show('mainSpinner');

        cachedReq = $http.get(request).then(handleReturn)
        .finally(function(data) {
          Spinners.hide('mainSpinner');

          delete cachedRequests.get[request];
          return data;
        });
      }

      return cachedReq;
    }

    function _post(resource, params, data) {
      var request = SERVICE_URL + parseParams(_resources.post[resource], params);

      Spinners.show('mainSpinner');

      return $http.post(request, data).then(handleReturn).finally(function() {
        Spinners.hide('mainSpinner');
      });
    }

    function _put(resource, params, data) {
      var request = SERVICE_URL + parseParams(_resources.put[resource], params);

      Spinners.show('mainSpinner');

      return $http.put(request, data).then(handleReturn).finally(function() {
        Spinners.hide('mainSpinner');
      });
    }

    function _delete(resource, params, data) {
      var request = SERVICE_URL + parseParams(_resources.delete[resource], params),
        config = { method: 'DELETE', url: request };

        Spinners.show('mainSpinner');

        if (data) {
          config.data = data;
          config.headers = {
            'Content-Type': 'application/json;charset=utf-8'
          };
        }

      return $http(config).then(handleReturn).finally(function() {
        Spinners.hide('mainSpinner');
      });
    }

    // Not to be used with GET methods (redundant functionality)
    function suppressMultipleRequests(method, resource, params, data) {
      var request, cache, serializedData;

      Spinners.show('mainSpinner');

      // GET requests automatically cached for duplicate requests
      if (method === 'get') {
        return _get(resource, params);
      } else {
        serializedData = data ? JSON.stringify(data) : '';
        request = SERVICE_URL + parseParams(_resources[method][resource], params) + serializedData;
        cache = cachedRequests.suppressed[method];

        cache[request] = cache[request] || service[method](resource, params, data).finally(function(data) {
          Spinners.hide('mainSpinner');

          delete cache[request];
          return data;
        });

        return cache[request];
      }
    }

    // Private Methods
    /**************************************************/

    function parseParams(path, params) {
      var keys, length, i;

      if (!!params) {
        keys = Object.keys(params);
        length = keys.length;
        i = 0;

        for (i; length > i; i++) {
          path = path.replace('{'+keys[i]+'}', params[keys[i]]);
        }
      }

      return path;
    }

    function handleReturn(data) {
      var defer = $q.defer();

      // Resolve requests to data.data.body if successful
      if (data && !data.error && data.data && data.data.success) {
        defer.resolve(data.data.body);
      } else {
        defer.reject(data.data.body);
      }

      return defer.promise;
    }
  }
]);
