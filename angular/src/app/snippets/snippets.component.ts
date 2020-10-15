import { Component, OnInit } from '@angular/core';
import { Snippet } from './snippets';
import { SnippetService } from './snippets.service';

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
  providers: [SnippetService],
  styleUrls: ['./snippets.component.css']
})
export class SnippetsComponent implements OnInit {

  constructor(private snippetService: SnippetService) { }
  lstSnippet: Snippet[] = [];
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.snippetService
      .getSnippets()
      .subscribe((result) => {
        this.lstSnippet = result;
      });
  }
}
