'use strict';

angular.module('inspinia')
  .controller('MainController', function (TimrrAPI) {

    var vm = this;

    vm.userName = 'Swiggity Swooty';
    vm.helloText = 'Timrr - Your handsfree time tracking solution';
    vm.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects.';

    TimrrAPI.getDailyStats('2016-09-17').then(function(data) {
        vm.blocks = data.data;
    });

    vm.formatDateLabel = function(date) {
        var weekday = new Array(7);
        weekday[0]=  "Su";
        weekday[1] = "Mo";
        weekday[2] = "Tu";
        weekday[3] = "We";
        weekday[4] = "Th";
        weekday[5] = "Fr";
        weekday[6] = "Sa";

        return weekday[date.getDay()];
    }

    /*
    vm.blocks = [{
	    	from: '2016-09-17T00:00:00.000Z',
	    	to: '2016-09-17T00:49:00.000Z',
	    	type: 'productive',
	    	name: 'Optional'
    	},
    	{
    		from: '2016-09-17T00:55:00.000Z',
	    	to: '2016-09-17T00:59:00.000Z',
	    	type: 'undecided',
	    	name: 'Optional'
    	},
    	{
    		from: '2016-09-17T00:59:00.000Z',
	    	to: '2016-09-17T02:13:00.000Z',
	    	type: 'unproductive',
	    	name: 'Optional'
    	},
    	{
    		from: '2016-09-17T23:05:00.000Z',
	    	to: '2016-09-17T23:59:59.000Z',
	    	type: 'not-working',
	    	name: 'Optional'
    	}
    ];
    */

  });
