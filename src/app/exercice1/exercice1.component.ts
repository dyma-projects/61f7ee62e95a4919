import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  public monText = "Emmanuel Simon";
  public isMaClass = true;

  constructor() { }

  public clickMonText(monText : string) : void {
    this.monText = "Je viens de clicker sur mon texte";
    this.isMaClass = !this.isMaClass;
  }

  ngOnInit(): void {
  }

}
