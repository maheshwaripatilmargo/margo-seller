import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { MasterService } from 'src/app/services/master/master.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-import-files-dialog',
  templateUrl: './import-files-dialog.component.html',
  styleUrls: ['./import-files-dialog.component.css']
})
export class ImportFilesDialogComponent implements OnInit {

  @Input() title: string;
  @Input() message: string;
  @Input() url: string;

  constructor(private activeModal: NgbActiveModal,
    // private masterService: MasterService,
    private toastrService: ToastrService) { }
  value = 0;
  width = "0%";
  fileName;
  status = true;
  display = "none";

  ngOnInit() {
    console.log(this.url);
  }

  processFile(event: any, files: any) {
    const file: File = files.files[0];
    this.fileName = file.name;
    const reader = new FileReader();
    // this.toUploadFiles(file);
    reader.readAsDataURL(file);
  }
  // toUploadFiles(file) {
  //   let self = this;
  //   this.masterService.uploadfile(file, "margo", function (error, params) {
  //     if (error) {
  //       return;
  //     }
  //     if (params.Key) {
  //       let { key } = params;
  //       self.display = "flex";
  //       let id = setInterval(() => {
  //         self.value += 1;
  //         self.width = `${self.value}%`;
  //       }, 100);
  //       self.masterService.importBulk(self.url, { "key": key }).subscribe(data => {
  //         if (data.status) {
  //           clearInterval(id);
  //           self.width = `100%`;
  //           self.toastrService.success(data.message);
  //           self.displayBox(data.status);
  //         } else {
  //           clearInterval(id);
  //           self.toastrService.error(data.message);
  //           self.width = `100%`;
  //           self.status = false
  //           self.displayBox(data.status);
  //         }
  //       }, err => {
  //         clearInterval(id);
  //         self.status = false
  //         self.width = `0%`;
  //         self.displayBox(false);
  //         console.error(err);
  //       })
  //     }
  //   });
  // }
  displayBox(value) {
    let self = this;
    setTimeout(() => {
      self.activeModal.close(value)
    }, 1000);
  }
  public dismiss() {
    this.activeModal.dismiss();
  }
}
