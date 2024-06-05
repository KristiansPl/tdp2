import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() subtitle = "Loading...";
  @Input() name = "Loading...";
  @Input() description = "Loading...";

  ngOnInit(): void {
    if(this.name == "Mamma"){

    }
  }

}
