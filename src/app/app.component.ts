import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  rowClicked: any;
  clickedRowData = [];

  sampleTableData = [
    {
      name: 'Sham',
      gender: 'male',
      email: 'sham@srb.com',
      age: '20',
      nationality: 'Indian',
    },
    {
      name: 'Nisha',
      gender: 'female',
      email: 'nisha@srb.c0m',
      age: '21',
      nationality: 'Indian',
    },
    {
      name: 'Ram',
      gender: 'male',
      email: 'ram@srb.com',
      age: '22',
      nationality: 'Indian',
    },
    {
      name: 'Aditi',
      gender: 'female',
      email: 'aditi@srb.com',
      age: '23',
      nationality: 'Indian',
    },
    {
      name: 'Raju',
      gender: 'male',
      email: 'raju@srb.com',
      age: '24',
      nationality: 'Indian',
    },
    {
      name: 'Munni',
      gender: 'female',
      email: 'munni@srb.com',
      age: '25',
      nationality: 'Indian',
    },
    {
      name: 'Akshay',
      gender: 'male',
      email: 'akshay@srb.com',
      age: '26',
      nationality: 'Indian',
    },
  ];

  changeTableRowColor(id: any) {
    let val = this.clickedRowData.indexOf(id);

    // To store the clicked row index data
    if (val === -1) {
      this.clickedRowData.push(id);
    } else {
      this.clickedRowData.splice(val, 1);
    }

    this.rowClicked = this.clickedRowData.includes(id) ? id : -1;
    // if (this.clickedRowData.includes(id)) {
    //   this.rowClicked = id;
    // } else {
    //   this.rowClicked = -1;
    // }
  }
}
