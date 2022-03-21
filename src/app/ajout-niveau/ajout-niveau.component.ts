import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../Services/jarwis.service';

@Component({
  selector: 'app-ajout-niveau',
  templateUrl: './ajout-niveau.component.html',
  styleUrls: ['./ajout-niveau.component.css']
})
export class AjoutNiveauComponent implements OnInit {

  public Form = {
    niveau:null,
  };
  public error = null;

  constructor(private Jarwis: JarwisService) { }

  onSubmit(){
    this.Jarwis.AddNiveau(this.Form).subscribe(
      data=>console.log(data),
      error => this.handleError(error)
    );
  }
  handleError(error){
    this.error = error.error.errors;
    console.log(error);
  }

  ngOnInit(): void {
  }

}
