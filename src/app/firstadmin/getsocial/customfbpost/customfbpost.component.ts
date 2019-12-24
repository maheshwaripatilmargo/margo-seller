import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FbService } from 'src/app/services/fbservice/fb.service';

@Component({
  selector: 'app-customfbpost',
  templateUrl: './customfbpost.component.html',
  styleUrls: ['./customfbpost.component.css']
})
export class CustomfbpostComponent implements OnInit {
  post_name;
  category_id;
  post_id;
  post_Url;
  post_screenshot;
  status=true;
  postValue:any;
  msgVal:any;
 

  constructor( private activatedRoute: ActivatedRoute,private fbservice: FbService) { }

   ngOnInit() {
     let self = this;
  this.activatedRoute.queryParams
    .subscribe(params => {
        self.post_id = params.post_id;
      });
      this.msgSnipet(self.post_id);

    //get item details using id
    if (self.post_id) {
      console.log("kkkkk",self.post_id);
      this.fbservice.getCustomData(this.post_id).subscribe(response => {
        self.postValue = response.data;
        // console.log("qq",response);
        if (response.status) {
         this.status = false;
          self.postValue = response.data;
          console.log("postValue",self.postValue);
         self.dataBinding();
        } else {

        }
      });
    }
  }
  msgSnipet(post_id){
    console.log("msgsnipet",post_id);
    let self = this;
    this.fbservice.getCustomMessage(post_id).subscribe(response => {
      self.msgVal = response;
      console.log("msgVal",self.msgVal);
      if (response.status) {
       this.status = false;
       self.msgVal = response.data;
      //  self.dataBinding();
      } else {

      }
    });

  }
  
  dataBinding() {
    console.log("zz")
    this.post_name = this.postValue.post_name;
    this.category_id = this.postValue.category_id;
    this. post_id = this.postValue.post_id;
    console.log(this.post_id);
    this.post_Url = this.postValue.post_Url;
    
    
    this.post_screenshot = this.postValue.post_screenshot;
    console.log(this.post_screenshot);
  }

}