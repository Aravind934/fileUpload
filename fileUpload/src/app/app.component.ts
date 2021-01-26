import { Component } from '@angular/core';
import { FileService } from './file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fileUpload';
  constructor(private fileService :FileService){}
  image;
  result;
  selectImage(event){
    if(event.target.files.length >0){
      this.image = event.target.files[0];
    }
  }
  fileUpload(){
    const formData = new FormData()
    formData.append('image',this.image);
    this.fileService.upload(formData).subscribe(data=>{
      this.result = data;
    })
  }
}
