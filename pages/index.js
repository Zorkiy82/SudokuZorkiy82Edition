import { Cell } from "../scripts/components/Cell.js";

const initialArray =[
  [0,3,1,6,0,7,0,0,0],
  [6,0,0,8,0,0,2,5,7],
  [8,0,0,0,9,0,6,0,3],
  [4,0,0,0,0,0,8,3,2],
  [0,1,0,0,6,9,0,0,0],
  [7,0,3,2,4,0,0,0,6],
  [9,0,2,4,0,1,0,7,8],
  [0,8,5,0,0,0,0,0,9],
  [3,0,4,0,0,0,0,6,1],
];

let cellsArray = [[],[],[],[],[],[],[],[],[]]

let cellsList = document.querySelectorAll('.field__cell');
let counter = 0;
for (let x=0; x<9; ++x){
  for (let y=0; y<9; ++y){
    // debugger;
    cellsArray[x][y]= new Cell(cellsList[counter],initialArray[x][y]);
    cellsArray[x][y].initialRender();
    ++counter;
  }
}

cellsList = {};
