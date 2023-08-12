import { Component } from '@angular/core';
import { JSONFileService } from 'src/JSONFile.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private jsonFileService: JSONFileService) {}

  JSONFileData:any | undefined;
  jsonTextBoxVal: string = "";
  jsonDescriptionBoxVal: string = "";


  ngOnInit(): void {
  this.JSONFileData = [];

    this.jsonFileService.getAllFiles().subscribe(response => { this.JSONFileData = response } );
  }

  onAdd(){
    var jsontxt = {
        "text": this.jsonTextBoxVal,
        "description": this.jsonDescriptionBoxVal
    };
    
    console.log(jsontxt);
    this.jsonFileService.addFile(JSON.stringify(jsontxt))
  }

}
