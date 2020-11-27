import { Component, OnInit } from '@angular/core';
import Member from '../Member'
import {MemberService} from '../member.service'
@Component({
  selector: 'app-member-get',
  templateUrl: './member-get.component.html',
  styleUrls: ['./member-get.component.css']
})
export class MemberGetComponent implements OnInit {
  members: Member[];
  constructor(private ms: MemberService) { }

  ngOnInit(): any {
    this.ms .getMembers() .subscribe((data: Member[]) => { this.members = data; 
    });

  }

}
