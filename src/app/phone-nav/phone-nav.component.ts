import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-phone-nav',
  standalone: true,
  imports: [MatIconModule, MatMenuModule, MatButtonModule, MatSlideToggle, RouterLink],
  templateUrl: './phone-nav.component.html',
  styleUrl: './phone-nav.component.scss'
})
export class PhoneNavComponent {
  isLightTheme = true;
  changeTheme(){
    if(this.isLightTheme){
      this.isLightTheme = false;
      document.documentElement.style.setProperty('--lmain-color', '#5C5470')
      document.documentElement.style.setProperty('--lsecond-color', '#352F44')
      document.documentElement.style.setProperty('--lthird-color', '#5C5470')
      document.documentElement.style.setProperty('--lforth-color', '#B9B4C7')
      document.documentElement.style.setProperty('--text-color', 'white');
      document.documentElement.style.setProperty('--title-color', 'white');
      document.documentElement.style.setProperty('--invert', '1');
    }
    else{
      this.isLightTheme = true;
      document.documentElement.style.setProperty('--lmain-color', '#ECF9FF')
      document.documentElement.style.setProperty('--lsecond-color', '#FFFBEB')
      document.documentElement.style.setProperty('--lthird-color', '#FFE7CC')
      document.documentElement.style.setProperty('--lforth-color', '#F8CBA6')
      document.documentElement.style.setProperty('--text-color', 'black');
      document.documentElement.style.setProperty('--title-color', '#443D25');
      document.documentElement.style.setProperty('--invert', '0');
    }
  }
}
