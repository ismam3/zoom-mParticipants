document.getElementById("button").addEventListener("click",()=>{
  chrome.tabs.query({active:true,currentWindow:true},(activeTabs)=>{
    chrome.tabs.executeScript(activeTabs[0].id, {file:"main.js"})
  })
})