"use strict";

/* global Highcharts */

var createBarChart = function createBarChart(container, title, barData, seriesTitle) {

	Highcharts.chart(container, {
		chart: { type: "column" },
		title: { text: title },
		xAxis: { categories: barData.map(function (dataEntry) {
				return dataEntry.name;
			}) },
		yAxis: {

			title: null,
			allowDecimals: false,
			minorTickInterval: 1

		},
		plotOptions: {

			pie: {

				allowPointSelect: true,
				cursor: "pointer",
				dataLabels: {
					enabled: true,
					format: "<b>{point.name}</b>: {point.percentage:.1f} %"

				}

			}

		},
		series: [{
			name: seriesTitle,
			data: barData.map(function (dataEntry) {
				return dataEntry.y;
			})
		}]
	});
};

angular.module("main").component("histogram", {
	bindings: {
		title: "<",
		barData: "<",
		seriesTitle: "<"
	},
	replace: true,
	controller: function controller($scope, $element) {

		var self = this;

		var container = $element.children()[0];

		self.$onInit = function () {

			createBarChart(container, self.title, self.barData, self.seriesTitle);
		};

		self.$onChanges = function () {

			createBarChart(container, self.title, self.barData, self.seriesTitle);
		};
	},

	template: "\n\t\t\t<div class=\"bar-chart-container\">\n\t\t\t\tBar Chart\n\t\t\t</div>\n\t\t"
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mZWF0dXJlcy9oaXN0b2dyYW0vaGlzdG9ncmFtLmNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJjcmVhdGVCYXJDaGFydCIsImNvbnRhaW5lciIsInRpdGxlIiwiYmFyRGF0YSIsInNlcmllc1RpdGxlIiwiSGlnaGNoYXJ0cyIsImNoYXJ0IiwidHlwZSIsInRleHQiLCJ4QXhpcyIsImNhdGVnb3JpZXMiLCJtYXAiLCJkYXRhRW50cnkiLCJuYW1lIiwieUF4aXMiLCJhbGxvd0RlY2ltYWxzIiwibWlub3JUaWNrSW50ZXJ2YWwiLCJwbG90T3B0aW9ucyIsInBpZSIsImFsbG93UG9pbnRTZWxlY3QiLCJjdXJzb3IiLCJkYXRhTGFiZWxzIiwiZW5hYmxlZCIsImZvcm1hdCIsInNlcmllcyIsImRhdGEiLCJ5IiwiYW5ndWxhciIsIm1vZHVsZSIsImNvbXBvbmVudCIsImJpbmRpbmdzIiwicmVwbGFjZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCIkZWxlbWVudCIsInNlbGYiLCJjaGlsZHJlbiIsIiRvbkluaXQiLCIkb25DaGFuZ2VzIiwidGVtcGxhdGUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBLElBQU1BLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBVUMsU0FBVixFQUFxQkMsS0FBckIsRUFBNEJDLE9BQTVCLEVBQXFDQyxXQUFyQyxFQUFrRDs7QUFFeEVDLFlBQVdDLEtBQVgsQ0FBaUJMLFNBQWpCLEVBQTRCO0FBQzNCSyxTQUFPLEVBQUNDLE1BQU0sUUFBUCxFQURvQjtBQUUzQkwsU0FBTyxFQUFDTSxNQUFNTixLQUFQLEVBRm9CO0FBRzNCTyxTQUFPLEVBQUNDLFlBQVlQLFFBQVFRLEdBQVIsQ0FBWSxVQUFDQyxTQUFEO0FBQUEsV0FBZUEsVUFBVUMsSUFBekI7QUFBQSxJQUFaLENBQWIsRUFIb0I7QUFJM0JDLFNBQU87O0FBRU5aLFVBQU8sSUFGRDtBQUdOYSxrQkFBZSxLQUhUO0FBSU5DLHNCQUFtQjs7QUFKYixHQUpvQjtBQVczQkMsZUFBYTs7QUFFWkMsUUFBSzs7QUFFSkMsc0JBQWtCLElBRmQ7QUFHSkMsWUFBUSxTQUhKO0FBSUpDLGdCQUFZO0FBQ1hDLGNBQVMsSUFERTtBQUVYQyxhQUFROztBQUZHOztBQUpSOztBQUZPLEdBWGM7QUEwQjNCQyxVQUFRLENBQUM7QUFDUlgsU0FBTVQsV0FERTtBQUVScUIsU0FBTXRCLFFBQVFRLEdBQVIsQ0FBWSxVQUFDQyxTQUFEO0FBQUEsV0FBZUEsVUFBVWMsQ0FBekI7QUFBQSxJQUFaO0FBRkUsR0FBRDtBQTFCbUIsRUFBNUI7QUFnQ0EsQ0FsQ0Q7O0FBb0NBQyxRQUFRQyxNQUFSLENBQWUsTUFBZixFQUNFQyxTQURGLENBQ1ksV0FEWixFQUN5QjtBQUN2QkMsV0FBVTtBQUNUNUIsU0FBTyxHQURFO0FBRVRDLFdBQVMsR0FGQTtBQUdUQyxlQUFhO0FBSEosRUFEYTtBQU12QjJCLFVBQVMsSUFOYztBQU92QkMsV0FQdUIsc0JBT1hDLE1BUFcsRUFPSEMsUUFQRyxFQU9POztBQUU3QixNQUFNQyxPQUFPLElBQWI7O0FBRUEsTUFBTWxDLFlBQVlpQyxTQUFTRSxRQUFULEdBQW9CLENBQXBCLENBQWxCOztBQUVBRCxPQUFLRSxPQUFMLEdBQWUsWUFBWTs7QUFFMUJyQyxrQkFBZUMsU0FBZixFQUEwQmtDLEtBQUtqQyxLQUEvQixFQUFzQ2lDLEtBQUtoQyxPQUEzQyxFQUFvRGdDLEtBQUsvQixXQUF6RDtBQUVBLEdBSkQ7O0FBTUErQixPQUFLRyxVQUFMLEdBQWtCLFlBQVk7O0FBRTdCdEMsa0JBQWVDLFNBQWYsRUFBMEJrQyxLQUFLakMsS0FBL0IsRUFBc0NpQyxLQUFLaEMsT0FBM0MsRUFBb0RnQyxLQUFLL0IsV0FBekQ7QUFFQSxHQUpEO0FBTUEsRUF6QnNCOztBQTBCdkJtQztBQTFCdUIsQ0FEekIiLCJmaWxlIjoic3JjL2ZlYXR1cmVzL2hpc3RvZ3JhbS9oaXN0b2dyYW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGdsb2JhbCBIaWdoY2hhcnRzICovXG5cbmNvbnN0IGNyZWF0ZUJhckNoYXJ0ID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgdGl0bGUsIGJhckRhdGEsIHNlcmllc1RpdGxlKSB7XG5cblx0SGlnaGNoYXJ0cy5jaGFydChjb250YWluZXIsIHtcblx0XHRjaGFydDoge3R5cGU6IFwiY29sdW1uXCJ9LFxuXHRcdHRpdGxlOiB7dGV4dDogdGl0bGV9LFxuXHRcdHhBeGlzOiB7Y2F0ZWdvcmllczogYmFyRGF0YS5tYXAoKGRhdGFFbnRyeSkgPT4gZGF0YUVudHJ5Lm5hbWUpfSxcblx0XHR5QXhpczoge1xuXG5cdFx0XHR0aXRsZTogbnVsbCxcblx0XHRcdGFsbG93RGVjaW1hbHM6IGZhbHNlLFxuXHRcdFx0bWlub3JUaWNrSW50ZXJ2YWw6IDFcblxuXHRcdH0sXG5cdFx0cGxvdE9wdGlvbnM6IHtcblxuXHRcdFx0cGllOiB7XG5cblx0XHRcdFx0YWxsb3dQb2ludFNlbGVjdDogdHJ1ZSxcblx0XHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIixcblx0XHRcdFx0ZGF0YUxhYmVsczoge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRydWUsXG5cdFx0XHRcdFx0Zm9ybWF0OiBcIjxiPntwb2ludC5uYW1lfTwvYj46IHtwb2ludC5wZXJjZW50YWdlOi4xZn0gJVwiXG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9LFxuXHRcdHNlcmllczogW3tcblx0XHRcdG5hbWU6IHNlcmllc1RpdGxlLFxuXHRcdFx0ZGF0YTogYmFyRGF0YS5tYXAoKGRhdGFFbnRyeSkgPT4gZGF0YUVudHJ5LnkpXG5cdFx0fV1cblx0fSk7XG5cbn07XG5cbmFuZ3VsYXIubW9kdWxlKFwibWFpblwiKVxuXHQuY29tcG9uZW50KFwiaGlzdG9ncmFtXCIsIHtcblx0XHRiaW5kaW5nczoge1xuXHRcdFx0dGl0bGU6IFwiPFwiLFxuXHRcdFx0YmFyRGF0YTogXCI8XCIsXG5cdFx0XHRzZXJpZXNUaXRsZTogXCI8XCJcblx0XHR9LFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0Y29udHJvbGxlciAoJHNjb3BlLCAkZWxlbWVudCkge1xuXG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblxuXHRcdFx0Y29uc3QgY29udGFpbmVyID0gJGVsZW1lbnQuY2hpbGRyZW4oKVswXTtcblxuXHRcdFx0c2VsZi4kb25Jbml0ID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdGNyZWF0ZUJhckNoYXJ0KGNvbnRhaW5lciwgc2VsZi50aXRsZSwgc2VsZi5iYXJEYXRhLCBzZWxmLnNlcmllc1RpdGxlKTtcblxuXHRcdFx0fTtcblxuXHRcdFx0c2VsZi4kb25DaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdGNyZWF0ZUJhckNoYXJ0KGNvbnRhaW5lciwgc2VsZi50aXRsZSwgc2VsZi5iYXJEYXRhLCBzZWxmLnNlcmllc1RpdGxlKTtcblxuXHRcdFx0fTtcblxuXHRcdH0sXG5cdFx0dGVtcGxhdGU6IGBcblx0XHRcdDxkaXYgY2xhc3M9XCJiYXItY2hhcnQtY29udGFpbmVyXCI+XG5cdFx0XHRcdEJhciBDaGFydFxuXHRcdFx0PC9kaXY+XG5cdFx0YFxuXHR9KTtcbiJdfQ==
