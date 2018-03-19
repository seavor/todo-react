(function(){
'use strict';

/**
 * @ngdoc module
 * @name app.components.teacher: carousel
 * @description
 * # app.components.teacher: carousel
 * Module for teacher carousel component
 */
angular
  .module( 'app.components.teacher.carousel', [
    'ngTouch',
    'ngFitText',
    'app.services.user',
    'app.services.api'
  ] )
  .component( 'litTeacherCarousel', {
    templateUrl : 'components/_teacher/carousel/carousel.html',
    controller : ['UserSvc_', 'ApiSvc_', '$timeout', CarouselController ],
    controllerAs : 'vm',
    bindings: {
      dashboard: '<',
      reports: '<',
      classes: '<'
    }
  } );

function CarouselController(UserSvc_, ApiSvc_, $timeout) {
  var vm = this;

  vm.selectClassDash = selectClassDash;

  // Lifecycle Hooks
  /****************************************************************/
  //   For initializaing variables and API data calls
  this.$onInit = function() {
    vm.user = UserSvc_.getUser();
    
    vm.slides = prepareSlides(vm.dashboard.books);

    vm.classes.results = vm.classes.results || [];

    vm.classes.results.unshift({
      classId: -1,
      className: 'All Classes',
      selected: true
    });

    vm.selectedClass = vm.classes.results[0];
  };

  // Private Methods
  /****************************************************************/
  function prepareSlides(books) {
    var results = [],
      i = 0,
      
      slide = {
        id: i,
        books: []
      },

      BOOKS_PER_SLIDE = 3;

    for (i; books.length > i; i++) {
      if (i && i % BOOKS_PER_SLIDE === 0) {
        results.push(slide);

        slide = {
          id: slide.id+1,
          books: []
        };
      }

      slide.books.push(books[i]);
    }

    if (slide.books.length) {
      results.push(slide);
    }

    return results;
  }

  function selectClassDash(c) {
    var oldSelectedClass = vm.selectedClass,
      request;

    vm.selectedClass = c;

    if (c.classId === -1) {
      request = ApiSvc_.get('reportsTeacherDash', { teacherId: vm.user.id });
    } else {
      request = ApiSvc_.get('reportsClassDashboard', { classId: c.classId });
    }

    request.then(function(data) {
      vm.reports = data;

      // Trigger fitText calculation
      $timeout(function() {
        angular.element(window).trigger('resize');
      });
    }).catch(function(e) {
      vm.selectedClass = oldSelectedClass;
      ApiSvc_.toastResolveError(e);
    });
    
  }

}
}());
