import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salario',
  templateUrl: './salario.page.html',
  styleUrls: ['./salario.page.scss'],
})
export class SalarioPage implements OnInit {

  constructor() { }
  Enviar(){
    var r: number = parseFloat((<HTMLInputElement>document.getElementById('remuneracao')).value);
    var h: number = parseFloat((<HTMLInputElement>document.getElementById('horas')).value);
    var br = 0
    var sl = 0
    var dtotal = 0
    var rb = document.getElementById('resp-bruto');
    var rinss = document.getElementById('resp-inss');
    var rsind = document.getElementById('resp-sindicato');
    var rsl = document.getElementById('resp-liquido');
    var ir = 0.11
    var inss = 0.08
    var sind = 0.05
    var br = r * h

    var dir = ir * br
    var dinss = inss * br
    var dsind = sind * br
    var dtotal = dir + dinss + dsind
    var sl = br - dtotal

    rb.innerHTML = String(br)
    rinss.innerHTML = String(dinss)
    rsind.innerHTML = String(dsind)
    rsl.innerHTML = String(sl)

    console.log(br,dinss,dsind,sl);
  }

  ngOnInit() {
  }

}
