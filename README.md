# animatedPieChart
simple function that animates google pie charts

to use this function just get your options and data and call the function pieChart(data, options).

Examples:

var data = [['Work',     11],
['Eat',      2],
['Commute',  2],
['Watch TV', 2],
['Sleep',    7]
]

var options = {
  title: 'My Daily Activities',
  pieSliceText: 'percentage',
};


pieChart(data, options)

You can also find this usage in the files data.js and viewer.html
