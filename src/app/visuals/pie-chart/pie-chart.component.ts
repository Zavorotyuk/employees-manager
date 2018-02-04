import { Component, OnInit, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})

export class PieChartComponent implements OnInit {

  @Input() dataSet : object[];

  constructor() {}

  ngOnInit() {
    this.drawGroupedBy('skill');
    this.drawGroupedBy('level');
    this.drawGroupedBy('age');
  }


  drawGroupedBy(groupBy) {
    let svg = d3.select(`#${groupBy}`);

    let width = +svg.attr('width');
    let height = +svg.attr('height');
    let radius = Math.min(width, height) / 2;

    let color = d3.schemeCategory20c;

    const arc: any = d3.arc()
            .outerRadius(radius - 10)
            .innerRadius(radius - 70);

    const nest: any = d3.nest()
                .key(d => {
                  if(groupBy !== 'age') return d[groupBy];
                  return this.getAgeGroup(d['age']);
                })
                .entries(this.dataSet);

    let pie = d3.pie()
                .sort(null)
                .value((d: any) => d.values.length );

    svg = d3.select(`#${groupBy}`)
                .append('g')
                .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    const g = svg.selectAll('.arc')
                      .data(pie(nest))
                      .enter().append('g');

    g.append('path').attr('d', arc)
                     .style('fill', (d: any, i: any) => color[i] )

    g.append("text").attr("transform", d => {
                      const _d = arc.centroid(d);
                      return "translate(" + _d + ")";
                      })
                      .attr("dy", ".50em")
                      .style("text-anchor", "middle")
                      .text(d => d.data['key']);


  }

  getAgeGroup(age) {
    let ageGroup = null;
    if (age >= 18 && age <= 25 ) {
      ageGroup = '18-25';
    } else if (age > 25 && age <= 32) {
      ageGroup = '26-32';
    } else if (age > 32 && age <= 100) {
      ageGroup = '33-100';
    }
    return ageGroup;
  }

}
