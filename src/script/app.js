// $articles = document.querySelector("#articles");

// function loadDate() {
//     fetch(" https://blog-post-production-b61c.up.railway.app/api/v1/blogs")
//         .then(Response => Response.json())
//         .then(data => renderArticles(data))
// }
// loadDate()
// const renderArticles = (data) => {
//     console.log(data)
//     data.data.forEach(element => {
//         console.log(element)
//         const $div = document.createElement("div");
//         $div.className = "  card";
//         $articles.innerHTML = `
//         <img src="${element.image}"/>
   
//       <h3>${element.title}</h3>
//       <p>books enrich our spirituality and develop our ideas about artistic image${element.description} </p>
     
//     <div class="avatar-wrapper">
//         <div style=" display: flex;flex-direction: column;">
//         <strong>Ibrokhim Jalalov</strong>
//         <p>Author</p>
//         </div>        
//     </div>
//         `
//         $articles.appendChild($div);
//     });
// }


const $swipperWrapper = document.querySelector(".swiper-wrapper");
const $articles = document.querySelector(".articles")


const truncate = (text,limit)=> {
  if (text.length > limit ) {
    return text.slice(0, limit) + "... "
  }
  return text
}


const renderData = (products) => {
  const $swiperFragment = document.createDocumentFragment();
  products.forEach(product => {
    console.log(product)
    const $productCard = document.createElement("div");
    $productCard.className = "product-card"
    $productCard.innerHTML = `
      <div class="card-wrapper">
        <div class="image-wrapper">
            <a href="../src/pages/product.html?product-id=${product._id}">
              <img class="picture" src="${product.image}" />
            </a>
        </div>
        <div class="card-content">
          <h3 class="card-title">${truncate(product.title,30)}</h3>
          <p class="card-text">${truncate(product.description,80)}</p>
        </div>
        <div class="card-bottom">
          <div class="avatar-wrapper">
            <img class="avatar" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/800px-IntelliJ_IDEA_Icon.svg.png" />
          </div>
          <ul>
              <li><h4 class="card-author">Ibrokhim Jalalov</h4></li>
              <li><p class="card-subtitle">Author</p></li>
          </ul>
        </div>
      </div>
    `
    $swiperFragment.appendChild($productCard)
 
  });
  $articles.appendChild($swiperFragment)
}



const loadData = () => {
fetch("https://blog-post-production-b61c.up.railway.app/api/v1/blogs")
    .then(response => response.json())
    .then(data => renderData(data.data))

}
loadData()
