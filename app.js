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

        console.log(this.board)
    }

    winCheck() {

        // checks if any player has won yet every turn

        this.md_board = Array();

        for (let i = 0; i < 3; i++) {
            let els = this.board.slice(i, i + 3);
            console.log(els);
            this.md_board.push(els);
        }

        console.log("RL: BOARD:   ", this.board)
        console.log("MD BOARD:   ", this.md_board)




    }


}

gameBoard = new Board


function tile_clicked(el, i) {


    console.log("click", el, i);

    gameBoard.handleClick(el, i);

    gameBoard.winCheck();


    return true
}



// main_game()