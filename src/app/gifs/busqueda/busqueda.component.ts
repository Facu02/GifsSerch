import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})

export class BusquedaComponent {

  @ViewChild('txtInput') txtInput!: ElementRef<HTMLInputElement>;
  buscar() {
    const valor = this.txtInput.nativeElement.value;

    console.log(valor);

    this.txtInput.nativeElement.value = '';
  }
}
