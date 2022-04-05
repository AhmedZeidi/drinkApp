import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  nomC: any = '';
  constructor(private route: ActivatedRoute) { }




  ngOnInit(): void {

    console.log(this.route.snapshot.params['nomC']);

    this.nomC = this.route.snapshot.params['nomC'];
  }

  // console.log('cocktailList',this.route.snapshot.params['nomC']);


}
