import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopbarComponent implements OnInit {
  avatarUrl: string = 'https://i.pinimg.com/236x/ce/72/d5/ce72d55448256aef9d86ea940f56e115.jpg';

  tabs = [
    {
      label: 'Ana sayfa',
      link: '/'
    },
    {
      label: 'Kitaplık',
      link: '/collection'
    },
    {
      label: 'Ara',
      link: '/search'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
