function generateNumberPattern(totalRows) {
    let currentNumber = 1;

    for (let row = 1; row <= totalRows; row++) {
        let output = "";

        for (let col = 1; col <= row; col++) {
            output += currentNumber;
            currentNumber++;

            if (col < row) {
                output += " ";
            }
        }

        console.log(output);
    }
}

generateNumberPattern(5);