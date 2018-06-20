// DECLARATION FONCTION VALIDER
function valider(){
  // DECLARATION ET RECUPERATION DES VARIABLES
  var lastname = document.getElementById('lastname').value;
  var firstname = document.getElementById('firstname').value;
  var city = document.getElementById('city').value;
  // VERIFICATION DES VARIABLES
   if(/^[a-zA-Z\-àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/.test(lastname && firstname && city) == true){
    alert("Nom : " + lastname + "\nPrénom : " + firstname + "\nVille : " + city);
  }else{
    // ECHEC
    alert('Ce n\'est pas une chaine de caractères');
  }
};
