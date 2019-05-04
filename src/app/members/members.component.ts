import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { Skill } from '../skill';
import { SKILLS } from '../mock-skills';
import { MEMBERS } from '../mock-members';
import * as d3 from "d3";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})

export class MembersComponent implements OnInit {

  members = MEMBERS;
  skills = SKILLS;

  constructor() {
    this.skills.sort((skill1, skill2) => {
      if (skill1.category > skill2.category) {
        return -1;
      }
      if (skill1.category < skill2.category) {
        return 1;
      }
      return 0;
    });
  }

  ngOnInit() {
      let skillIDs = []
      for (let skill of this.skills) {
          skillIDs.push(skill.id)
      }
      var memberIDs = []
      for (let member of this.members) {
          memberIDs.push(member.id)
      }

      let memberSkills = []
      for (let member of MEMBERS) {
          for (let skill of member.skills) {
              memberSkills.push({'member': member.id, 'skill': skill})
          }
      }
      console.log(memberSkills)
      
      let chart = d3.select('.chart')
          .attr("width", 1200)
          .attr("height", 3000)

      let cols = chart.selectAll(".skills")
          .data(SKILLS)
          .enter().append("text")
          .attr("transform", function(d, i) {
              return "translate(" + (i * 50 + 200) + ",150)rotate(-45)"
          })
          .text(function(s) {return s.name})
          .classed("rotate", true);

      let rows = chart.selectAll(".members")
          .data(MEMBERS)
          .enter().append("text")
          .attr("transform", function(d, i) {
              return "translate(30," + (i * 30 + 180) + ")"
          })
          .text(function(m) {return m.name});

      let cells = chart.selectAll(".cells")
          .data(memberSkills)
          .enter().append("g")
          .attr("transform", function(d, i) {
              let memberIndex = memberIDs.indexOf(d.member)
              let skillIndex = skillIDs.indexOf(d.skill)
              return "translate(" + (skillIndex * 50 + 200) +
                  "," + (memberIndex * 30 + 160) + ")";
          })
          .append("circle")
          .attr("r", 10)
  }
}
