import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent implements OnInit {
constructor(private route:ActivatedRoute){

}
ngOnInit(): void {
    this.route.paramMap.subscribe(value=>{

      let id = value.get('id');
    })
}
}
