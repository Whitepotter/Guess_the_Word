function addUser(){
    player_1 = document.getElementById("player_1_name_input").value;
    player_2 = document.getElementById("player_2_name_input").value;
    
    localStorage.setItem("player_one_name",player_1);
    localStorage.setItem("player_two_name",player_2);

    window.location = "game_page.html";
}