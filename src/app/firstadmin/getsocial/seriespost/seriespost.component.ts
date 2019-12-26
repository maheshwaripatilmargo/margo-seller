import { Component, OnInit } from '@angular/core';
import { FbService } from 'src/app/services/fbservice/fb.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-seriespost',
  templateUrl: './seriespost.component.html',
  styleUrls: ['./seriespost.component.css']
})
export class SeriespostComponent implements OnInit {

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
  myValue=[];
  
  myPostId:any=[];
  
  ngOnInit() {
    this.getCategoryCampaignData(0);
    console.log(this.getcatObj);

  }
  getCategoryCampaignData(e) {
    console.log("this is getcat")
    let self = this;
    this.fbservice.getCategoryData().subscribe(data => {
      console.log(data, "haii");
     self.obj = data.data;
      console.log("getcat", self.obj);
      self.getCatAction = [];
     // console.log(self.getcatObj,"hello");
       self.obj.forEach(element => {
        self.ManegementPostData(element.get_fb_post_category_fun.category_id, element.get_fb_post_category_fun.category_name)
        console.log("ccc", element.get_fb_post_category_fun.category_id);
      })
    }, err => {
      console.log(err);
    })
  }


  ManegementPostData(category_id, category_name) {
    let obj = {
      "category_id": category_id,
      "category_name": category_name,
      "data": []
    }
    let self = this;
    console.log("ManegementData is working");
    this.fbservice.getPostManagementData(category_id).subscribe(mngdata => {
      console.log(category_id);
      obj.data = mngdata.data;
      console.log( mngdata);
      this.newmngdata = mngdata.data;
      console.log(mngdata.data)
      console.log(obj);
     this.catPostObj.push(obj);
      console.log(this.catPostObj);
      }, err => {
      console.log(err);
    })

  }



  imgData(){
    console.log("ppp");
    
  }
 imgDeatiledData(id){
    console.log("bbbb",id);
    
    this.myPostId.push(id)
  }
CampaignImagesData(data){
    this.myValue.push(data);
    this.router.navigate(['/directseller/fbcampaignname'], {queryParams: {post_id:data } });

     }
 }
