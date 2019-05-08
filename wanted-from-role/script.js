var w = window.innerWidth - 300, h = window.innerWidth - 300;

var colorscale = d3.scale.category10();

var LegendOptions = ['Arnab Dey'];

var d = [
		  [
              {axis: "Code Sanity Checks", value: 0.0},
              {axis: "Pairing", value: 0.1},
              {axis: "Manual Testing", value: 0.05},
              {axis: "Test Automation", value: 0.2},
              {axis: "Performance Testing", value: 0.2},
              {axis: "Analysis", value: 0.25},
              {axis: "Meetings", value: 0.1},
              {axis: "Stakeholder Management", value: 0.1}
		  ]
		];

var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 6,
  ExtraWidthX: 300
}

RadarChart.draw("#chart", d, mycfg);

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)')
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Desired Role Functions");

var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)')
	;
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i) { return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i) { return colorscale(i);})
	  ;
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i) { return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;
