const url = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1"
const main = document.querySelector("main")
let data = [];
let dataPages = [];
let selectedPages;
let selectedIndex;
let startIndex;
let endIndex;
let pageList;

// const data = (response) => {
//  return response.ok ? response.json() : Promise.reject(response);
// }
fetch(`${url}/news/`)
  .then(response => response.json())
  .then(json =>  {
    //console.log(json)
    data = json;
    //paging
      let pageNumber = data.length / 10;
      const pageNumberRemainder = pageNumber % 1;
      const pageNumberWithoutRemainder = Math.floor(pageNumber);
      if (pageNumberRemainder > 0 ) {
        pageNumber = Number(pageNumberWithoutRemainder) + 1;
        dataPages = Array(pageNumber).fill(1).map((item, index) => index + 1);
        startIndex = 0;
        endIndex = 10;
        selectedPages = 1;
      }
      //fill the paging list
      injectPagination();
      //start mapping the list
      displayNews();
      
  })
  .catch(console.error);

const  injectPagination = () => {
    pageList =`
        <li class="page-item">
          <a href="javascript:void(0)" onclick="goPrevious()">Previous</a>
        </li>
        <li class="page-item">
          <span class="page-link" id="spanSelectedPage">${selectedPages} | ${dataPages.length}</span>
        </li>
        <li class="page-item">
          <a href="javascript:void(0)" onclick="goNext()"> Next</a>
        </li>        
        `;
    document.getElementById("paginate").innerHTML = pageList;
  }



const displayNews = () => {
  const news = data ? data
  .slice(startIndex, endIndex)
  .map((dat, index) => 
  `<article>  
        <header> 
          <a href= /${dat.id}/singleNews.html>
          <img src=${dat.avatar} alt= image />
          </a> 
        <h1> 
          <a href= /${dat.id}/singleNews.html> ${dat.title}</a> 
        </h1>
      </header>
      <h3> Author: ${dat.author}</h3> 
      </article>`
  ).join(""): "";
  document.querySelector("main").innerHTML = news;
}

goPrevious = () => {
  if (selectedPages !=1) {
    startIndex -= 10;
    endIndex -= 10;
    selectedPages--;
    displayNews();
    injectPagination();
  }
};
goNext = () => {
  if (selectedPages < dataPages.length) {
    startIndex += 10;
    endIndex += 10;
    selectedPages++;
    displayNews();
    injectPagination();
  }
};

const showError = () => {
  main.innerHTML = (
    "<p>" +
      "<strong>Sorry, there seems to be a problem. Kindly check your connection.</strong>" +
    "</p>"
  );
}
