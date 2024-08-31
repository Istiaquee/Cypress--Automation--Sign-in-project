// cypress/plugins/readExcel.js
const XLSX = require('xlsx');

function readExcel(filePath) {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0]; // assuming data is in the first sheet
  const worksheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  return jsonData;
}

module.exports = { readExcel };
