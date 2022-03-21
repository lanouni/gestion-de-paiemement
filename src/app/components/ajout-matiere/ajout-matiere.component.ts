import { Component, OnInit, Input } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { Observable } from 'rxjs';
import { Niveau } from 'src/app/class/Niveau';
  
@Component({
  selector: 'app-ajout-matiere',
  templateUrl: './ajout-matiere.component.html',
  styleUrls: ['./ajout-matiere.component.css']
})
export class AjoutMatiereComponent implements OnInit {

  public Form = {
    nom_matiere:null,
    prix:null,
    niveau:null,
  };
  
  public error = null;
  @Input()  niveau:string;


  niveaux: Observable<Niveau>;

  constructor(private Jarwis: JarwisService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.niveaux =  this.Jarwis.GetAllNiveau();
    console.log(this.niveaux);
  }
  
  onSubmit(){
    this.Jarwis.AddMatiere(this.Form).subscribe(
      data => console.log(data),
      error =>this.handleError(error)
    );
  }

  handleError(error){
    this.error = error.error.error;
    console.log(error);
  }


 

}
