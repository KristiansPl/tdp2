import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbar, MatIcon, MatButton, MatSlideToggle, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

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

  constructor() {
  }
  ngOnInit(): void {
          /* var p1x = parseFloat((document.getElementById("au") as Element).getAttribute("cx") as string);
    			var p1y = parseFloat((document.getElementById("au") as Element).getAttribute("cy") as string);
    			var p2x = parseFloat((document.getElementById("sl") as Element).getAttribute("cx") as string);
    			var p2y = parseFloat((document.getElementById("sl") as Element).getAttribute("cy") as string);
    
    			// mid-point of line:
    			var mpx = (p2x + p1x) * 0.5;
    			var mpy = (p2y + p1y) * 0.5;
    
    			// angle of perpendicular to line:
    			var theta = Math.atan2(p2y - p1y, p2x - p1x) - Math.PI / 2;
    
    			// distance of control point from mid-point of line:
    			var offset = 30;
    
    			// location of control point:
    			var c1x = mpx + offset * Math.cos(theta);
    			var c1y = mpy + offset * Math.sin(theta);
    
    			// show where the control point is:
    			var c1 = document.getElementById("cp") as Element;
    			c1.setAttribute("cx", c1x.toString());
    			c1.setAttribute("cy", c1y.toString());
    
    			// construct the command to draw a quadratic curve
    			var curve = "M" + p1x + " " + p1y + " Q " + c1x + " " + c1y + " " + p2x + " " + p2y;
    			var curveElement = document.getElementById("curve") as Element;
    			curveElement.setAttribute("d", curve); */
  }
}
