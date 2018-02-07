"use strict";

function createPieChart(container, title, pieData, seriesTitle) {
	Highcharts.chart(container, {
		chart: {
			type: 'pie'
		},
		title: {
			text: title
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>: {point.percentage:.1f} %'
				}
			}
		},
		series: [{
			name: seriesTitle,
			data: pieData
		}]
	});
}

angular.module("main")
	.component("pieChart", {
		bindings: {
			title: "<",
			pieData: "<",
			seriesTitle: "<"
		},
		replace: true,
		controller: function ($scope, $element) {
			let self = this;

			let container = $element.children()[0];

			self.$onInit = function () {
				createPieChart(container, self.title, self.pieData, self.seriesTitle);
			};

			self.$onChanges = function () {
				createPieChart(container, self.title, self.pieData, self.seriesTitle);
			}
		},
		template: `
			<div class="pie-chart-container">
				Pie Chart
			</div>
		`
	});