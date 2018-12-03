export class motService {

  DICTIONNAIRE = ['anticonstitutionnelement', 'bonjour', 'cannes', 'Dormir', 'Effacer', 'Front', 'Grossir', 'Hache', 'Ivoir', 'Jardinier', 'Kayak', 'Lignage', 'Maman', 'Naviguer', 'Oppération', 'Pouvoir', 'Questions', 'Route', 'Scintillement', 'Tortues', 'Unité', 'Vivre', 'Waaaaaaouuu', 'Xd', 'Yaourt', 'Zincographie'];

  selectionMot(){
    return this.DICTIONNAIRE[Math.floor(this.DICTIONNAIRE.length * Math.random())].toUpperCase();
  }

}
