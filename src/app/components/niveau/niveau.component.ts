import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { Observable } from 'rxjs';
import { Niveau } from 'src/app/class/Niveau';


@Component({
  selector: 'app-niveau',
  templateUrl: './niveau.component.html',
  styleUrls: ['./niveau.component.css']
})
export class NiveauComponent implements OnInit {

  
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
