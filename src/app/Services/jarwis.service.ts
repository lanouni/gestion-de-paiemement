import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private baseUrl = 'http://localhost/laravel/SFE/public/api';

  constructor(private http:HttpClient) {   }

  Addmatiere(data){
    return this.http.post(`${this.baseUrl}/matiere`,data);
  }

  Addetudiant(data){
    return this.http.post(`${this.baseUrl}/etudiantMatiere`,data );
  } 
  GetAllEtudiant(): Observable<Object>{
    return this.http.get(`${this.baseUrl}/etudiant`);
  }

  GetEtudiantPrec(nom:string, prenom:string): Observable<Object>{
    return this.http.get(`${this.baseUrl}/etudiant/${nom}/${prenom}`);
  }

  AddNiveau(data){
    return this.http.post(`${this.baseUrl}/niveau`,data);
  }
  GetAllNiveau(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/niveau`)
  }
  AddMatiere(data){
    return this.http.post(`${this.baseUrl}/matiere`,data);
  }
  GetAllMatiere(niveau: string ): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/matiere/${niveau}`);
  }

  getMatiereInfo(matiere: string): Observable<any>{
    return this.http.get<any>(`http://localhost/laravel/SFE/public/api/matiere_prec/${matiere}`);
  }

  getEtudiantMatiere(matiere: string): Observable<any>{
    return this.http.get<any>(`http://localhost/laravel/SFE/public/api/etudiantMatiere/${matiere}`);
  }
  getEtudiantNiveau(Niveau: string): Observable<any>{
    return this.http.get<any>(`http://localhost/laravel/SFE/public/api/etudiantNiveau/${Niveau}`);
  }
  updateMatiere(matiere:string,data){
    const HttpOptions = {
      headers: new HttpHeaders({ 'Content-Type':'application/json'})
    };
    return this.http.put<void>(`http://localhost/laravel/SFE/public/api/matiere/${matiere}`,data,HttpOptions);
  }
  UpdateEtudiant(nom:string , prenom : string ,data){
    const HttpOptions = {
      headers: new HttpHeaders({ 'Content-Type':'application/json'})
    };
    return this.http.put<void>(`${this.baseUrl}/etudiant/${nom}/${prenom} `,data,HttpOptions);
  }
  
  deleteMatiere(matiere : string){
    return this.http.delete(`${this.baseUrl}/matiere/d/${matiere}`);
  }
  data = {
      nom : null,
      prenom:null,
      niveau:null
    };
  GetEtudiantNiveau(nom:string,prenom:string){
    return this.http.get(`${this.baseUrl}/etudiant/matiere/details/${nom}/${prenom}`);
  }
  AddParticipers(data){
    return this.http.post(`${this.baseUrl}/etudiantMatiere/add`,data );
  }
  deleteInsc(nom : string , prenom:string , matiere:string){
    return this.http.delete(`${this.baseUrl}/participer/${nom}/${prenom}/${matiere}`);
  }
  GetPaiement(nom:string, prenom :string , niveau:string , matiere:string){
    return this.http.get(`${this.baseUrl}/historique/${nom}/${prenom}/${niveau}/${matiere}`);
  }
  GetetudiantNiveau(niveau:string , matiere:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/etudiant/matiere/${niveau}/${matiere}`);
  }
  GetetudiantNiveauNom(nom:string ,niveau:string , matiere:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/etudiant/matiere/${nom}/${niveau}/${matiere}`);
  }
  AddPaiement(data){
    return this.http.post(`${this.baseUrl}/historique`,data);
  }
}
