import { inputNames } from "@angular/cdk/schematics";
import { Input } from "@angular/compiler/src/core";
import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";

export interface PeriodicElement {
  total: string;
  soma: string;
  Cor: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {soma:  '90 + 10', total: '100', Cor: 'Cor-de-Rosa'},
  {soma: '80 + 20', total: '90', Cor: 'Lilás'},
  {soma: '60 + 20', total: '80', Cor: 'Laranja'},
  {soma: '50 + 20', total: '70', Cor: 'Azul'},
  {soma: '40 + 20', total: '60', Cor: 'Amarelo'},
  {soma: '30 + 20', total: '50', Cor: 'Verde'},
  {soma: '20 + 20 ', total: '40', Cor: 'Vermelho'},
  {soma: '20 + 10 ', total: '30', Cor: 'Preto'},
  {soma: '10 + 10 ', total: '20', Cor: 'Roxo'},
  {soma: '5 + 5 ',total: '10', Cor: 'Cinzento'},
];


export interface PeriodicElement1 {
  soma1: string;
  soma: string;
  soma2: string;
  resultado: String;
  cor: string;
}
const ELEMENT_DATA1: PeriodicElement1[] = [
  {soma:  '25 + 25', soma1: '30 + 20 ', soma2: '40 + 10 ', resultado : '50', cor:'Verde'},
  {soma:  '30 + 30', soma1: '10 + 50 ', soma2: '10 + 50 ', resultado : '60', cor:'Amarelo'},
  {soma:  '50 + 20', soma1: '10 + 20 + 40', soma2: '30 + 30 + 10 ', resultado : '70', cor:'Azul'},
  {soma:  '50 + 50', soma1: '90 + 10 ', soma2: '70 + 10 + 20', resultado : '100', cor:'Cor-de-Rosa'},
  {soma:  '70 + 10', soma1: '60 + 20', soma2: '50 + 20 + 10  ', resultado : '80', cor:'Laranja'},
  {soma:  '50 + 20 + 20', soma1: '60 + 30', soma2: '70 + 20', resultado : '90', cor:'Lilás'},
  {soma:  '5 + 15 ', soma1: '10 + 10', soma2: '5 + 10 + 5 ', resultado : '20', cor:'Roxo'},
  {soma:  '5 + 15  + 10 ', soma1: '20 + 10', soma2: ' 15 + 10 + 5 ', resultado : '30', cor:'Preto'},
  {soma:  '5 + 15  + 20 ', soma1: '20 + 20', soma2: ' 25 + 10 + 5 ', resultado : '40', cor:'Vermelho'},
  {soma:  '5 + 5', soma1: ' 7 + 3 ', soma2: '6 + 4', resultado : '10', cor:'Cinzento'},
];

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})



export class AppComponent {
  title = "Jogo da Centopeia";
  title1 = "Decomposição Número 100";
  title2 = "Contagem Valor 100"
  title3 = "Contagem de Valores"
  title4 = "Tabela de Cores"
  title5 = "Tabela de Valores"
  title6 = 'Prenchimento da Centopeia'

  displayedColumns: string[] = ['soma', 'total', 'Cor'];
  dataSource = ELEMENT_DATA;


  displayedColumns1: string[] = ['soma', 'soma1', 'soma2','resultado','cor'];
  dataSource1 = ELEMENT_DATA1;


  animate(): void {}
 sumNumber1 = null;
  sumNumber2 = null;
  sumNumber3 = null;
  sumNumber4 = null;
  sumNumber5 = null;
  sumNumber6 = null;
  sumNumber7 = null;
  sumNumber8 = null;
  sumNumber9 = null;
  sumNumber10 = null;
  sumNumber11 = null;
  sumNumber12 = null;
  sumNumber13 = null;
  sumNumber14 = null;
  decNumbC1 = null;
  decNumbD1 = null;
  decNumbU1 = null;
  decNumbD2 = null;
  decNumbU2 = null;
  decNumbD3 = null;
  decNumbU3 = null;
  decNumbD4 = null;
  decNumbU4 = null;
  decNumbD5 = null;
  decNumbU5 = null;
  decNumbD6 = null;
  decNumbU6 = null;
  decNumbD7 = null;
  decNumbU7 = null;
  decNumbD8 = null;
  decNumbU8 = null;
  decNumbD9 = null;
  decNumbU9 = null;
  decNumbD10 = null;
  decNumbU10 = null;
  decNumbD11 = null;
  decNumbU11 = null;
  
