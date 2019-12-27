import { Component, OnInit } from '@angular/core';
import { FbService } from 'src/app/services/fbservice/fb.service';
import { log } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facebookpost',
  templateUrl: './facebookpost.component.html',
  styleUrls: ['./facebookpost.component.css']
})
export class FacebookpostComponent implements OnInit {

  constructor(private fbservice: FbService ,private router:Router) { }
  newdata: any;
  newmessage: any;
  newcamp: any;
  newmngdata: any;
  getcatObj: any = [];
  showTabRole = !false;
  obj;
  newmng: any;
  getrolecat: any = [];
  selectedid;
  getCatAction: any = [];
  catPostObj = [];
  
  ngOnInit() {
    this.getcat(0);
    console.log(this.getcatObj);

  }
  getcat(e) {
    log("this is getcat")
    let self = this;
    this.fbservice.getCategoryData().subscribe(data => {
      console.log(data, "haii");
     self.obj = data.data;
      console.log("getcat", self.obj);
      self.getCatAction = [];


      // console.log(self.getcatObj,"hello");

      self.obj.forEach(element => {
        self.ManegementData(element.get_fb_post_category_fun.category_id, element.get_fb_post_category_fun.category_name)

        console.log("ccc", element.get_fb_post_category_fun.category_id);
      })
    }, err => {
      console.log(err);
    })
  }


  ManegementData(category_id, category_name) {
    let obj = {
      "category_id": category_id,
      "category_name": category_name,
      "data": []
    }
    let self = this;
    console.log("ManegementData is working");
    this.fbservice.getPostManagementData(category_id).subscribe(mngdata => {
      console.log("ooo", mngdata);
      console.log("ooo", category_id);
      obj.data = mngdata.data;
      console.log("ppp", mngdata);
      this.newmngdata = mngdata.data;
      console.log(mngdata.data)
      console.log(obj);

      this.catPostObj.push(obj);
      console.log(this.catPostObj);

    }, err => {
      console.log(err);

    })

  }

  imgDeatiledData(id){
    console.log("working",id);
  this.router.navigate(['/directseller/customfbpost'], {queryParams: {post_id:id } });
   }


  



  // getMessage() {

  //   console.log("getMessage is working");
  //   this.fbservice.getMessageData().subscribe(message => {
  //     console.log(message);
  //     this.newmessage = message.data;
  //   }, err => {
  //     console.log(err);

  //   })

  // }

  // ManegementDataa() {
  //   console.log();
  //   let self = this;

  //   console.log("ManegementData is working");
  //   this.fbservice.getPostManagementDataa().subscribe(mng => {
  //     this.newmng = mng.data;
  //   }, err => {
  //     console.log(err);
  //   })
  // };




  



}
