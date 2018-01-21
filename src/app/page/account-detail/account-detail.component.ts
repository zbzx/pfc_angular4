import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  constructor(private acctService: AccountService) { }

  ngOnInit() {
  }

}
