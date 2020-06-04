import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-m-nav-bar',
  templateUrl: './m-nav-bar.component.html',
  styleUrls: ['./m-nav-bar.component.css']
})
export class MNavBarComponent implements OnInit {

  menuItem = [
    {opcao: "Home"},
    {opcao: "Nosso Trabalho"},
    {opcao: "Sobre"},
    {opcao: "Contato"},
  ];

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.querySelector(".hamburger").addEventListener("click", () => {
      let navLinks = this.el.nativeElement.querySelector(".nav-links");
      let links =this.el.nativeElement.querySelector(".nav-links li");
      navLinks.classList.toggle("open");      
    }); 
  }

}
