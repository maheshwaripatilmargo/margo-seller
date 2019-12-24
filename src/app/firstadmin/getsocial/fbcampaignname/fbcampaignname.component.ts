import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FbService } from 'src/app/services/fbservice/fb.service';

@Component({
  selector: 'app-fbcampaignname',
  templateUrl: './fbcampaignname.component.html',
  styleUrls: ['./fbcampaignname.component.css']
})
export class FbcampaignnameComponent implements OnInit {
  
  
  constructor(private ActivatedRoute:ActivatedRoute, private FbService:FbService ) { }
data=[];
msg=[];
img=[];
status=true;
  ngOnInit() {
    let self=this;
    this.ActivatedRoute.queryParams.subscribe(params => {
      self.data = params.post_id.splice(',');
      
        console.log("lll",self.data);
        
        
      });
      self.campaignMsgSnipet(this.data);
    this.getCampaignImages(this.data);
    
  }
 campaignMsgSnipet(data){
    let self=this;
    console.log("qqq",this.data);
    this.FbService.getCustomMessage(data).subscribe(response => {
      // self.msg = response;
      // console.log("msg",self.msg);
      if (response.status) {
       this.status = false;
       self.msg = response.data;
       //self.dataBinding();
      } else {
      }
    });

  }

  getCampaignImages(data){
    let self=this;
    console.log("rq",this.data);
    this.FbService.getCustomimages(data).subscribe(response => {
      self.img = response;
      console.log("img",self.img);
      if (response.status) {
       this.status = false;
       self.img = response.data;
       //self.dataBinding();
      } else {
      }
    });

  }
}

 