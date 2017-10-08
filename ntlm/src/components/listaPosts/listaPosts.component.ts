import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './listaPosts.component.html',
  styleUrls: ['./ListaPosts.component.css']
})

export class ListaPostsComponent {
  posts: Post[];

  constructor() {
    const newUser = {
      'name': 'Pedro',
      'location': 'Villa'
    }as User;

    this.posts = [{
      'desde': 'un lugar',
      'hacia': 'otro lugar',
      'fecha': '2017-01-20T00:00:00',
      'postedBy': newUser
    },
    {
        'desde': 'un lugar',
        'hacia': 'otro lugar',
        'fecha': '2017-01-21T00:00:00',
        'postedBy': newUser
      }];
  }
}

export interface Post {
  desde: string;
  hacia: string;
  fecha: string;
  postedBy: User;
}
export interface User {
  name: string;
  location: string;
}

