import { Component, OnInit } from '@angular/core';
//import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {MemberService} from '../member.service';
@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
export class MemberAddComponent implements OnInit {

  constructor(private router: Router,private ms: MemberService) { 

  }

  ngOnInit(): void {
  }

  addMember(MemberName,MemberBio,MemberAge){
    this.ms.addMember(MemberName,MemberBio,MemberAge);
    this.router.navigate(['members']);
  }
}
