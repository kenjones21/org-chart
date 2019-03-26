import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
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

  constructor() { }

  ngOnInit() {
  }

}
