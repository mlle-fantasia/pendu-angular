import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {MotService} from '../services/mot.service';
import {MessageService} from '../services/message.service';
import {DictionnaireService} from '../services/DictionnaireService';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  @Input() partieFinie: boolean;
  @Input() partieCommencee :boolean;
  @Input() mot;


  constructor(private motService: MotService, private messageService: MessageService, private dicoService: DictionnaireService) {
    this.subsciptionPartieCommencee();
  }

  async ngOnInit() {


  }

  subsciptionPartieCommencee(){
    this.messageService.partiCommenceeOuiNon.subscribe((partieCommencee) => {
      this.partieCommencee = partieCommencee;
    });
  }
}
