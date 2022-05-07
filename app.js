// 
//

tiles = document.querySelectorAll(".tile")

tiles.forEach(function(t, i) {
    t.addEventListener("click", tile_clicked);
})


function tile_clicked() {
    console.log("click");
    return True
}

// function change_turn(current_turn) {

// }

// function main_game() {
//     won = false;
//     turnOf = 0;
//     while (!won) {

//         if (tile_clicked()) {

//         } else {
//             null;
//         }

//     }

// }