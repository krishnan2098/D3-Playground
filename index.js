var dataset = [1,2,3,4,5];

d3.select('h1').style('color', 'red')
    .attr('class','heading')
    .text('Heading!');

d3.select('body')
    .append('p')
        .text('First Para')
    .append('p')
        .text('Second Para')
    .append('p')
        .text('Third Para');