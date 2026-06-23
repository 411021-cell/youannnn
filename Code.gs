function doPost(e){

  const sheet =
    SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Sheet1");

  const data =
    JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.weight,
    data.activity,
    data.protein
  ]);

  return ContentService
    .createTextOutput("success");
}
