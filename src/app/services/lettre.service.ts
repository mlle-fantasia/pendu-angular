export class lettreService {

  ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  tabLettreDejaCliquees = [];

  ajouterAuTabDeLettreDejaCliquees(i: number){
    this.tabLettreDejaCliquees.push(this.ALPHABET[i]);
  }

}
