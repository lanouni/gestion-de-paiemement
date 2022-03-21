import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { Observable } from 'rxjs';
import { Niveau } from 'src/app/class/Niveau';

@Component({
  selector: 'app-matieres-update',
  templateUrl: './matieres-update.component.html',
  styleUrls: ['./matieres-update.component.css']
})
export class MatieresUpdateComponent implements OnInit {

  matiere : string;
  niveau : string;
  public Form = {
    nom_matiere:null,
    prix:null,
    id_niveau:null,
  };
  
  public error = null;
  prix : number;
  nom_matiere : string;
  id_niveau : number;

  niveaux: Observable<Niveau>;

   constructor(private route:ActivatedRoute,private Jarwis: JarwisService,private _router:Router) { 
     this.matiere = this.route.snapshot.params.matiere;
     this.niveau = this.route.snapshot.params.niveau;
   }
   matiere$;
   etudiant$;
  
   ngOnInit(): void {
     this.reloadData();
     this.reloadDataNieau();
   }

 
   reloadData(){
     this.matiere$ =  this.Jarwis.getMatiereInfo(this.matiere);
   }
   onSubmit(){
    this.Form.prix = this.matiere$.prix;
    this.Form.nom_matiere = this.matiere$.nom_matiere;
    this.Form.id_niveau=this.matiere$.id_niveau;
    this.Jarwis.updateMatiere(this.matiere,this.Form).subscribe(
      data => console.log(data),
      error =>this.handleError(error)
    );
  }
  reloadDataNieau(){
    
    this.niveaux =  this.Jarwis.GetAllNiveau();
    console.log(this.niveaux);
  }

  handleError(error){
    this.error = error.error.error;
    console.log(error);
  }
}
