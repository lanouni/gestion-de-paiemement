import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { Observable } from 'rxjs';
import { Niveau } from 'src/app/class/Niveau';

@Component({
  selector: 'app-niveau-detais',
  templateUrl: './niveau-detais.component.html',
  styleUrls: ['./niveau-detais.component.css']
})
export class NiveauDetaisComponent implements OnInit {

  niveaux: Observable<Niveau>;

  constructor(private Jarwis: JarwisService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.niveaux =  this.Jarwis.GetAllNiveau();
    console.log(this.niveaux);
  }
}
