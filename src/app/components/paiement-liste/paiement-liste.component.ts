import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Niveau } from 'src/app/class/Niveau';
import { ActivatedRoute } from '@angular/router';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { Matiere } from 'src/app/class/Matiere';
import { Etudiant } from 'src/app/class/Etudiant';
import { Paiement } from 'src/app/class/Paiement';

@Component({
  selector: 'app-paiement-liste',
  templateUrl: './paiement-liste.component.html',
  styleUrls: ['./paiement-liste.component.css']
})
export class PaiementListeComponent implements OnInit {


  niv:string;
  mat:string;
  
  public error = null;
  public tsterror = false;
  matieres: Observable<Matiere>;

  niveau :string;
  constructor(private route:ActivatedRoute,private Jarwis: JarwisService) { 

    this.niveau =  this.route.snapshot.params.niveau;
   }
 
   ngOnInit(): void {

     this.reloadData();
   }
   reloadDataMatiere(){
     console.log(this.niveau);
     this.matieres =  this.Jarwis.GetAllMatiere(this.niv);
     //console.log(this.matieres);
   }

  paiements$;
  niveaux: Observable<Niveau>;
  etudiants: Observable<Etudiant>;
  nom:string;

  reloadData(){
    this.niveaux =  this.Jarwis.GetAllNiveau();
  }
  etudian:Observable<Etudiant>;
  prenom:string;
  reloadEtudiant(){
    this.etudiants = this.Jarwis.GetetudiantNiveau(this.niv,this.mat);
  }
  reloadEtudiantNom(){
    
    this.etudian = this.Jarwis.GetetudiantNiveauNom(this.nom,this.niv,this.mat);
  }
  reloadPaiement(){console.log(this.nom , this.prenom , this.mat , this.niv);
     this.paiements$ = this.Jarwis.GetPaiement(this.nom,this.prenom,this.niv,this.mat);
  }
  handleError(error){
    this.tsterror = true;
    this.error = error.error;
    console.log(error);
  }

}
