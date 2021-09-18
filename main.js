function download(fileName, text){
    var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', fileName);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

var participants_ul = document.querySelectorAll(".participants-item__display-name")
if(participants_ul === null || participants_ul === "" || participants_ul===undefined){
    alert("Please Open the participations section!")
}
else{
    let participants = ""
    participants_ul.forEach((i, index)=>{
        if(index===0){
            participants += ""
        }
        else{
            participants += i.innerHTML + "\n";
        }
    })
    var dateMethod = new Date();
    var date = dateMethod.getDate();
    var month = dateMethod.getMonth();
    var year = dateMethod.getFullYear();
    var hours = dateMethod.getHours();
    var minute = dateMethod.getMinutes();
    var filename = date.toString()+month.toString()+year.toString()+ "_"+hours.toString()+minute.toString();
    download(filename, participants)
}