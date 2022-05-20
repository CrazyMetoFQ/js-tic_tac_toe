function listToMatrix(list, elementsPerSubArray) {

    // for converting flat list to 2d

    var matrix = [],
        i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }

    return matrix;
}

function allTheSame(array) {
    var first = array[0];
    return array.every(function(element) {
        return (element === first && element != null);
    });
}

class Board {


    constructor() {

        // this is to create a array of 9 nulls
        this.board = Array(9).fill(null);
        this.tiles = document.querySelectorAll(".tile");

        this.x_img = "<img src='assets/images/x.png'></img>";
        this.o_img = "<img src='assets/images/o.png'></img>";

        this.current_turn = 0; // 0 is x


    }

    handleClick(el, i) {

        // handles turn and click

        var i = i - 1
        let child_el = el.children[0];

        if (this.current_turn == 0) {
            // X turn
            this.board[i] = 'x';
            child_el.innerHTML = this.x_img;
            this.current_turn = 1;
        } else {
            // o turn
            this.board[i] = 'o';
            child_el.innerHTML = this.o_img;
            this.current_turn = 0;
        }

    }

    winCheck() {

        // checks if any player has won yet every turn

        this.md_board = listToMatrix(this.board, 3);

        let dg_r = [];
        let dg_l = [];

        for (let i = 0; i < this.md_board.length; i++) {

            const row = this.md_board[i];
            // console.log(row);

            if (allTheSame(row)) {
                return true
            } else {
                // pass
            }

            dg_l.push(row[i])
            dg_r.push(row.reverse()[i])

            // console.log("--");

            var prev_row = row;

        }

        console.log(allTheSame(dg_l));
        console.log(allTheSame(dg_r));

        // console.log("RL: BOARD:   ", this.board)
        // console.log("MD BOARD:   ", this.md_board)

    }


}

gameBoard = new Board


function tile_clicked(el, i) {


    // console.log("click", el, i);

    gameBoard.handleClick(el, i);

    gameBoard.winCheck();


    return true
}



// main_game()