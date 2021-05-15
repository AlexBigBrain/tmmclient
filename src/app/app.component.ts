import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router
  ) { }

  word: string = '';
  title = 'MyWordBOT';
  mobile_menu: boolean = false;
  data = new FormControl('');
  mobileTranslation() {
    return this.mobile_menu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
  }

  assignColumnStart(element: number | undefined) {
    switch (element) {
      default:
        return ""
      case 1:
        return "col-start-1"
      case 2:
        return "col-start-2"
      case 3:
        return "col-start-3"
      case 4:
        return "col-start-4"
      case 5:
        return "col-start-5"
      case 6:
        return "col-start-6"
      case 7:
        return "col-start-7"
      case 8:
        return "col-start-8"
      case 9:
        return "col-start-9"
      case 10:
        return "col-start-10"
      case 11:
        return "col-start-11"
      case 12:
        return "col-start-12"
    }
  }

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
