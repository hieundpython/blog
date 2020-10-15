import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';

import { Snippet } from './snippets';


@Injectable()
export class SnippetService {
  snippetUrl = 'http://localhost:8000/snippets/';  // URL to web api

  constructor(
    private http: HttpClient) {
  }

  /** GET heroes from the server */
  getSnippets(): Observable<Snippet[]> {
    return this.http.get<Snippet[]>(this.snippetUrl);
  }
}
