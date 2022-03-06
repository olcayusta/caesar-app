import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  audio: HTMLAudioElement;

  /**
   * Audio duration in seconds
   */
  duration!: number;

  /**
   * Audio current time in seconds
   */
  currentTime$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private zone: NgZone) {
    this.audio = new Audio();
  }

  setAudio(src: string = '//192.168.1.4:4200/assets/scorpions_wind_of_change.flac') {
    this.audio.src = src;
  }

  async play() {
    await this.audio.play();

    this.audio.ontimeupdate = () => {
      this.currentTime$.next(Math.round(this.audio.currentTime));
    };
  }

  pause() {
    this.audio.pause();
  }

  setCurrentTime(time: number) {
    this.audio.currentTime = time;
  }

  /*getCurrentTime() {
    return Math.round(this.audio.currentTime);
  }*/
}
