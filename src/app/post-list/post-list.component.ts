import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
posts=[
  {
    id:1,
    title:"title 1",
    content: "content1"
  },
  {
    id:2,
    title:"title 2",
    content: "content2"
  },
  {
    id:3,
    title:"title 3",
    content: "content3"
  },
  {
    id:4,
    title:"title 4",
    content: "content4"
  },
  {
    id:5,
    title:"title 5",
    content: "content5"
  }
]
}
