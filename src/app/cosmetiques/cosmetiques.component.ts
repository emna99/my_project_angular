import { Component, OnInit } from '@angular/core';
import { Cosmetique } from '../model/cosmetique.model';
import { CosmetiqueService } from '../services/cosmetique.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cosmetiques',
  templateUrl: './cosmetiques.component.html'
})
export class CosmetiquesComponent implements OnInit {

  cosmetiques : Cosmetique[];
  
  constructor(private cosmetiqueService: CosmetiqueService,
    private router :Router) { 
   // this.cosmetiques = cosmetiqueService.listeCosmetiques();
  }

  ngOnInit(): void {
    this.cosmetiqueService.listeCosmetique().subscribe(cos => {
      console.log(cos);
      this.cosmetiques = cos;
      });
  }

  supprimerCosmetique(p: Cosmetique)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.cosmetiqueService.supprimerCosmetique(p.idCosmetique).subscribe(() => {
  console.log("cosmetique supprimé");
  this.SuprimerCosmetiqueDuTableau(p);

  });
 
  }

  SuprimerCosmetiqueDuTableau(prod : Cosmetique) {
    this.cosmetiques.forEach((cur, index) => {
    if(prod.idCosmetique=== cur.idCosmetique) {
    this.cosmetiques.splice(index, 1);
    }
    });
    }

}
