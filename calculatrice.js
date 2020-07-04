var equation = "";
var affichageEquation = "";
var tab=[];
  function ajouter(num) {
      equation = equation + num;
      if(num == '+' || num == '-' ||num == '*' ||num == '/'){
          affichageEquation = "";
      }else {
          affichageEquation = affichageEquation + num;
      }
    document.getElementById('input1').value = affichageEquation;
   }
   function resultat() {
       var operation = equation;
       equation = eval(equation);
       tab.push(operation + ' = ' + equation);
       addHistorique(operation + ' = ' + equation);
       console.log(tab);
       document.getElementById('input1').value = equation;

   }

   function addHistorique(operation) {
       var node = document.createElement("LI");                 // Create a <li> node
       var textnode = document.createTextNode(operation);         // Create a text node 7 + 5 = 12
       node.appendChild(textnode);                         // Append the text to <li>
       document.getElementById("historique").appendChild(node);
   }