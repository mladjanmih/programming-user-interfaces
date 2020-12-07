import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Place } from 'src/app/models/place.model';
import { TouristGuideService } from '../../contracts/tourist-guide.service';

@Injectable({
  providedIn: 'root'
})
export class TouristGuideMockService extends TouristGuideService {
  private places: {[key: number]: Place} = {
    1: {
      name: 'Belgrade Fortress',
      summary: "Belgrade Fortress consists of the old citadel (Upper and Lower Town) and Kalemegdan Park (Large and Little Kalemegdan) on the confluence of the River Sava and Danube, in an urban area of modern Belgrade, the capital of Serbia. It is located in Belgrade's municipality of Stari Grad.",
      description: "Belgrade Fortress consists of the old citadel (Upper and Lower Town) and Kalemegdan Park (Large and Little Kalemegdan) on the confluence of the River Sava and Danube, in an urban area of modern Belgrade, the capital of Serbia. It is located in Belgrade's municipality of Stari Grad. Belgrade Fortress was declared a Monument of Culture of Exceptional Importance in 1979, and is protected by the Republic of Serbia. It is the most visited tourist attraction in Belgrade, with Skadarlija being the second. Since the admission is free, it is estimated that the total number of visitors (foreign, domestic, citizens of Belgrade) is over 2 million yearly.",
      imageUrl: 'https://i.pinimg.com/originals/15/6f/92/156f9234bb0b6849eee424f88e525aaa.jpg'
    },
    2: {
      name: 'Church of Saint Sava',
      summary: "The Temple of Saint Sava is a Serbian Orthodox church which sits on the Vračar plateau in Belgrade, Serbia. It was planned as the bishopric seat and main cathedral of the Serbian Orthodox Church. The church is dedicated to Saint Sava, the founder of the Serbian Orthodox Church.",
      description: "The Temple of Saint Sava is a Serbian Orthodox church which sits on the Vračar plateau in Belgrade, Serbia. It was planned as the bishopric seat and main cathedral of the Serbian Orthodox Church. The church is dedicated to Saint Sava, the founder of the Serbian Orthodox Church and an important figure in medieval Serbia. It is built on the presumed location of St. Sava's grave.",
      imageUrl: 'https://www.panacomp.net/wp-content/uploads/2017/05/featured-st_sava_kirche.jpg'
    }
  }

  getRandomPlace() : Observable<Place> {
    return new Observable<Place>(subscriber => {
      subscriber.next(this.places[1]);
    }).pipe(first());
  }

  getPlaces() : Observable<Place[]> {
    throw "Not implemented.";
  }

  getPlaceById(id: number): Observable<Place> {
    throw "Not implemented.";
  }
}
