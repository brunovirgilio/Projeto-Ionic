import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peso-ideal',
  templateUrl: './peso-ideal.page.html',
  styleUrls: ['./peso-ideal.page.scss'],
})
export class PesoIdealPage implements OnInit {

  constructor() { }
  Teste(){
    var s: number = parseFloat((<HTMLInputElement>document.getElementById('sexo')).value);
    var a: number = parseFloat((<HTMLInputElement>document.getElementById('altura')).value);
    var r = document.getElementById('resultado');
    var x = 72.7;
    var y = 58;
    var z = 0;
    var b = 62.1;
    var c = 44.7;
    if (s == 1){
      var z = (x*a) - y}
    else{
      var z = (b*a) - c}

    r.innerHTML = String(z)

    console.log(z);
  }



  ngOnInit() {
  }

}
