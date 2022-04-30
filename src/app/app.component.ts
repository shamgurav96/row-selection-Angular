import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedFrameIndex: number = 0;
  selectedCellRowIndex: number = 0;
  selectedCellColumnIndex: number = 0;
  selectedTableColumn: number = 0 ;

  selectedCellsStorage = {
    frameIndex: 0,
    columnIndex: 0,
    rowIndex: []
  } ;

  isFrameSelected : boolean = false ; //Not Used
  isRowSelectedCheck : boolean = false ; //Not Used

  data = [
    {
      frame: 1,
      isSelected: false,
      rowData: [
        {
          variableName: 'HR',
          column1: '71',
          column2: '72',
          column3: '73',
          column4: '74',
          column5: '75',
          column6: '76',
          column7: '77',
          column8: '78',
          isRowSelected: false,
        },
        {
          variableName: 'Heart Rhythm',
          column1: '71',
          column2: '72',
          column3: '73',
          column4: '74',
          column5: '75',
          column6: '76',
          column7: '77',
          column8: '78',
          isRowSelected: false,
        },
        {
          variableName: 'ICPmean',
          column1: '71',
          column2: '72',
          column3: '73',
          column4: '74',
          column5: '75',
          column6: '76',
          column7: '77',
          column8: '78',
          isRowSelected: false,
        },
        {
          variableName: 'NIBPsys',
          column1: '71',
          column2: '72',
          column3: '73',
          column4: '74',
          column5: '75',
          column6: '76',
          column7: '77',
          column8: '78',
          isRowSelected: false,
        },
        {
          variableName: 'SpO2',
          column1: '71',
          column2: '72',
          column3: '73',
          column4: '74',
          column5: '75',
          column6: '76',
          column7: '77',
          column8: '78',
          isRowSelected: false,
        },
      ],
    },
    {
      frame: 2,
      isSelected: false,
      rowData: [
        {
          variableName: 'ARTmean',
          column1: '71',
          column2: '72',
          column3: '73',
          column4: '74',
          column5: '75',
          column6: '76',
          column7: '77',
          column8: '78',
          isRowSelected: false,
        },
        {
          variableName: 'ARTdia',
          column1: '71',
          column2: '72',
          column3: '73',
          column4: '74',
          column5: '75',
          column6: '76',
          column7: '77',
          column8: '78',
          isRowSelected: false,
        },
        {
          variableName: 'ARTsys',
          column1: '71',
          column2: '72',
          column3: '73',
          column4: '74',
          column5: '75',
          column6: '76',
          column7: '77',
          column8: '78',
          isRowSelected: false,
        },
        {
          variableName: 'ABPmean',
          column1: '71',
          column2: '72',
          column3: '73',
          column4: '74',
          column5: '75',
          column6: '76',
          column7: '77',
          column8: '78',
          isRowSelected: false,
        },
      ],
    },
    {
      frame: 3,
      isSelected: false,
      rowData: [
        {
          variableName: 'ICUmean',
          column1: '71',
          column2: '72',
          column3: '73',
          column4: '74',
          column5: '75',
          column6: '76',
          column7: '77',
          column8: '78',
          isRowSelected: false,
        },
        {
          variableName: 'ICUsys',
          column1: '71',
          column2: '72',
          column3: '73',
          column4: '74',
          column5: '75',
          column6: '76',
          column7: '77',
          column8: '78',
          isRowSelected: false,
        },
        {
          variableName: 'ICUgone',
          column1: '71',
          column2: '72',
          column3: '73',
          column4: '74',
          column5: '75',
          column6: '76',
          column7: '77',
          column8: '78',
          isRowSelected: false,
        },
      ],
    },
  ];

  selectedFrame(item: any, index: any) {
    !item.isSelected && this.removeSelection();
   this.selectedTableColumn = 0 ;
    console.log(item, index);
    item.isSelected = !item.isSelected;
    this.selectedFrameIndex = item.frame;
    item.rowData.forEach((element) => {
      element.isRowSelected = !element.isRowSelected;
    });
  }

  selectedRow(item, subItem, rowNumber) {
    ( item.isSelected || !subItem.isRowSelected) && this.removeSelection();
    
    console.log(item, subItem, rowNumber);
    this.selectedFrameIndex = item.frame;
    this.selectedCellRowIndex = rowNumber;
    subItem.isRowSelected = !subItem.isRowSelected;
    this.selectedTableColumn = 0 ;
    this.selectedCellColumnIndex = 0 ;
  }

  isRowSelected(frameNumber, isRowSelected, rowNumber) {
    return this.selectedFrameIndex == frameNumber && isRowSelected == true;
  }

  selectedCell(item, subItem , rowNumber, colNumber) {
    console.log(item, subItem , rowNumber, colNumber);
    this.removeSelection();
    this.selectedTableColumn = 0 ;
    this.selectedFrameIndex = item.frame;
    this.selectedCellRowIndex = rowNumber;
    this.selectedCellColumnIndex = colNumber;
    console.log( this.selectedFrameIndex,  this.selectedCellRowIndex,  this.selectedCellColumnIndex );

    if( this.selectedCellsStorage.frameIndex == item.frame && this.selectedCellsStorage.columnIndex == colNumber){
      if (!this.selectedCellsStorage.rowIndex.includes(rowNumber)) {
        this.selectedCellsStorage.rowIndex.push(rowNumber);
      }else{
        this.selectedCellsStorage.rowIndex.splice(this.selectedCellsStorage.rowIndex.indexOf(rowNumber), 1);
      }
    }else{
      this.selectedCellsStorage.frameIndex = item.frame;
      this.selectedCellsStorage.columnIndex = colNumber;
      this.selectedCellsStorage.rowIndex = [] ;
      this.selectedCellsStorage.rowIndex.push(rowNumber);
    }
    console.log(this.selectedCellsStorage);
  }

  
  selectedColumn(columnNumber){
    this.removeSelection();
    this.selectedCellColumnIndex = columnNumber;
    this.selectedTableColumn = columnNumber;
  }

  isCellSelected(item, subItem ,rowNumber, colNumber) {
    
    return (( this.selectedFrameIndex == item.frame && this.selectedCellColumnIndex == colNumber && this.selectedCellsStorage.rowIndex.includes(rowNumber)) 
    || (item.isSelected == true) || (subItem.isRowSelected == true) || this.selectedTableColumn == colNumber);
   
  }

  reset() {
    this.selectedFrameIndex = 0;
    this.selectedCellRowIndex = 0;
    this.selectedCellColumnIndex = 0;
  }

  removeSelection() {
    this.data.forEach((element) => {
      element.isSelected = false;
      element.rowData.forEach((ele) => {
        ele.isRowSelected = false;
      });
    });
  }

  /*  rowClicked: any;
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
  */
}
