const ctx = document.getElementById('myChart');
/*
data = {
	datasets: [{
		data: [25, 20, 30, 50, 15, 21]
	}],

	// These labels appear in the legend and in the tooltips when hovering different arcs
	labels: [
		'Бензовозы',
		'Погрузок',
		'Разгрузок',

		'что-то ещё',
		'и ещё',
		'и тп'
	]
};
*/
data = {
	datasets: [{
		data: [25, 20, 30]
	}],

	// These labels appear in the legend and in the tooltips when hovering different arcs
	labels: [
		'Бензовозы',
		'Погрузок',
		'Разгрузок',
	]
};

//Chart.defaults.backgroundColor = '#9BD0F5';
//Chart.defaults.borderColor = '#36A2EB';


//Chart.defaults.backgroundColor = '#000';
//Chart.defaults.color = '#fff';
//Chart.defaults.backgroundColor = '#000';
//Chart.defaults.color = '#fff';

Chart.defaults.backgroundColor = '#fff';
//Chart.defaults.borderColor = '#fff';
Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)';


Chart.defaults.color = '#fff';

Chart.defaults.font.size = 14;

new Chart(ctx, {
	type: 'polarArea',
	data: data,
	options: {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
				/*
				labels: {
					font: {
						size: 14
					}
				}
				*/
			},
			title: {
				display: true,
				text: 'Успехи за месяц'
			}
		}
	},
});

















const ctx2 = document.getElementById('myChart2');
//Chart.defaults.backgroundColor = '#9BD0F5';

Chart.defaults.backgroundColor = '#fff';
//Chart.defaults.borderColor = '#fff';
Chart.defaults.color = '#fff';


new Chart(ctx2, {
	type: 'bar',
	data: {
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
		datasets: [{
			label: '# of Votes',
			data: [12, 19, 3, 5, 2, 3],
			borderWidth: 1
		}]
	},
	options: {
		scales: {
			y: {
				beginAtZero: true
			}
		}
	}
});


