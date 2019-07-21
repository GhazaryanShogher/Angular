import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  constructor() { }
  products = [
    {
      id:1,
      productName:"TV",
      price:"400$",
      description:"Enjoy premium entertainment from any seat with the 65 LG UHD UK6090 Smart TV. Using IPS technology to deliver vivid colours and strong contrast ratios that stays consistent even when viewed from wide angles, this TV ensures that every seat gets the same treatment, so you can enjoy stunning 4K resolution and vivid colours no matter where you sit."
    },
    {
      id:2,
      productName:"Mobile",
      price:"600$",
      description:"With the Samsung Galaxy S9 in your hand, the world is yours to capture, share, and experience in all new ways. Take breathtaking photos with a Dual Aperture camera powered by DSLR technology. Enjoy rich and immersive audio through a pair of powerful virtual surround sound speakers. And watch your videos spring to life on a stunning Infinity Display."
    },
    {
      id:3,
      productName:"iPhone",
      price:"900$",
      description:"All-screen design. Longest battery life ever in an iPhone. Fastest performance. Water and splash resistant. Studio-quality photos and 4K video. More secure with Face ID. The new iPhone XR. It’s a brilliant upgrade."
    }
   ]

  ngOnInit() {
  }

}
