$(function () {
  'use strict'

  var ticksStyle = {
    fontColor: '#495057',
    fontStyle: 'bold'
  }

  var mode      = 'index'
  var intersect = true

	var $transactionChart = $('#transaction-chart')
	var transactionChart	= new Chart($transactionChart, {
		data	 : {
			labels	: ['18th', '20th', '22nd', '24th', '26th', '28th', '30th'],
			datasets: [{
				type				: 'line',
				data				: [100, 120, 170, 167, 180, 177, 160],
				backgroundColor		: 'transparent',
				borderColor			: '#007bff',
				pointBorderColor	: '#007bff',
				pointBackgroundColor: '#007bff',
				fill								: false
				// pointHoverBackgroundColor: '#007bff',
				// pointHoverBorderColor		: '#007bff'
			},
				{
					type				: 'line',
					data				: [60, 80, 70, 67, 80, 77, 100],
					backgroundColor		: 'tansparent',
					borderColor			: '#ced4da',
					pointBorderColor	: '#ced4da',
					pointBackgroundColor: '#ced4da',
					fill								: false
					// pointHoverBackgroundColor: '#ced4da',
					// pointHoverBorderColor		: '#ced4da'
				}]
		},
		options: {
			maintainAspectRatio: false,
			tooltips					 : {
				mode		 : mode,
				intersect: intersect
			},
			hover							: {
				mode		 : mode,
				intersect: intersect
			},
			legend						 : {
				display: false
			},
			scales						 : {
				yAxes: [{
					// display: false,
					gridLines: {
						display			: true,
						lineWidth		: '4px',
						color				: 'rgba(0, 0, 0, .2)',
						zeroLineColor: 'transparent'
					},
					ticks		: $.extend({
						beginAtZero : true,
						suggestedMax: 200
					}, ticksStyle)
				}],
				xAxes: [{
					display	: true,
					gridLines: {
						display: false
					},
					ticks		: ticksStyle
				}]
			}
		}
	});

});