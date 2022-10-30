import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  image: File | undefined;
  isAdded: boolean = true;
  filterText: string = "";
  constructor(private auth: AuthService, private prodService: ProductService, private route: Router,public sanitizer: DomSanitizer) {


  }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout();
  }

  add(addForm: NgForm) {
    this.isAdded = false;
    const model = addForm.value;
    console.log(model)
    this.prodService.add(model).subscribe({
      next: res => {
        // @ts-ignore
        this.prodService.addImage(res.id,this.image).subscribe({
          next: res => {
            this.isAdded = true;
            this.route.navigate(['/dash']).then(r=>{window.location.reload()})
          },
          error: err => {
            alert("Error")
            this.isAdded = true;
          }
        });
      },
      error: err => {
        alert("Error")
      }
    })
  }

  upload($event: Event) {
    this.image = ($event.target as HTMLInputElement).files![0];
  }
}
