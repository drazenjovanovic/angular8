import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'Vanila krem torta',
      'Dobro uutite belanca uz dodavanje šećera.',
      'https://www.recepti.com/img/recipe/45335-vanila-krem-torta.jpg'),
    new Recipe(
      'Vanila krem torta',
      'Dobro uutite belanca uz dodavanje šećera.',
      'https://www.recepti.com/img/recipe/45335-vanila-krem-torta.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
