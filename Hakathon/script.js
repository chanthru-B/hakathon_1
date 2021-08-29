function searchbar(){
  const main = document.createElement('div');
  main.innerHTML =`
  <div class=mainbox></div>
  <form>
    <label for="searchbar">Enter a name</label>
    <input type="text" placeholder="Eg:naruto" class="searchon" name="searchbar">
    <button type="button" class="searchinglist" onclick='search()'>Search</button>
  </form>
  `;
  document.querySelector(".box").append(main);
}
searchbar();

function search(){
  const test = document.querySelector('.searchon');
  const inputtext = test.value;
  fetching(inputtext);
}
search();

async function fetching(input){
    const data = await fetch(`https://api.jikan.moe/v3/search/anime?q=${input}`);
    const convertingapi = await data.json();
    databox(convertingapi.results);
}

function databox(boxes){
  var mainDiv = document.createElement('div');
  mainDiv.setAttribute("class", "img-display")
  for(let i = 0; i <= boxes.length; i++){
    let result = document.createElement('div');
    // serchresultbox.className="img-display";
    result.setAttribute("class", "imgView")
    result.innerHTML = `
    <img src=${boxes[i].image_url}>`;
    document.querySelector(".box").append(mainDiv);
    mainDiv.append(result);
    
  }
  
}
