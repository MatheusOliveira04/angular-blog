import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {

  private id!: string | null;
  public photoCover!: string;
  public contentTitle!:string;
  public contentDescription!:string;

  constructor(private route:ActivatedRoute){
  }

  ngOnInit() {
    this.route.paramMap.subscribe(value => {
      this.id = (value.get('id'));
     });
     this.setValueInComponent(this.id);
  }

  setValueInComponent(id: string | null){ 
    const result = dataFake.filter(value => value.id === id)[0];

    console.log(result);
    this.photoCover = result.photo;
    this.contentTitle = result.title;
    this.contentDescription = result.description;
  }

}
