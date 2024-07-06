import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  [x: string]: any;
  public appPages = [
    {
      title: 'Master',
      icon: 'home',
      submenu: [
        { title: 'Org', url: '/org', icon: 'home' },
        { title: 'subscriptions', url: '/subcriptions', icon: 'calendar' },
        { title: 'Users', url: '/users', icon: 'people' },
        { title: 'Role', url: 'role', icon: 'aperture' },
        {title: 'Service provider',url: 'service-provider',icon: 'clipboard',},
        {title: 'Service configuration',url: 'service-configuration',icon: 'construct',},
        { title: 'Service', url: 'service', icon: 'server' },
        { title: 'Product', url: 'product', icon: 'cube' },
        { title: 'Service Rates', url: 'Service Rates', icon: 'pulse' },
        { title: 'Product Rates', url: 'Product Rates', icon: 'cash' },
      ],

    },

{title:'production planning', url:'production planning',icon:'settings',
      submenu:[
        {title:'product/subproduct',url:'productsub',icon:'settings'},
        {title:'reciepe',url:'recipe',icon:'settings'},
        {title:"production planing",url:'productionplanning',icon:'settings'},
        {title:"resource planning",url:'resource planning',icon:'settings'},
      ]
    },
    
   {title:'transport',url:'transport',icon:'transport',open:true,
      submenu:[
        {title:'vehicle',url:'vehicle',icon:'settings'},
        {title:'transporter',url:'transporter',icon:'settings'},
        {title:'vehicle scheduling',url:'vehicle time',icon:'settings'},
        {title:'transport account',url:'transport account',icon:'settings'}
      ]
    },

    {title:'distribution',url:'distribution',icon:"settings",
      submenu:[
        {title:"books",url:'books',icon:'settings'},
        {title:'milk/product',url:'milk/product',icon:'settings'}
      ]
    }
  ]

 
    }
  









  // { title: 'milkcollection', url: 'milkcollection', icon: 'settings' },
  //   { title: 'Demand Orders', url: 'demand', icon: 'settings' },
  //   {title:'Chiling Center ',url:'chilingcenter',icon:"settings"},
    //