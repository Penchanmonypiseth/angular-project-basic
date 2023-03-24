import { Component } from '@angular/core';

@Component({
  selector: 'app-most-likes-product',
  templateUrl: './most-likes-product.component.html',
  styleUrls: ['./most-likes-product.component.css'],
})
export class MostLikesProductComponent {
  videos = [
    {
      title: 'my video 1',
      share: 134,
      like: 423,
      thumbnail:
        'https://i.pinimg.com/236x/c9/87/9a/c9879a5b7e363b772642d663f02b4a63.jpg',
    },
    {
      title: 'my video 2',
      share: 14,
      like: 343,
      thumbnail:
        'https://i.pinimg.com/236x/97/40/0b/97400b2e5ca10e4b3712e1f90d52fa0f.jpg',
    },
    {
      title: 'my video 3',
      share: 232,
      like: 664,
      thumbnail:
        'https://i.pinimg.com/236x/55/73/ce/5573ceb5ff9e34790e99fe44e13214cb.jpg',
    },
  ];

  mostLikeVideo = this.getVideoMostLike();
  getVideoMostLike() {
    let videoCopy = [...this.videos];
    return videoCopy.sort((curr, next) => next.like - curr.like)[0];
  }
}
