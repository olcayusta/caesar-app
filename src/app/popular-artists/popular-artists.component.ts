import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-popular-artists',
  templateUrl: './popular-artists.component.html',
  styleUrls: ['./popular-artists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopularArtistsComponent implements OnInit {
  artists = [
    {
      name: 'Normani',
      img: 'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/ef/0f/ff/ef0fff73-4a72-507c-a2eb-f2c7d72758fd/pr_source.png/257x257cc.webp'
    },
    {
      name: 'Sam Smith',
      img: 'https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/02/ec/b3/02ecb3c1-8c1c-7100-c430-a251066460a2/pr_source.png/257x257cc.webp'
    },
    {
      name: 'Khalid',
      img: 'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/8f/07/50/8f075064-ff05-9f26-86dc-222ddc4bdc3d/pr_source.png/257x257cc.webp'
    },
    {
      name: 'Ariana Grande',
      img: 'https://is3-ssl.mzstatic.com/image/thumb/Features115/v4/b0/c1/95/b0c19533-8c69-6911-dba4-2770331a56e8/pr_source.png/257x257cc.webp'
    },
    {
      name: 'Nicki Minaj',
      img: 'https://is5-ssl.mzstatic.com/image/thumb/Features125/v4/29/d6/05/29d60521-ecc5-6859-9769-3754032a7fc0/pr_source.png/257x257cc.webp'
    },
    {
      name: 'Calvin Harris',
      img: 'https://is3-ssl.mzstatic.com/image/thumb/Features115/v4/43/55/54/43555480-b199-c319-3f47-0d6eadb2d60d/pr_source.png/257x257cc.webp'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
