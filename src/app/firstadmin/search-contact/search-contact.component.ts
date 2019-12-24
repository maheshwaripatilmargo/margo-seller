import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {Router} from '@angular/router';


const states = [ 'Deanaa Smith', 'Anne Smith', 'Renee smith', 'Greg smithe', 'Patracia Smithers'];

@Component({
  selector: 'app-search-contact',
  templateUrl: './search-contact.component.html',
  styleUrls: ['./search-contact.component.css']
})


export class SearchContactComponent implements OnInit {

  constructor(private router: Router) { }
  public model: string;
  public selectedProspect: boolean;


  ngOnInit() {
  }
  search = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 2 ? []
      : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  )

  goBack(){
    
  }

  selectContact (event) {
    //this.router.navigateByUrl('/directseller/contactInformation')
  event.preventDefault()
  this.selectedProspect = true
  }
}
