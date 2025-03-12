console.log("Test print");

// Defining vars
const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let dashbaord;
let listSheets;

// function to log info about our viz
function logWorkbookInformation() {
  workbook = viz.workbook;
  console.log(`The workbook name is "${workbook.name}"`);

  // get array of dashboards within workbook
  let sheets = workbook.pubslishedSheetsInfo;
  sheets.forEach((element) => {
    index = element.index;
    console.log(`The sheet with index ${index} is ${element.name}`);
  });

  // Print out active sheet name
  vizActiveSheet = workbook.activeSheet;
  console.log(`The active sheet is ${index} is ${vizActiveSheet.name}`);

  // list sheets
  listSheets = vizActiveSheet.worksheets;
  listSheets.forEach((element) => {
    index = element.index;
    console.log(`The sheet with index ${index} is ${element.name}`);
  });
}

const oregonWashingtonButton = document.getElementById("oregon_and_washington");
const clearFilterButton = document.getElementById("clear_filter");
const undoButton = document.getElementById("undo");

function oregonWashFunction() {
  console.log(oregonWashingtonButton.value);

  listSheets.forEach((element) => {
    element.applyFilterAsync("State", ["Washington", "Oregon"], "replace");
  });
}

oregonWashingtonButton.addEventListener("click", oregonWashFunction);

function clearStateFilter() {
  console.log(clearFilterButton.value);

  listSheets.forEach((element) => {
    element.clearFilterAsync("State");
  });
}

clearFilterButton.addEventListener("click", clearStateFilter);

function unDo() {
  console.log(undoButton.value);
  viz.undoAsync();
}

undoButton.addEventListener("click", unDo);

viz.addEventListener("firstinteractive", logWorkbookInformation);
