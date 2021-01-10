import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router';
import { CosmetiqueService } from '../services/cosmetique.service';
import { Cosmetique } from '../model/cosmetique.model';

@Component({
  selector: 'app-update-cosmetique',
  templateUrl: './update-cosmetique.component.html',
  styles: [
  ]
})

export class UpdateCosmetiqueComponent implements OnInit {
  currentCosmetique = new Cosmetique();

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
              private cosmetiqueService: CosmetiqueService) { }

ngOnInit() {
  this.cosmetiqueService.consulterCosmetique(this.activatedRoute.snapshot.params.id).
  subscribe( prod =>{ this.currentCosmetique = prod; } ) ;
  } 

  updateCosmetique() {
    this.cosmetiqueService.updateCosmetique(this.currentCosmetique).subscribe(() => {
    this.router.navigate(['Cosmetiques']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }

}
  
