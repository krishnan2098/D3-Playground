var dataset = [1,2,3,4,5];

//Data Loading and Binding
d3.select('body')
    .selectAll('p')
    .data(dataset) //holds the dataset at waiting area
    .enter() //passes data in array one by one
    .append('p') //appends p element to each data element
        //.text('D3 is awesome'); //binds the sentence to every data element
        .text((d) => d); //ES6 function return the individual dataset d