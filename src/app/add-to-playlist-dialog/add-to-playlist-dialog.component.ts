import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-add-to-playlist-dialog',
  templateUrl: './add-to-playlist-dialog.component.html',
  styleUrls: ['./add-to-playlist-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddToPlaylistDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
