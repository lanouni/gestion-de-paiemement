import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { Observable } from 'rxjs';
import { Matiere } from '../../class/Matiere';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent implements OnInit {

  matieres: Observable<Matiere>;
  niveau : string;
  etudiant$;

  constructor(private route:ActivatedRoute,private Jarwis: JarwisService) { 

   this.niveau =  this.route.snapshot.params.niveau;
  }

  ngOnInit(): void {
    this.reloadData();
    this.reloadDataEtudiant();
  }
  reloadData(){
    console.log(this.niveau);
    this.matieres =  this.Jarwis.GetAllMatiere(this.niveau);
    //console.log(this.matieres);
  }
  reloadDataEtudiant(){
    this.etudiant$ =  this.Jarwis.getEtudiantNiveau(this.niveau);
  }

  info(nom:string,prenom:string){
    this.Jarwis.GetEtudiantNiveau(nom,prenom);
  }
}
