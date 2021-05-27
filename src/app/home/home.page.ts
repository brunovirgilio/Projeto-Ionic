import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public produtos;

  constructor() {
    this.produtos= [
      {nome:'Arroz', preco:100},
      {nome:'Feijão', preco:200},
      {nome:'Macarrão', preco:150},
      {nome:'Cuscuz', preco:80},
      {nome:'Leite', preco:10},
      {nome:'Batata Doce', preco:15},
      {nome:'Maça', preco:20},
      {nome:'File de Camarão', preco:300},
      {nome:'Pera', preco:500},
      {nome:'Suco de Caixinha', preco:1000}
    ]

   }

  ngOnInit() {
  }

}
