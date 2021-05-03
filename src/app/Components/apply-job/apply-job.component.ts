import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { HttpClient } from '@angular/common/http';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class ApplyJobComponent implements OnInit {
  firstFormGroup: any;
  secondFormGroup: any;
  thirdFormGroup : any;
  fourthFormGroup : any;
  fifthFormGroup : any;
  sixthFormGroup : any;
  completed: boolean = false;
  state: string = "";
  public fileData: any;
  previewUrl:any = null;
  fileUploadProgress: string = "";
  uploadedFilePath: string = "";
  disableSelect = new FormControl(false);

  constructor(private _formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrlFirstName: ['', Validators.required],
      firstCtrlMiddleName: [],
      firstCtrlLastName: [],
      fatherName: ['', Validators.required],
      dob: ['', Validators.required],
      maritalStatus : ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      altMobile : [],
      category: ['', Validators.required],
      adhaar: ['', Validators.required],
      pan : [],
      gender: ['', Validators.required],
      blood: ['', Validators.required],
      domicile : ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      houseAddress: [],
      street: [],
      state: [],
      district: [],
      pin: []
    });
    this.thirdFormGroup = this._formBuilder.group({
      course: [],
      startMonth: [],
      obtMarks: [],
      totalMarks: [],
      passing: [],
      school: []
    });
    this.fourthFormGroup = this._formBuilder.group({
      course: [],
      startMonth: [],
      obtMarks: [],
      totalMarks: [],
      passing: [],
      school: []
    });
    this.fifthFormGroup = this._formBuilder.group({
      course: [],
      startMonth: [],
      obtMarks: [],
      totalMarks: [],
      passing: [],
      school: []
    });
    this.sixthFormGroup = this._formBuilder.group({
      houseAddress: [],
      street: [],
      state: [],
      district: [],
      pin: []
    });
  }

  done() {
    this.completed = true;
    this.state = 'done';
    console.log(this.firstFormGroup.valid);
    console.log(this.secondFormGroup.valid);
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
}

preview() {
  // Show preview 
  var mimeType = this.fileData.type;
  if (mimeType.match(/image\/*/) == null) {
    return;
  }

  var reader = new FileReader();      
  reader.readAsDataURL(this.fileData); 
  reader.onload = (_event) => { 
    this.previewUrl = reader.result; 
  }
}
 
// onSubmit() {
//     const formData = new FormData();
//     formData.append('file', this.fileData);
//     this.http.post('url/to/your/api', formData)
//       .subscribe(res => {
//         console.log(res);
//         this.uploadedFilePath = res.data.filePath;
//         alert('SUCCESS !!');
//       }) 
// }

}
