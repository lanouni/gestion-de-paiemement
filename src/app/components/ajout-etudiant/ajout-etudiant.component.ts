import { Component, OnInit } from '@angular/core';

import { JarwisService } from 'src/app/Services/jarwis.service';
import { Observable } from 'rxjs';
import { Niveau } from 'src/app/class/Niveau';
import { ActivatedRoute } from '@angular/router';
import { Matiere } from 'src/app/class/Matiere';

@Component({
  selector: 'app-ajout-etudiant',
  templateUrl: './ajout-etudiant.component.html',
  styleUrls: ['./ajout-etudiant.component.css']
})
export class AjoutEtudiantComponent implements OnInit {

  public Form = {
    nom:null,
    prenom:null,
    ville:null,
    phone_1:null,
    phone_2:null,
    date_insc:null,
    niveau:null,
    nom_matiere:null,
  };

  niv:string;

  
  public error = null;
  matieres: Observable<Matiere>;

  niveau :string;
  constructor(private route:ActivatedRoute,private Jarwis: JarwisService) { 

    this.niveau =  this.route.snapshot.params.niveau;
   }
 
   ngOnInit(): void {

     this.reloadData();
   }
   reloadDataMatiere(niveau : any){
     console.log(this.niveau);
     this.matieres =  this.Jarwis.GetAllMatiere(this.niv);
     //console.log(this.matieres);
   }

  niveaux: Observable<Niveau>;



  reloadData(){
    this.niveaux =  this.Jarwis.GetAllNiveau();
    console.log(this.niveaux);
  }
  onSubmit(){
    this.Form.niveau=this.niv;
    this.Jarwis.Addetudiant(this.Form).subscribe(
      data=>console.log(data),
      error => this.handleError(error)
    );
  }

  handleError(error){
    this.error = error.error.errors;
    console.log(error);
  }


}
