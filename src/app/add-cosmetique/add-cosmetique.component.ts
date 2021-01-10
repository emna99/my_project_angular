import { Component, OnInit } from '@angular/core';
import { Cosmetique } from '../model/cosmetique.model';
import { CosmetiqueService } from '../services/cosmetique.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-cosmetique',
  templateUrl: './add-cosmetique.component.html'
})
export class AddCosmetiqueComponent implements OnInit {

  newCosmetique = new Cosmetique();

  message :string;
  constructor(private cosmetiqueService: CosmetiqueService,
    private router :Router        ) { }

  ngOnInit(): void {
  }

  addCosmetique(){
    this.cosmetiqueService.ajouterCosmetique(this.newCosmetique)
    .subscribe(cos => {
    console.log(cos);
    });
    this.router.navigate(['cosmetiques']);
    }

}
