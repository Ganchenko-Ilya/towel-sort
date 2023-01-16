
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix === undefined ){
        return [];
    }else{
    for(i = 0; i < matrix.length;i++){
        if(i % 2 !== 0 ){
            matrix[i].reverse();
        }
    }
    let result = [];
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            result.push(matrix[i][j]);
        }
    }

    return result;
}}







