import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {MotService} from '../services/mot.service';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  @Input() partieFinie: boolean;
  @Input() partieCommencee :boolean;
  @Input() mot;


  constructor(private motService: MotService, private messageService: MessageService) {
    this.subsciptionPartieCommencee();
  }

  async ngOnInit() {
    this.mot = await this.motService.Dictionnaire();
    console.log(this.mot);
  }

  subsciptionPartieCommencee(){
    this.messageService.partiCommenceeOuiNon.subscribe((partieCommencee) => {
      this.partieCommencee = partieCommencee;
    });
  }
}
