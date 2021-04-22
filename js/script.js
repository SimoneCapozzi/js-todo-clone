$(function(){
  
  //lista esterna
  var arrList = [
    "Creare HTML con input ul li",
    "Nel JS creare un array con stringhe",
    "Fare un ciclo for dell'array e append in ul",
    "Al click del cestino eliminare il parent",
    "Intercettare il keyup di enter per aggiungere e ripulire",
  ];

  //leggo il contenuto e lo stampo
  for(var i = 0; i < arrList.length; i++){
    var strList = arrList[i];
    
    /* //soluzione 1 per visualizzare a schermo con stringa

    var strHtml = '<li><p class="text">' + strList +'</p><i class="fas fa-trash"></i></li>';
    //do a strHtml il valore di li con al posteo di "scritta" la stringa del mio array list (che prima era arrList poi l'abbiamo fatta diventra strLista)

    $('.app ul').append(strHtml);
    //seleziono ul e gli aggiungo la stringa Html che abbiamo fatto facendo in modo che prende il posto su html degli li che abbiamo commentato visualizzando la nostra lista array; */ 


    //soluzione 2 per visualizzare a schermo con clone

    var item = $('.template li').clone();
    $(item).find('.testo').append(strList);
    $('.app ul').append(item);

    //cancellare gli elementi del cestino

    $(document).on('click', '.fa-trash', function(){//diamo la funzione di rimuovere un appunto dalla lista cliccando su (fa-trash = cestino)
      $(this).parent().remove();
    })

    //aggiungo elemento alla lista scritto dentro la barra imput

    $('.app input').keyup(function(event){
      if(event.which === 13){
        var strList = $(this).val().trim();
        console.log(strList);
        console.log(strList.length); 

        if(strList.length > 3){     //pushamo se la parola è maggiore di 3
          var item = $('.template li').clone();
          console.log(item);
          $(item).find('.testo').append(strList);
          $('.app ul').append(item);
          $(this).val('');
        }
      }
    })


  }

});