import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.less'],
  animations: [trigger('animation-phrase', [
    transition('void => *', [
      // 'From' Style
      style({opacity: 0}),
      animate('1000ms linear',
        // 'To' Style
        style({ opacity: 0 })
      ),
      animate('2000ms linear',
        // 'To' Style
        style({ opacity: 1 })
      )
    ])
  ]),
    trigger('animation-photo', [
      transition('void => *', [
        // 'From' Style
        style({opacity: 0}),
        animate('1500ms linear',
          // 'To' Style
          style({ opacity: 0 })
        ),
        animate('2000ms linear',
          // 'To' Style
          style({ opacity: 1 })
        )
      ])
    ])]
})
export class FirstPageComponent implements OnInit {
  down_part__straight = 'down_part__straight';
  animation_name_var = 'zero';
  flag = 0;
  down_part__triangle = 'down_part__triangle';
  src = '../../assets/image/face1.jpg';
  photos = [ 1 , 2 , 3 ];
  constructor() { }
  flagForSign = 0;
  ngOnInit() {
  }
  pressButtonTiangle() {
    const elem = document.getElementById('straight');
    if ( this.flag === 1 ) {
      this.flag = 0 ;
      this.down_part__triangle = 'down_part__triangle';
      document.getElementById('straight').style.animationName = 'down_down_part_animate';
      document.getElementById('block1').style.animationName = 'down_down_part_animate ';
      document.getElementById('block2').style.animationName = 'down_down_part_animate_block ';
    } else {
      this.flag = 1 ;
      this.down_part__triangle = 'down_part__triangle_down';
      document.getElementById('straight').style.animationName = 'up_down_part_animate';
      document.getElementById('block1').style.animationName = 'up_down_part_animate ';
      document.getElementById('block2').style.animationName = 'up_down_part_animate_block ';

    }
  }
  getPhotoSize() {
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;
    if (width >= height) {
     // console.log(width / 6);
      return width / 8  + 'px'; } else {
    //  console.log(height / 5 + 'px');
      return height / 5  + 'px';
    }
  }
  getFontSize_1() {
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;
    if (width >= height) {
      // console.log(width / 6);
      return width / 20  + 'px'; } else {
      //  console.log(height / 5 + 'px');
      return height / 20  + 'px';
    }
  }
  getFontSize_up_menu() {
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;
    if (width >= height) {
      // console.log(width / 6);
      return width / 65  + 'px'; } else {
      //  console.log(height / 5 + 'px');
      return height / 60  + 'px';
    }
  }
  getImage(item) {
    return '../../assets/image/photo' + item + '.png';
  }
}
