import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AudioService } from '../shared/services/audio.service';
import { MatSliderChange } from '@angular/material/slider';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent implements OnInit {
  artworkUrl = 'https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/d8/06/30/d806300b-478d-d788-7b1f-24c1e7cd8670/source/600x600bb.jpg';

  isPlaying = false;

  duration = 0;

  isSeeking = false;
  seekedValue = 0;

  currentTime$ = new BehaviorSubject<number>(0);

  constructor(private audioService: AudioService) {
  }

  ngOnInit(): void {
    this.audioService.setAudio();

    this.audioService.audio.onloadedmetadata = (e) => {
      this.duration = Math.round(this.audioService.audio.duration);
    };

    this.audioService.audio.addEventListener('timeupdate', () => {
      this.currentTime$.next(Math.round(this.audioService.audio.currentTime));
    });

    this.initializeMediaSession();
  }

  initializeMediaSession() {
    if ('mediaSession' in navigator) {
      // @ts-ignore
      navigator.mediaSession.metadata = new MediaMetadata({
        title: 'Unforgettable',
        artist: 'Nat King Cole',
        album: 'The Ultimate Collection (Remastered)',
        artwork: [
          {
            src: 'https://resources.tidal.com/images/25c44470/19b0/406a/88c5/28d3ae26b6d1/1280x1280.jpg',
            sizes: '96x96',
            type: 'image/jpeg'
          },
          {
            src: 'https://resources.tidal.com/images/25c44470/19b0/406a/88c5/28d3ae26b6d1/1280x1280.jpg',
            sizes: '256x256',
            type: 'image/jpeg'
          }
        ]
      });

      // @ts-ignore
      navigator.mediaSession.setActionHandler('play', () => {
        this.audioService.play();
      });

      // @ts-ignore
      navigator.mediaSession.setActionHandler('pause', () => {
        this.audioService.pause();
      });
    }
  }

  async playPause() {
    this.isPlaying = !this.isPlaying;
    if (this.audioService.audio.paused) {
      await this.audioService.audio.play();
    } else {
      this.audioService.audio.pause();
    }
  }

  sliderChange($event: MatSliderChange) {
    this.isSeeking = true;
    this.seekedValue = $event.value!;
  }

  valueChange($event: MatSliderChange) {
    this.currentTime$.next($event.value!);
    this.audioService.audio.currentTime = $event.value!;
    this.isSeeking = false;
    $event.source.blur();
  }

  onValueChange($event: number | null) {
  }
}
