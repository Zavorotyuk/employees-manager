import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  @Input() dataSet : object[];
  @Input() groupBy : string;

 private width: number;
 private height: number;
 private radius: number;

 private arc: any;
 private pie: any;
 private color: any;
 private svg: any;
 private nest: any;


 constructor() {}

 ngOnInit() {
   this.initSvg();
   this.drawChart(this.nest);
 }

 private initSvg() {

   this.svg = d3.select('svg');


   this.width = +this.svg.attr('width');
   this.height = +this.svg.attr('height');
   this.radius = Math.min(this.width, this.height) / 2;

   this.color = d3.schemeCategory20c;

   this.arc = d3.arc()
                     .outerRadius(this.radius - 10)
                     .innerRadius(this.radius - 70);

   this.nest = d3.nest()
                    .key(d => d[this.groupBy])
                    .entries(this.dataSet);

    this.pie = d3.pie()
                      .sort(null)
                      .value((d: any) => d.values.length );

   this.svg = d3.select('svg')
                .append('g')
                .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')');
 }


 private drawChart(data) {
   const g = this.svg.selectAll('.arc')
                     .data(this.pie(data))
                     .enter().append('g');

  g.append('path').attr('d', this.arc)
                  .style('fill', (d: any, i: any) => this.color[i] );
 }

}
