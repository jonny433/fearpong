let file = "questions.txt";

function readFile(){
    jQuery.get(file,function(txt){
        var lines = txt.split("\n");
        for (var i = 0, len = lines.length; i < len; i++) {
            lines.push(i);
        }
    });
}

console.
