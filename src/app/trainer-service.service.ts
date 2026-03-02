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
  },
  {
    name: 'Brock',
    team: ['Onix', 'Geodude', 'Crobat'],
    items: ['Hard Stone', 'Everstone', 'Poison Barb']
  },
  {
    name: 'Sabrina',
    team: ['Alakazam', 'Mr. Mime', 'Espeon'],
    items: ['Twisted Spoon', 'Light Clay', 'Focus Sash']
  },
  {
    name: 'Gary Oak',
    team: ['Blastoise', 'Arcanine', 'Umbreon'],
    items: ['Blastoisinite', 'Charcoal', 'Black Glasses']
  }
]);
trainers = this.registry.asReadonly();
}
