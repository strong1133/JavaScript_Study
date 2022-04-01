const { getCallbackBranch } = require("../response/responceDto");

const exceljs = require("exceljs");

const excel = {
    excelGen: async (req, res) => {
        const workbook = new exceljs.Workbook();
        const workSheet = await workbook.xlsx.readFile("services/pay.xlsx");
        
        let rows;

        let borderStyles = {
            top: { style: "thin" },
            left: { style: "thin" },
            bottom: { style: "thin" },
            right: { style: "thin" }
          };
        workSheet.eachSheet((sheet) => {
            sheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {
                console.log("Row " + rowNumber + " = " + JSON.stringify(row.values));
                // console.log(row.)
                if (rowNumber==2){
                    row.values = [,"2022년 04월분 급여지급명세서",,,,,,,,,,,"결재","팀장","과장","부장","이사","사장"]
                    row.getCell(1).font = {size:20, underline: "double"}
                    row.getCell(12).border = borderStyles;
                    row.getCell(13).border = borderStyles;
                    row.getCell(14).border = borderStyles;
                    row.getCell(15).border = borderStyles;
                    row.getCell(16).border = borderStyles;
                    row.getCell(17).border = borderStyles;
                }
                if (rowNumber==3){
                    // console.log("Value ::  " + row.values);
                }
                if (rowNumber==4){
                    // console.log("Value ::  " + row.values);
                }
            });
            sheet.getRow(2).alignment ={vertical: 'middle', horizontal: 'center'};
            sheet.getRow(3).alignment ={vertical: 'middle', horizontal: 'center'};
            sheet.getRow(4).alignment ={vertical: 'middle', horizontal: 'center'};
        });
        // console.log(rows[''])

        await workbook.xlsx.writeFile('./dumy.xlsx')
    },
};

module.exports = excel;
