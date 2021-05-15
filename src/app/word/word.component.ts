import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, map, catchError } from 'rxjs/operators';
import { WordService } from '../word.service';
import { WordInfo } from '../word-info';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {

  constructor(
    private wordService: WordService,
    private route: ActivatedRoute
  ) { }

  public wordInfo: WordInfo = {
    data: {
      usable: undefined,
      unusable: undefined
    },
    status: "NotLoadedYet"
  };

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {

        this.wordInfo = {
          data: {
            usable: undefined,
            unusable: undefined
          },
          status: "NotLoadedYet"
        };

        this.wordService.getWordInfo(params.word).subscribe(
          (res) => {
            this.wordInfo = res;
            console.log(res);
          },
          (err) => {
            this.wordInfo.status = 'error';
            console.log(this.wordInfo.status);
          }
        )
      }
    )
  }

  wordStatus(wordInfo: WordInfo): number {
    switch (wordInfo.status) {
      case 'error':
        return -1;
      default:  //NotLoadedYet
        return 0;
      case 'NotUsableWord':
        return 1;
      case 'AddedWord':
        return 2;
      case 'FoundWord':
        return 3;
    }
  }


}
