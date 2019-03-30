import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { Skill } from '../skill';
import { SKILLS } from '../mock-skills';
import { MEMBERS } from '../mock-members';

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
  }

}
