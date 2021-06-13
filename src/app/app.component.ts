import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'proj1';
  productData =[{
    heading1: "Free",
    heading3: "$0",
    heading2: "/month",
    list1: "Single User",
    list2: "5GB Storage",
    list3: "Unlimited Public Projects ",
    list4: "Community Access",
    list5: "Unlimited Private Projects",
    list6: "Dedicated Phone Support",
    list7: "Free Subdomain",
    list8: "Monthly Status Reports",

  },
  {
    heading1: "PLUS",
    heading3: "$9",
    heading2: "/month",
    list1: "5 User",
    list2: "50GB Storage",
    list3: "Unlimited Public Projects ",
    list4: "Community Access",
    list5: "Unlimited Private Projects",
    list6: "Dedicated Phone Support",
    list7: "Free Subdomain",
    list8: "Monthly Status Reports",

  },
  {
    heading1: "Pro",
    heading3: "$49",
    heading2: "/month",
    list1: "Unlimited User",
    list2: "150GB Storage",
    list3: "Unlimited Public Projects ",
    list4: "Community Access",
    list5: "Unlimited Private Projects",
    list6: "Dedicated Phone Support",
    list7: "UnlimitedFree Subdomain",
    list8: "Monthly Status Reports",

  }];
  constructor(){
    this.productData.forEach((product) =>{

    })
  }}
