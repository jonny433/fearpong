function readFile(){
  jQuery.get('questions.txt', function(txt){
    $('#output').text(txt);
  }
}
