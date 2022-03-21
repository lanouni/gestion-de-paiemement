import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from 'src/app/class/Etudiant';
import { JarwisService } from 'src/app/Services/jarwis.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  etudiant$;

  constructor(private Jarwis: JarwisService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.etudiant$ =  this.Jarwis.GetAllEtudiant();
  }


}
