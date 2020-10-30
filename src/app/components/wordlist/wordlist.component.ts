import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-wordlist',
  templateUrl: './wordlist.component.html',
  styleUrls: ['./wordlist.component.scss']
})
export class WordlistComponent implements OnInit {

  private search : String;

  constructor(private route : ActivatedRoute, private wordService : WordService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.search = params['search'];

      this.wordService.getAllWords().subscribe(words => {
        console.log(words);
      });
    });
  }

}
