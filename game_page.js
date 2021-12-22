player_one_name = localStorage.getItem("player_one_name");
player_two_name = localStorage.getItem("player_two_name");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;

document.getElementById("player_1_name").innerHTML = player_one_name + ": ";
document.getElementById("player_2_name").innerHTML = player_two_name + ": ";

document.getElementById("player_question").innerHTML = "Question turn: " + player_one_name;
document.getElementById("player_answer").innerHTML = "Answer turn: " + player_two_name;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lower case = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_of_word = Math.floor(word.length/2);
    charAt2 = word.charAt(length_of_word);
    console.log(charAt2);

    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3); 

    remove_charAt1 = word.replace(charAt1,"_");
    remove_charAt2 = remove_charAt1.replace(charAt2,"_");
    remove_charAt3 = remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);

    question_word = "<h4 id = 'word_display'>Q. " + remove_charAt3 + "</h4>";
    input_box = "<br> Answer: <input type = 'text' id= 'input_check_box' placeholder = 'Type in the word'>";
    check_button = "<br><br> <button class = 'btn btn-info' onclick = 'check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

question_var = "player1";
answer_var = "player2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log(answer);

    if(answer == word){
        if(answer_var == "player1"){
            player_1_score = player_1_score + 1;
            document.getElementById("player_1_score").innreHTML = player_1_score;
        }
        else{
            player_2_score = player_2_score + 1;
            document.getElementById("player_2_score").innerHTML = player_2_score;
        }
    }

    if(answer_var == "player1"){
        answer_var = "player2";
        document.getElementById("player_answer").innerHTML = "Answer turn: " + player_two_name;
    }
    else{
        answer_var = "player1";
        document.getElementById("player_answer").innerHTML = "Answer turn: " + player_one_name;
    }

    if(question_var == "player1"){
        question_var = "player2";
        document.getElementById("player_question").innerHTML = "Question turn: " + player_two_name;
    }
    else{
        question_var = "player1";
        document.getElementById("player_question").innerHTML = "Answer turn:" + player_one_name;
    }

    document.getElementById("output").innerHTML = "";
}