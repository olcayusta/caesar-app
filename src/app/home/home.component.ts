import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddToPlaylistDialogComponent } from '../add-to-playlist-dialog/add-to-playlist-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  recentAlbums = [
    {
      title: 'Growing Pains',
      artist: 'George Allice',
      img: 'https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/d8/06/30/d806300b-478d-d788-7b1f-24c1e7cd8670/source/600x600bb.jpg'
    },
    {
      title: 'Mid Years',
      artist: 'George Allice',
      img: 'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/45/a9/9c/45a99c61-1984-e3b8-54d3-6ae3134b2da3/source/600x600bb.jpg'
    },
    {
      title: 'Hold On',
      artist: 'George Allice',
      img: 'https://lh3.googleusercontent.com/OOzkoUyex0WgEbhgEiSOBqzcR5eysb2ZND6w1Lw6anoMzKXS12I-wjmH_zNnyL4vcZAEj3aMrtHH7w2y=w544-h544-l90-rj'
    },
    {
      title: 'Unsponsored Content',
      artist: 'salem ilese',
      img: 'https://lh3.googleusercontent.com/PlpiGlSbJA95cnPtm-gDtz87YCEsZpGRhZT2s8uEYlQqstb-77YbPivjj1pEBCoLzmb5Rv0YDPSXv5nrwQ=w544-h544-l90-rj'
    },
    {
      title: 'Nova',
      artist: 'KAPIKO',
      img: 'https://lh3.googleusercontent.com/v564PoOPel4mydtS3qyQ-lVHdSjxE_uU6wDvsLxzdmxi5yca4d_BXz0VuXvK7XxtJBQ4Rb3vad7KaoY=w544-h544-l90-rj'
    },
    {
      title: 'Rock Believer (Deluxe)',
      artist: 'Scorpions',
      img: 'https://lh3.googleusercontent.com/0JMX6cEEzas8DQajavLiuO0NrtAhCatDNABoqakbAgFtli_OrNM512d8f5J5iLb9gZOp1TRTVQl3hu0=w544-h544-l90-rj'
    }
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialog = this.dialog.open(AddToPlaylistDialogComponent, {
      autoFocus: false,
      minWidth: 560
    });
  }
}
