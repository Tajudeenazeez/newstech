//const url = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1"
//const main = document.querySelector("main")

// const data = (response) => {
//  return response.ok ? response.json() : Promise.reject(response);
// }

// fetch(`${url}/news/${id}`)
//   .then(data)
//   .then(console.log)
//   .catch(console.error);



// const newsPage = (data) => {
//   return(
//     `<article>  
//       <header> 
//         <h1> 
//           <a href= ${data.url}> ${data.title}</a> 
//         </h1>
//         <img src=${data.avatar}/> 
//      </header>
//      <h3> Author: ${data.author}</h3> 
//     </article>`
//   )
// }

// const displayNews = () => {
//   main.innerHTML = newsPage
  
//   }

// const getSingleNews = () => {
//   fetch(`${url}/news/${_id}`)
//     .then(data)
//     .then(displayNews)
//     .catch(console.error);
// }
//  getSingleNews()