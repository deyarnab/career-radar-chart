var w = window.innerWidth - 300, h = window.innerWidth - 300;

var colorscale = d3.scale.category10();

var LegendOptions = ['Principal Developer', 'Architect', 'Development Lead', 'Development Manager', 'Head Of Delivery'];

var d = [
		  [
        {axis: "Stakeholder Management", value: 0.05},
        {axis: "Driving Morale", value: 0.1},
        {axis: "Supporting Crew", value: 0.15},
        {axis: "Organisation Thinking", value: 0.05},
        {axis: "Systems Thinking", value: 0.1},
        {axis: "Implementation Thinking", value: 0.2},
        {axis: "Experimenting with Technology", value: 0.15},
        {axis: "Developing Supporting Software", value: 0.15},
        {axis: "Developing Software", value: 0.05}
		  ],[
        {axis: "Stakeholder Management", value: 0.2},
        {axis: "Driving Morale", value: 0.05},
        {axis: "Supporting Crew", value: 0.05},
        {axis: "Organisation Thinking", value: 0.1},
        {axis: "Systems Thinking", value: 0.4},
        {axis: "Implementation Thinking", value: 0.1},
        {axis: "Experimenting with Technology", value: 0.1},
        {axis: "Developing Software", value: 0.0},
        {axis: "Developing Supporting Software", value: 0.0}
		  ],[
        {axis: "Stakeholder Management", value: 0.15},
        {axis: "Driving Morale", value: 0.25},
        {axis: "Supporting Crew", value: 0.4},
        {axis: "Organisation Thinking", value: 0.15},
        {axis: "Systems Thinking", value: 0.025},
        {axis: "Implementation Thinking", value: 0.025},
        {axis: "Experimenting with Technology", value: 0.0},
        {axis: "Developing Supporting Software", value: 0.0},
        {axis: "Developing Software", value: 0.0}
      ],[
        {axis: "Stakeholder Management", value: 0.1},
        {axis: "Driving Morale", value: 0.3},
        {axis: "Supporting Crew", value: 0.2},
        {axis: "Organisation Thinking", value: 0.3},
        {axis: "Systems Thinking", value: 0.05},
        {axis: "Implementation Thinking", value: 0.05},
        {axis: "Experimenting with Technology", value: 0.0},
        {axis: "Developing Supporting Software", value: 0.0},
        {axis: "Developing Software", value: 0.0}
      ],[
        {axis: "Stakeholder Management", value: 0.3},
        {axis: "Driving Morale", value: 0.1},
        {axis: "Supporting Crew", value: 0.0},
        {axis: "Organisation Thinking", value: 0.3},
        {axis: "Systems Thinking", value: 0.3},
        {axis: "Implementation Thinking", value: 0.0},
        {axis: "Experimenting with Technology", value: 0.0},
        {axis: "Developing Supporting Software", value: 0.0},
        {axis: "Developing Software", value: 0.0}
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
	.text("Role Functions");

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
