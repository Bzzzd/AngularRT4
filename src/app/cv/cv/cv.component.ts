import { Component, OnInit } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import {map, Observable, share} from "rxjs";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent{
  constructor(
    private cvService: CvService,
    private route : ActivatedRoute
  ) {
   
    this.cv$=this.cvService.getCvs();
    
  }

  
  cv$ : Observable<Cv[]>;







}
