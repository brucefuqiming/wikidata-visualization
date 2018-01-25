import React, { Component } from 'react'
import { getColorScale } from '../utils/scales'
import { getTooltipHTML } from '../utils/convertData'
import * as d3 from 'd3'
import ReactFauxDOM from 'react-faux-dom'
import SVGPanZoom from './SVGPanZoom'

// bubble chart d3 references
// https://bl.ocks.org/mbostock/4063269
// https://jrue.github.io/coding/2014/exercises/basicbubblepackchart/
const getD3Node = (props) => {
  var colorScale = getColorScale(props)
  var tooltipHTML = getTooltipHTML(props)
  
  var bubble = d3.pack()
    .size([props.width, props.height])
    .padding(5)
  
  var d3node = new ReactFauxDOM.Element('svg')

  var svg = d3.select(d3node)
    .attr('width', props.width)
    .attr('height', props.height)
    .attr('class', 'bubble')

  d3.selectAll('.d3ToolTip').remove()
  var tooltip = d3.select('body').append('div').attr('class', 'd3ToolTip')
  
  var data = props.data.filter((item, i) => props.rowSelections.includes(i))
    .map((d, index) => { d.id = index; return d })
  
  //bubbles needs very specific format, convert data to this.
  var nodes = d3.hierarchy({children:data})
    .sum(function(d) { return d[props.header[props.settings['radius']]] })
  
  //setup the chart
  var bubbles = svg.selectAll('.node')
    .data(bubble(nodes).leaves())
    .enter().append('g')
    .attr('class','node')
    .attr('transform', function(d) {return `translate(${d.x},${d.y})`})
  
  //create the bubbles
  bubbles.append('circle')
    .attr('id', function(d){ return 'circle' + d.data['id'] })
    .attr('r', function(d){ return d.r })
    .style('fill', function(d) { return colorScale(d.data[props.header[props.settings['color']]]) })
    .on('mousemove', function(d,i) {
      tooltip
        .style('left', d3.event.pageX + 10 + 'px')
        .style('top', d3.event.pageY + 10 + 'px')
        .style('display', 'inline-block')
        .html(tooltipHTML[i])
    })
    .on('mouseout', function(d) {
      tooltip.style('display', 'none')
    })
  
  bubbles.append('clipPath')
    .attr('id', function(d) { return 'clip-circle' + d.data['id'] })
    .append('circle') // workaround fix for display bug in Safari: use the actual circle instead of 'use' element
    .attr('r', function(d){ return d.r })
    //.append('use')
    //.attr('xlink:href', function(d) { return '#circle' + d.data['id'] })

  //format the text for each bubble
  bubbles.append('text')
    .attr('clip-path', function(d) { return 'url(#clip-circle' + d.data['id'] + ')'})
    .attr('x', 0)
    .attr('y', 0)
    .text(function(d){ return d.data[props.header[props.settings['label']]] })
    .style('font-family', 'sans-serif')
    .style('font-size', props.moreSettings.fontSize)
    .style('text-anchor', 'middle')
    .on('mousemove', function(d,i) {
      tooltip
        .style('left', d3.event.pageX + 10 + 'px')
        .style('top', d3.event.pageY + 10 + 'px')
        .style('display', 'inline-block')
        .html(tooltipHTML[i])
    })
    .on('mouseout', function(d) {
      tooltip.style('display', 'none')
    })

  return d3node.toReact()
} 

class BubbleChart extends Component {

  render() {
    const d3node = getD3Node(this.props)
    return (
      <SVGPanZoom d3node={d3node} width={this.props.width} height={this.props.height} /> 
    )
  }
}

export default BubbleChart