  @ViewChild('100c') inputName100c;
  @ViewChild('100d') inputName100d;
  @ViewChild('100u') inputName100u; 
  @ViewChild('99d') inputName99d;
  @ViewChild('99u') inputName99u;
  @ViewChild('98d') inputName98d;
  @ViewChild('98u') inputName98u;
  @ViewChild('97d') inputName97d;
  @ViewChild('97u') inputName97u;
  @ViewChild('96d') inputName96d;
  @ViewChild('96u') inputName96u;
  @ViewChild('95d') inputName95d;
  @ViewChild('95u') inputName95u;
  @ViewChild('94d') inputName94d;
  @ViewChild('94u') inputName94u;
  @ViewChild('93d') inputName93d;
  @ViewChild('93u') inputName93u;
  @ViewChild('92d') inputName92d;
  @ViewChild('92u') inputName92u;
  @ViewChild('91d') inputName91d;
  @ViewChild('91u') inputName91u;
  @ViewChild('90d') inputName90d;
  @ViewChild('90u') inputName90u;

  @ViewChild('sum100') inputNameSum100;
  @ViewChild('sum90') inputNameSum90;
  @ViewChild('sum20') inputNameSum20;
  @ViewChild('sum10') inputNameSum10;
  @ViewChild('sum40') inputNameSum40;
  @ViewChild('sum50') inputNameSum50;
  @ViewChild('sum60') inputNameSum60;
  @ViewChild('sum70') inputNameSum70;
  @ViewChild('sum75') inputNameSum75;
  @ViewChild('sum5') inputNameSum5;
  @ViewChild('sum2') inputNameSum2;
  @ViewChild('sum25') inputNameSum25;
  @ViewChild('sum95') inputNameSum95;
  @ViewChild('sum80') inputNameSum80;

  
  @ViewChild('resultado') inputresultado;

  handleClear(){
      // clearing the value
    this.inputName100c.nativeElement.value = ' ';
    this.inputName100d.nativeElement.value = ' ';
    this.inputName100u.nativeElement.value = ' ';

    this.inputName99d.nativeElement.value = ' ';
    this.inputName99u.nativeElement.value = ' ';

    this.inputName98d.nativeElement.value = ' ';
    this.inputName98u.nativeElement.value = ' ';

    this.inputName97d.nativeElement.value = ' ';
    this.inputName97u.nativeElement.value = ' ';

    this.inputName96d.nativeElement.value = ' ';
    this.inputName96u.nativeElement.value = ' ';

    this.inputName95d.nativeElement.value = ' ';
    this.inputName95u.nativeElement.value = ' ';

    this.inputName94d.nativeElement.value = ' ';
    this.inputName94u.nativeElement.value = ' ';

    this.inputName93d.nativeElement.value = ' ';
    this.inputName93u.nativeElement.value = ' ';

    this.inputName92d.nativeElement.value = ' ';
    this.inputName92u.nativeElement.value = ' ';

    this.inputName91d.nativeElement.value = ' ';
    this.inputName91u.nativeElement.value = ' ';

    this.inputName90d.nativeElement.value = ' ';
    this.inputName90u.nativeElement.value = ' ';

    this.inputNameSum100.nativeElement.value = ' ';
    this.inputNameSum90.nativeElement.value = ' ';
    this.inputNameSum20.nativeElement.value = ' ';
    this.inputNameSum10.nativeElement.value = ' ';
    this.inputNameSum40.nativeElement.value = ' ';
    this.inputNameSum50.nativeElement.value = ' ';
    this.inputNameSum60.nativeElement.value = ' ';
    this.inputNameSum70.nativeElement.value = ' ';
    this.inputNameSum75.nativeElement.value = ' ';
    this.inputNameSum5.nativeElement.value = ' ';
    this.inputNameSum2.nativeElement.value = ' ';
    this.inputNameSum25.nativeElement.value = ' ';
    this.inputNameSum95.nativeElement.value = ' ';
    this.inputNameSum80.nativeElement.value = ' ';

  }
  @ViewChild('audioOption') audioPlayerRef: ElementRef;

  onAudioPlay(){
  this.audioPlayerRef.nativeElement.play();
  }
 getValue(target: EventTarget): string {
    return (target as HTMLInputElement).value;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
