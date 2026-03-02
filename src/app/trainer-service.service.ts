import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainerServiceService {
//Defining Trainers
private registry = signal([
  {
    name: 'Ash Ketchum',
    team:['Pikachu', 'Charizard'],
    items:['Light Ball', 'Charizarite Y']
  },
  {
    name:'Mitsy',
    team: ['Starmie', 'Psyduck', 'Gyarados'],
    items: ['Mystic Water','None', 'Gyaradosite']
  }
]);
trainers = this.registry.asReadonly();
}
