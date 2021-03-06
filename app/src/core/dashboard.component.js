"use strict";

/* eslint id-length: "off" */

const getJobTitleCountData = function (data) {

	const jobTitlesSet = new Set();
	const jobTitlesCountMap = new Map();

	// Get unique Job Titles in a Set.
	data.map((dataElement) => jobTitlesSet.add(dataElement.jobTitle));

	// Create map of Job Titles to keep count.
	for (const jobTitle of jobTitlesSet) {

		jobTitlesCountMap.set(jobTitle, 0);

	}

	// Count Job Titles in Data.
	data.map((dataElement) => jobTitlesCountMap.set(dataElement.jobTitle, jobTitlesCountMap.get(dataElement.jobTitle) + 1));

	return jobTitlesCountMap;

};

const getGenderCountData = function (data) {

	const genderSet = new Set();
	const genderCountMap = new Map();

	// Get unique Job Titles in a Set.
	data.map((dataElement) => genderSet.add(dataElement.gender));

	// Create map of Job Titles to keep count.
	for (const gender of genderSet) {

		genderCountMap.set(gender, 0);

	}

	// Count Job Titles in Data.
	data.map((dataElement) =>
		genderCountMap.set(dataElement.gender, genderCountMap.get(dataElement.gender) + 1));

	return genderCountMap;

};

const getPieData = function (dataMap) {

	const pieChartData = [];

	for (const dataEntry of dataMap) {

		pieChartData.push({
			name: dataEntry[0],
			y: dataEntry[1]
		});

	}

	return pieChartData;

};

const DashboardController = function DashboardController ($scope, DataService) {

	const self = this;

	self.loading = true;
	self.data = [];

	self.controlBarButtons = [
		{
			label: "Add Employee",
			action () {

				event.stopPropagation();
				console.log("Thank you for hiring me!");

				self.data = [
					{
						name: "Dan Arias",
						jobTitle: "Front-End Developer",
						tenure: "1",
						gender: "Male"
					},
					...self.data
				];

				self.jobTitlePieChartData = getPieData(getJobTitleCountData(self.data));
				self.genderBarChartData = getPieData(getGenderCountData(self.data));

			}

		}
	];

	self.jobTitlePieChartTitle = "Employees by Job Title";
	self.jobTitlePieChartSeriesTitle = "Job Title";
	self.jobTitlePieChartData = [];

	self.genderBarChartTitle = "Employees by Gender";
	self.genderBarChartSeriesTitle = "Gender";
	self.genderBarChartData = [];

	this.$onInit = function () {

		DataService.getData()
			.then(function (data) {

				self.data = data;

				$scope.$apply(function () {

					self.loading = false;

					self.jobTitlePieChartData = getPieData(getJobTitleCountData(self.data));
					self.genderBarChartData = getPieData(getGenderCountData(self.data));

				});

			})
			.catch(function (error) {

				console.error(error);

			});

	};

};

DashboardController.$inject = ["$scope", "DataService"];

angular.module("main")
	.component("dashboard", {
		controller: DashboardController,
		template: `
			<dashboard-header title="'Corporate Employees'"></dashboard-header>
			<div ng-if="!$ctrl.loading">
				<control-bar>
					<control-bar-button 
						ng-repeat="button in $ctrl.controlBarButtons" 
						title="button.label" 
						action="button.action">
					</control-bar-button>
				</control-bar>
				<employee-table employee-data="$ctrl.data"></employee-table>
				<div class="dashboard-charts">
					<div class="chart">
						<pie-chart 
							title="$ctrl.jobTitlePieChartTitle" 
							series-title="$ctrl.jobTitlePieChartSeriesTitle"
							pie-data="$ctrl.jobTitlePieChartData">
						</pie-chart>
					</div>
					<div class="chart">
						<histogram 
							title="$ctrl.genderBarChartTitle"
							series-title="$ctrl.genderBarChartSeriesTitle"
							bar-data="$ctrl.genderBarChartData">
						</histogram>
					</div>
				</div>
			</div>
			
		`
	});
