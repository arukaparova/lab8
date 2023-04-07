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
     
    $("button").click (function (event){
            score = 0
            for(var i=0; i<questions.length; i++){
           $("input[name=q"+i+"]").each (function (index){
                  choice = $(this).parent().text(); 
                  if ($( this ).prop("checked") == true && answers [0] == choice){
                    score += 1;
                  }

                  if ($( this ).prop("checked") == true && answers [1] == choice){
                    score += 1;
                 }

                  if ($( this ).prop("checked") == true && answers [2] == choice){
                    score += 1;
                }

                  if ($( this ).prop("checked") == true && answers [3] == choice){
                    score += 1;
                }

                  if ($( this ).prop("checked") == true && answers [4] == choice){
                    score += 1;
                }

           });
          }
           
      $("#quiz-box").append ("<h2>Your score is: " + score + "</h2>");
      }); 

})