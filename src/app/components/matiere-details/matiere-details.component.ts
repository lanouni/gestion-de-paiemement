import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-matiere-details',
  templateUrl: './matiere-details.component.html',
  styleUrls: ['./matiere-details.component.css']
})
export class MatiereDetailsComponent implements OnInit {
 matiere : string;
 niveau : string;
  constructor(private route:ActivatedRoute,private Jarwis: JarwisService,private _router:Router) { 
    this.matiere = this.route.snapshot.params.matiere;
    this.niveau = this.route.snapshot.params.niveau;
  }
  matiere$;
  etudiant$;
 
  ngOnInit(): void {
    this.reloadData();
    this.reloadDataEtudiant();
  }
  deleteMatiere( ){ 
    this.Jarwis.deleteMatiere((this.matiere)).subscribe(
      data =>console.log((this.matiere)),
      error=>console.log(error)
    );

    this._router.navigateByUrl('/niveau');
   }

  reloadData(){
    this.matiere$ =  this.Jarwis.getMatiereInfo(this.matiere);
  }
  reloadDataEtudiant(){
    this.etudiant$ = this.Jarwis.getEtudiantMatiere(this.matiere);
    
  }
}
