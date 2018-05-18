//Creating labels, Scales for the bar chart

//Creating simple bar chart
// var dataset = [ 80, 100, 56, 120, 180, 30, 40, 120, 160];

var dataset = [1,2,3,4,5];// for small data the chart isnt scaled. hence scaling is required.

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = svgWidth/dataset.length;

var svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

var yScale = d3.scaleLinear()
    .domain([0,d3.max(dataset)])
    .range([0,svgHeight]);

var barChart = svg.selectAll('rect') //bar graphs are simply rectangles
    .data(dataset)
    .enter()
    .append('rect')
    .attr('y', function(d) {
        return svgHeight - yScale(d);
    })
    .attr('height', function(d) {
        return yScale(d);
    })
    .attr('width', barWidth - barPadding)
    .attr('transform', function(d, i){
        var translate = [barWidth * i, 0];
        return 'translate(' + translate + ')';
    });

var labelText = svg.selectAll('text') //bar graphs are simply rectangles
    .data(dataset)
    .enter()
    .append('text')
    .text(function(d){
        return d;
    })
    .attr('y', function(d) {
        return svgHeight - yScale(d) + 15;
    })
    .attr('x', function(d, i){
        return barWidth * i;
    })
    .attr('fill', 'red');

d3.select('h1').style('color', 'red')
    .attr('class','heading')
    .text('Labels for Bar Chart using D3.js');
