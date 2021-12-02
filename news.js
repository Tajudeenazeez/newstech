let createComment;
let news= {};
let id=[];
let data=[];
//const url = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news/"

//let url_str = 'http://demo.com?id=100&cat=js';

//let url = new URL(url_str);
//let search_params = url.searchParams;

// get value of "id" parameter
// "100"
//console.log(search_params.get('id'));

// let urlIds = new URL(url);
// let search_params = urlIds.searchParams;

//  id = search_params.getAll('id');

// // ["js", "ui", "css"]
// console.log(id);

const aNews =(id) => fetch(`${url}/news/${id}`)

  .then(response => response.json())
  .then(json => {
    //console.log(json)
    news = json
    //console.log(news)

    singleNews();
    makeComment();
    aNews();
  })
  .catch(console.error)


const singleNews = () => {
   const data = news 
  `<article>  
        <header> 
          <a href= ${news.id}>
          <img src=${news.avatar} alt= image />
          </a> 
        <h1> 
          <a href= ${news.id}> ${news.title}</a> 
        </h1>
      </header>
      <h3> Author: ${news.author}</h3> 
      </article>`;
  document.getElementById("single-news").innerHTML = data;
}

const makeComment = () => {
  createComment =`
        <label for="comment">
          <textarea name="comment" id="comment" cols="30" rows="10" placeholder="write your comment"></textarea>
        </label>
  `
  document.getElementById("form-item").innerHTML = createComment
}