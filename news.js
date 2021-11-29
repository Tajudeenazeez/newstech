let createComment;
let news= {};


const aNews =(id) => fetch(`${url}/news/${id}`)
  .then(response => response.json())
  .then(json => {
    console.log(json)
    news = json
    console.log(news)

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