import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PetsittersService} from '../petsitters.service';
import {Petsitter} from '../../../common/models/petsitter';
import { HttpClient } from '@angular/common/http';

const PETSITTER_URL = 'http://localhost:5001/api/User';
@Component({
  selector: 'app-petsitter',
  templateUrl: './petsitter.component.html',
  styleUrls: ['./petsitter.component.css']
})
export class PetsitterComponent implements OnInit, AfterViewInit {
  private petsitterId: string;
  public petsitter: Petsitter;
  private blockSlider = false;

  constructor(private route: ActivatedRoute, private petsittersService: PetsittersService, private router: Router,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.petsitterId = this.route.snapshot.paramMap.get('id') as string;
    this.showPersonalInfo();
    /*    this.route.params.subscribe(params =>  {
          this.petsitterId = params.id;
        });*/
    this.petsittersService.getPetsitter(+this.petsitterId).subscribe(data => this.petsitter = data);
  }

  ngAfterViewInit(): void {
    const arrowsPrev = document.getElementsByClassName('carousel-arrow-prev');
    const arrowsNext = document.getElementsByClassName('carousel-arrow-next');
    this.onArrowClick(arrowsPrev);
    this.onArrowClick(arrowsNext);
  }

  onArrowClick(arrows): void {
    this.bindSliderArrows(arrows[0], arrows[1]);
    this.bindSliderArrows(arrows[1], arrows[0]);
  }

  public navigateToContactPage(): void {
    void this.router.navigateByUrl('contact-form');
  }
  private bindSliderArrows(trigger, target): void {
    trigger.addEventListener('click', () => {
      if (this.blockSlider === false) {
        this.blockSlider = !this.blockSlider;
        new ElementRef(target as any).nativeElement.click();
      } else {
        this.blockSlider = !this.blockSlider;
      }
    });
  }

  public showPersonalInfo(): void{
     this.http.get(`${PETSITTER_URL}`).subscribe(thisData=>
     console.log(thisData));
  }
}
