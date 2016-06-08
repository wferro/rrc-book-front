angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.userProfile', {
    url: '/profile',
    views: {
      'tab1': {
        templateUrl: 'templates/userProfile.html',
        controller: 'userProfileCtrl'
      }
    }
  })

  .state('editProfile', {
    url: '/edit_profile',
    templateUrl: 'templates/editProfile.html',
    controller: 'editProfileCtrl'
  })

  .state('tabsController.books', {
    url: '/books',
    views: {
      'tab2': {
        templateUrl: 'templates/books.html',
        controller: 'booksCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('campus', {
    url: '/campus',
    templateUrl: 'templates/campus.html',
    controller: 'campusCtrl'
  })

  .state('program', {
    url: '/program',
    templateUrl: 'templates/program.html',
    controller: 'programCtrl'
  })

  .state('term', {
    url: '/term',
    templateUrl: 'templates/term.html',
    controller: 'termCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.bookName'
      2) Using $state.go programatically:
        $state.go('tabsController.bookName');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /tabs/tab1/book_page
      /tabs/tab2/book_page
  */
  .state('tabsController.bookName', {
    url: '/book_page',
    views: {
      'tab1': {
        templateUrl: 'templates/bookName.html',
        controller: 'bookNameCtrl'
      },
      'tab2': {
        templateUrl: 'templates/bookName.html',
        controller: 'bookNameCtrl'
      }
    }
  })

  .state('bookToSellName', {
    url: '/book_to_sell',
    templateUrl: 'templates/bookToSellName.html',
    controller: 'bookToSellNameCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.message'
      2) Using $state.go programatically:
        $state.go('tabsController.message');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /tabs/tab1/message
      /tabs/tab2/message
  */
  .state('tabsController.message', {
    url: '/message',
    views: {
      'tab1': {
        templateUrl: 'templates/message.html',
        controller: 'messageCtrl'
      },
      'tab2': {
        templateUrl: 'templates/message.html',
        controller: 'messageCtrl'
      }
    }
  })

  .state('resetPassword', {
    url: '/reset_password',
    templateUrl: 'templates/resetPassword.html',
    controller: 'resetPasswordCtrl'
  })

  .state('sellABook', {
    url: '/sell_book',
    templateUrl: 'templates/sellABook.html',
    controller: 'sellABookCtrl'
  })

  .state('bookshelf', {
    url: '/bookshelf',
    templateUrl: 'templates/bookshelf.html',
    controller: 'bookshelfCtrl'
  })

  .state('messages', {
    url: '/messages',
    templateUrl: 'templates/messages.html',
    controller: 'messagesCtrl'
  })

$urlRouterProvider.otherwise('/tabs/profile')

  

});