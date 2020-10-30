import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchForm : FormGroup = new FormGroup({
    search : new FormControl()
  });

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  submitSearch(){
    this.router.navigate(['words',this.searchForm.value.search]);
  }
}
