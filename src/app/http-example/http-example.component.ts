import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './service/post.service';
import { Post } from './class/post';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-http-example',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './http-example.component.html',
  styleUrl: './http-example.component.scss',
  providers: [PostService],
})
export class HttpExampleComponent {
  //Приклад3
  posts = new Array<Post>();
  errorMessage: any;
  private results!: Observable<Post[]>;
  // створюємо сервіс
  constructor(private service: PostService) {}
  ngOnInit() {
    this.posts = [];
    this.service.getPosts().subscribe((response: Post[]) => {
      let data: any = response;
      console.log(data);
      this.posts = data.record;
      console.log(this.posts);
    });
    console.log('HELLO!!!' + this.posts);
    console.log(this.posts);
  }
}
