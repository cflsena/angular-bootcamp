import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentPage = 0;

  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8c25vd3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8c25vd3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8c25vd3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
  ];

  checkWindowIndex(index: number){
    return Math.abs(this.currentPage - index) < 5;
  }
}
