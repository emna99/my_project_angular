import { Injectable } from '@angular/core';
import { Cosmetique } from '../model/cosmetique.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})

export class CosmetiqueService {
  apiURL: string = 'http://localhost:8080/cosmetiques/api';
  cosmetiques : Cosmetique[];

  cosmetique : Cosmetique;

  constructor(private http : HttpClient) { 
   /* this.cosmetiques = [
      {idCosmetique : 1, nomCosmetique : "RougeA222", prixCosmetique : 30.600, dateCreation : new Date("01/14/2011")},
      {idCosmetique : 2, nomCosmetique : "Rougeb", prixCosmetique : 45, dateCreation : new Date("12/17/2010")},
      {idCosmetique : 3, nomCosmetique :"Rougelll", prixCosmetique : 90.123, dateCreation : new Date("02/20/2020")}
    ]; */
  }

 

listeCosmetique(): Observable<Cosmetique[]>{
  return this.http.get<Cosmetique[]>(this.apiURL);
  }

  ajouterCosmetique( cos: Cosmetique):Observable<Cosmetique>{
    return this.http.post<Cosmetique>(this.apiURL, cos, httpOptions);
    }
    supprimerCosmetique(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }

      consulterCosmetique(id: number): Observable<Cosmetique> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Cosmetique>(url);
        }


        updateCosmetique(prod :Cosmetique) : Observable<Cosmetique>
        {
        return this.http.put<Cosmetique>(this.apiURL, prod, httpOptions);
        }

     
        

}
