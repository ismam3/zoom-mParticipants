function download(fileName, text){
    var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', fileName);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

let participants_ul = document.querySelectorAll(".participants-item__display-name")

let participants = ""
participants_ul.forEach((i, index)=>{
    if(index===0){
        participants = participants + ""
    }
    else{
        participants = participants + i.innerHTML + "\n";
    }
})
download("hello", participants)