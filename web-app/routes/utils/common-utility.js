//utility function to convert list to rows by column size
function convertListToRows(list, columnSize) {
    if (columnSize === undefined) {
        throw "Incorrect mandatory argument error, please check!!";
    }
    if (list === undefined || list.length == 0) {
        return [];
    }
    let rows = new Array();
    let rowIndex = -1;
    console.log(rows);
    for (let i = 0; i < list.length; i++) {
        if (i % columnSize == 0) {
            rows.push(new Array());
            rowIndex++;
        }
        rows[rowIndex].push(list[i]);
    }
    return rows;
}

module.exports = {
    convertListToRows
};