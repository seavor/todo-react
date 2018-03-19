/* jshint strict: false */
describe( 'Teacher Carousel Component', function() {
  var ctrl, UserSvc_, ApiSvc_, $q, $timeout;

  beforeEach(function() {
    module( 'app.components.teacher.carousel' );
    module( 'app.services.user' );
    module( 'app.services.api' );
  });

  beforeEach( inject( function( _$componentController_, _UserSvc__, _ApiSvc__, _$q_, _$timeout_ ) {
      UserSvc_ = _UserSvc__;
      ApiSvc_ = _ApiSvc__;
      $q = _$q_;
      $timeout = _$timeout_;
      
      ctrl = _$componentController_('litTeacherCarousel', null, {
        dashboard: {
          "books":[
            {"id":2065,"fileMakerProId":"FMP00008449","title":"Unite or Die","fictionNonfiction":"Nonfiction","contributors":[{"name":"Jef Czekaj","role":"Illustrator"},{"name":"Jacqueline Jules","role":"Author"}],"description":"The struggle that led to the Constitutional Convention and the creation of the U.S. Constitution is enacted in the form of an illustrated children's play. This book shows the need many people felt for a strong national government, and explains the fears and reservations many others had about this change.","studentDescription":"Why did Americans need a Constitution? Find out how people struggled to build a strong national government, and why many believed we didn't need a national government at all.","teacherDescription":"The struggle that led to the Constitutional Convention and the creation of the U.S. Constitution is enacted in the form of an illustrated children's play. This book shows the need many people felt for a strong national government, and explains the fears and reservations many others had about this change.","coverRights":true,"cover":"https://perf.api.scholastic.com/pais/v1/systems/litpro-us/products/identifiers/isbn/9780545736305/cover","url":"https://ereader-services-qa.hosting-sbx.scholastic.tech/file/eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyODEwNTgiLCJ1aWQiOiIyODEwNTgiLCJhcGlCYXNlVXJsIjoiaHR0cHM6Ly9saXQtcHJvLXVzLXJlc3QtZGV2LmFwcHMub3NucDEuc2Nob2xhc3RpYy50ZWNoL2xpdHByby9hcGkiLCJpYXQiOjE1MTc2MDU1ODcsImV4cCI6MTUxODI1MzU4NywiaXNzIjoiTGl0cHJvVXMifQ.uhky3syI6s-Rst4HLjGInNkRflLiYOAp70_9uCigsuwyiyWNIKkOmJB1pbEmqo7SNSMK8HuNGq1oIeN_s49EWg/epub/9780545736305/","hasQuiz":false,"hasAudio":false,"lexile":"540L","guidedReadingLevel":"S","interests":[{"id":23,"title":"U.S. History & Government","youngerTitle":"The USA","olderTitle":"U.S. History & Government"},{"id":14,"title":"History","youngerTitle":"In the Past","olderTitle":"History"}],"genres":[{"id":28,"code":"PI","filter":"Nonfiction","title":"Picture Book","youngerTitle":"Picture Book","olderTitle":"Picture Book"},{"id":21,"code":"IT","filter":"Nonfiction","title":"Informational Text","youngerTitle":"Informational Text","olderTitle":"Informational Text"}],"series":null,"subseries":null,"pageCount":48,"pageRange":"50 or fewer","subtitle":"How Thirteen States Became a Nation","userContext":{"bookId":2065,"currentPage":null,"totalPages":48,"isOnLevel":false,"addedToMyBooks":false,"dateLastActivity":null,"dateCompleted":null,"pageId":null},"ebook":true},
            {"id":89,"fileMakerProId":"FMP00000248","title":"A Light in the Storm","fictionNonfiction":"Fiction","contributors":[{"name":"Karen Hesse","role":"Author"}],"description":"It's 1861, and 15-year-old Amelia Martin is confused and distressed by the Civil War. Her mother sides with the Confederacy and her father sides with the Union. Amelia's journal entries reveal how that time in history tore apart both country and families. Notes at the end give a more detailed description of that tumultuous time.","studentDescription":"It's 1861, and 15-year-old Amelia Martin is confused and distressed by the Civil War. Her mother sides with the Confederacy and her father sides with the Union. Amelia's journal entries reveal how that time in history tore apart both country and families. \u000B","teacherDescription":"It's 1861, and 15-year-old Amelia Martin is confused and distressed by the Civil War. Her mother sides with the Confederacy and her father sides with the Union. Amelia's journal entries reveal how that time in history tore apart both country and families. Notes at the end give a more detailed description of that tumultuous time.","coverRights":true,"cover":"https://perf.api.scholastic.com/pais/v1/systems/litpro-us/products/identifiers/isbn/9780545774895/cover","url":"https://ereader-services-qa.hosting-sbx.scholastic.tech/file/eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyODEwNTgiLCJ1aWQiOiIyODEwNTgiLCJhcGlCYXNlVXJsIjoiaHR0cHM6Ly9saXQtcHJvLXVzLXJlc3QtZGV2LmFwcHMub3NucDEuc2Nob2xhc3RpYy50ZWNoL2xpdHByby9hcGkiLCJpYXQiOjE1MTc2MDU1ODcsImV4cCI6MTUxODI1MzU4NywiaXNzIjoiTGl0cHJvVXMifQ.uhky3syI6s-Rst4HLjGInNkRflLiYOAp70_9uCigsuwyiyWNIKkOmJB1pbEmqo7SNSMK8HuNGq1oIeN_s49EWg/epub/9780545774895/","hasQuiz":false,"hasAudio":false,"lexile":"850L","guidedReadingLevel":"T","interests":[{"id":23,"title":"U.S. History & Government","youngerTitle":"The USA","olderTitle":"U.S. History & Government"},{"id":14,"title":"History","youngerTitle":"In the Past","olderTitle":"History"},{"id":5,"title":"Friends & Family","youngerTitle":"Family & Friends","olderTitle":"Friends & Family"}],"genres":[{"id":34,"code":"ST","filter":"Fiction","title":"Series Book","youngerTitle":"Series Book","olderTitle":"Series Book"},{"id":20,"code":"HF","filter":"Fiction","title":"Historical Fiction","youngerTitle":"Historical Fiction","olderTitle":"Historical Fiction"},{"id":25,"code":"NM","filter":"Fiction","title":"Novels: Middle Grade","youngerTitle":"Novels: Middle Grade","olderTitle":"Novels: Middle Grade"}],"series":"Dear America","subseries":null,"pageCount":208,"pageRange":"201-300","subtitle":"The Diary of Amelia Martin","userContext":{"bookId":89,"currentPage":null,"totalPages":208,"isOnLevel":false,"addedToMyBooks":false,"dateLastActivity":null,"dateCompleted":null,"pageId":null},"ebook":true},
            {"id":363,"fileMakerProId":"FMP00001477","title":"Civil War","fictionNonfiction":"Nonfiction","contributors":[{"name":"John Perritano","role":"Author"}],"description":"Key events of the American Civil War are explored in detail, using images and documents from the era. With an emphasis on military strategy, this text-feature-heavy book also explores the causes of the war, the Gettysburg Address, the Emancipation Proclamation, and the assassination of U.S. President Abraham Lincoln.","studentDescription":"It was the bloodiest event in U.S. history. The Civil War claimed thousands of lives and almost tore the country apart. Go onto the battlefields to learn how the war was fought.","teacherDescription":"Key events of the American Civil War are explored in detail, using images and documents from the era. With an emphasis on military strategy, this text-feature-heavy book also explores the causes of the war, the Gettysburg Address, the Emancipation Proclamation, and the assassination of U.S. President Abraham Lincoln.","coverRights":true,"cover":"https://perf.api.scholastic.com/pais/v1/systems/litpro-us/products/identifiers/isbn/9780545909341/cover","url":"https://ereader-services-qa.hosting-sbx.scholastic.tech/file/eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyODEwNTgiLCJ1aWQiOiIyODEwNTgiLCJhcGlCYXNlVXJsIjoiaHR0cHM6Ly9saXQtcHJvLXVzLXJlc3QtZGV2LmFwcHMub3NucDEuc2Nob2xhc3RpYy50ZWNoL2xpdHByby9hcGkiLCJpYXQiOjE1MTc2MDU1ODcsImV4cCI6MTUxODI1MzU4NywiaXNzIjoiTGl0cHJvVXMifQ.uhky3syI6s-Rst4HLjGInNkRflLiYOAp70_9uCigsuwyiyWNIKkOmJB1pbEmqo7SNSMK8HuNGq1oIeN_s49EWg/epub/9780545909341/","hasQuiz":true,"hasAudio":false,"lexile":"770L","guidedReadingLevel":"V","interests":[{"id":23,"title":"U.S. History & Government","youngerTitle":"The USA","olderTitle":"U.S. History & Government"},{"id":14,"title":"History","youngerTitle":"In the Past","olderTitle":"History"}],"genres":[{"id":30,"code":"RE","filter":"Nonfiction","title":"Reference","youngerTitle":"Reference","olderTitle":"Reference"},{"id":21,"code":"IT","filter":"Nonfiction","title":"Informational Text","youngerTitle":"Informational Text","olderTitle":"Informational Text"}],"series":"America at War","subseries":null,"pageCount":32,"pageRange":"50 or fewer","subtitle":null,"userContext":{"bookId":363,"currentPage":null,"totalPages":32,"isOnLevel":false,"addedToMyBooks":false,"dateLastActivity":null,"dateCompleted":null,"pageId":null},"ebook":true}
          ]
        },

        reports: {},

        classes: {
          results: []
        }
      });
  } ) );

  beforeEach(function() {
    inject(function(_$httpBackend_) {
      this.stubs.sdm(_$httpBackend_);
      this.stubs.search(_$httpBackend_);
    } );
  } );

  afterEach( function() {
    ctrl = null;
  });

  it('Component should be defined', function() {
    expect(ctrl).toBeDefined();
  });

  describe('$onInit method', function() {
    it('should be defined', function() {
      expect(ctrl.$onInit).toBeDefined();
    });

    it('should have dashboard defined on model', function() {
      ctrl.$onInit();

      expect(ctrl.dashboard).toBeDefined();
    });

    it('should have reports defined on model', function() {
      ctrl.$onInit();

      expect(ctrl.reports).toBeDefined();
    });

    it('should have classes defined on model', function() {
      ctrl.$onInit();

      expect(ctrl.classes).toBeDefined();
    });

    it('should grab user from service', function() {
      var spy = spyOn(UserSvc_, 'getUser').and.callThrough();

      ctrl.$onInit();

      expect(ctrl.user).toBeDefined();
      expect(spy).toHaveBeenCalled();
    });

    it('should prepare slides for carousel', function() {
      ctrl.$onInit();

      expect(ctrl.slides).toBeDefined();
      expect(ctrl.slides.length).toBe(1);
      expect(ctrl.slides[0].books.length).toBe(3);
    });
  });

  describe('selectClassDash method', function() {
    it('should be defined', function() {
      expect(ctrl.selectClassDash).toBeDefined();
    });

    it('should save selected class to controller', function() {
      var c = {classId: 1};

      ctrl.selectClassDash(c);

      expect(ctrl.selectedClass).toBe(c);
    });

    it('should request reports data', function() {
      var data = {test: 'test'},
        spy = spyOn(ApiSvc_, 'get').and.returnValue(this.stubs.promise($q, data));
      
      ctrl.selectClassDash({classId: 1});
      $timeout.flush();

      expect(spy).toHaveBeenCalled();
      expect(ctrl.reports).toBe(data);
    });

    it('should restore selected class if request fails', function() {
      var selectedClass = {test: 'test'},
        spy1 = spyOn(ApiSvc_, 'get').and.returnValue(this.stubs.promise($q, null, {})),
        spy2 = spyOn(ApiSvc_, 'toastResolveError').and.returnValue(true);

      
      ctrl.selectedClass = selectedClass;
      ctrl.selectClassDash({classId: 1});

      $timeout.flush();

      expect(spy1).toHaveBeenCalled();
      expect(spy2).toHaveBeenCalled();
      expect(ctrl.selectedClass).toBe(selectedClass);
    });
  });

} );
