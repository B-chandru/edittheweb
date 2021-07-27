(function (){
    if (document.designMode) {
  const confirmation =   confirm("Click ok to edit this page") ;
        if(confirmation){
            document.designMode="on";
        }else if(!confirmation){
            alert("This webpage will not be editable as your wish :)");
        }
    }
})()