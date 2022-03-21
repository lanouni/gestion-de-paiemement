import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Matiere } from 'src/app/class/Matiere';
import { ActivatedRoute } from '@angular/router';
import { JarwisService } from 'src/app/Services/jarwis.service';

@Component({
  selector: 'app-etudiant-details',
  templateUrl: './etudiant-details.component.html',
  styleUrls: ['./etudiant-details.component.css']
})
export class EtudiantDetailsComponent implements OnInit {
  public Form = {
    nom:null,
    prenom:null,  
     nom_matiere:null,
    niveau:null,
  };
  matieres: Observable<Matiere>;
  niveau : string;
  etudiant$;
  nom:string;
  prenom:string;
  etud$;
  nom_matiere:string;
  
  public error = null;

  constructor(private route:ActivatedRoute,private Jarwis: JarwisService) { 
    this.nom = this.route.snapshot.params.nom;
    this.prenom = this.route.snapshot.params.prenom;
   this.niveau =  this.route.snapshot.params.niveau;
  }


  ngOnInit(): void {
    this.reloadData();
    this.reloadDataEtudiant();
    this.reloadDataMatiere();
  }
  reloadData(){
    console.log(this.niveau);
    this.etud$ = this.Jarwis.GetEtudiantPrec(this.nom , this.prenom);
    //console.log(this.matieres);
  }
  reloadDataEtudiant(){
    console.log(this.nom,this.prenom);
    this.etudiant$ =  this.Jarwis.GetEtudiantNiveau(this.nom , this.prenom);
  }
  reloadDataMatiere(){
    console.log(this.niveau);
    this.matieres =  this.Jarwis.GetAllMatiere(this.niveau);
  }
  onSubmit(){
    this.Form.niveau = this.niveau;
    this.Form.nom = this.nom;
    this.Form.prenom=this.prenom;
    this.Jarwis.AddParticipers(this.Form).subscribe(
      data=>console.log(data),
      error => this.handleError(error)
    );
  }

  handleError(error){
    this.error = error.error.errors;
    console.log(error);
  }
  deleteMatiere(nom_matiere:string){ 
    this.Jarwis.deleteInsc(this.nom , this.prenom ,nom_matiere).subscribe(
      data =>console.log((nom_matiere)),
      error=>console.log(error)
    );
  }


}
