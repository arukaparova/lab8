let h1 = document.createElement("h1");
    h1.innerText = "NU Green Society quiz";
    h1.style.color = "green";
    document.body.appendChild(h1);
    
$(document).ready(function(){

    answers = ["35", "yellow", "450", "glass", "Netherlands"]
    questions = ["How many plastic bottles are needed to produce one jacket?","What color are the bins for plastic on campus?","How long does it take for a plastic bottle to decompose?","What material can be recycles infinite number of times?","Where is the world's largest bicycle parking garage located?"]
    choice_options = [["15","20","30","35"],["grey","blue","yellow","green"],["450","350","250","150"],["glass","paper","plastic","metal"],["Japan","Netherlands","Switzerland","Germany"]]

    quizBox = $("#quiz-box"); // Jquery
    for (let i = 0; i < questions.length; i++) {
        quizBox.append ("<div class='questions-"+i+"'>"); 
        $('.questions-'+i).append ("<p> "+questions[i]+" </p>");
        $('.questions-'+i).append ("<label><input type='radio' name='q"+i+"' value='a'>"+choice_options[i][0]+"</label>")
        $('.questions-'+i).append ("<label><input type='radio' name='q"+i+"' value='a'>"+choice_options[i][1]+"</label>")
        $('.questions-'+i).append ("<label><input type='radio' name='q"+i+"' value='a'>"+choice_options[i][2]+"</label>")
        $('.questions-'+i).append ("<label><input type='radio' name='q"+i+"' value='a'>"+choice_options[i][3]+"</label>")
      }

    score = 0;
    reset = false;

    //Function to check the answers and display the score
    $("button").click(function(event) {
      score = 0; // reset the score before computing
      for (let i = 0; i<questions.length; i++) {
        let choice = $("input[name='q" + i + "']:checked").val();
        if ($(this).prop("checked") == true && answers [i] == choice){
          score =+ 1;
        }
      }
      $("#quiz-box").append("<h2>Your score is: " + score + "</h2>");
    });  

})