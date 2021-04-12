import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Centipede Game";
  title1 = "Decomposition number 100";
  title2 = "Sum Number"
  animate(): void {}
  @ViewChild('100c') inputName100c;
  @ViewChild('100d') inputName100d;
  @ViewChild('100u') inputName100u; // accessing the reference element
  handleClear(){
      // clearing the value
    this.inputName100c.nativeElement.value = ' ';
    this.inputName100d.nativeElement.value = ' ';
    this.inputName100u.nativeElement.value = ' ';
  }
  @ViewChild('audioOption') audioPlayerRef: ElementRef;

  onAudioPlay(){
  this.audioPlayerRef.nativeElement.play();
  }
 
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
