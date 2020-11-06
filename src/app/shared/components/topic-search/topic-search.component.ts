import { AfterViewInit, Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Page } from 'src/app/core/models/page.model';
import { IPageable } from 'src/app/core/models/pageable.interface';

@Component({
  selector: 'tn-topic-search',
  templateUrl: './topic-search.component.html',
  styleUrls: ['./topic-search.component.scss']
})
export class TopicSearchComponent implements OnInit  {

  private readonly DEFAULT_PAGE: IPageable 
  public searchResults$: Observable<Page<any>>;

  data = []

  constructor(
    private _renderer: Renderer2,
    private _router: Router,
  ) { }


  ngOnInit(): void {
  }

 
 

}
