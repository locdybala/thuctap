import {content} from '../../dist/mock-data.js'

    var styles = "./dist/style.css";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href=escape(styles);
    console.log(newSS);
    document.getElementsByTagName("head")[0].appendChild(newSS);
  
  console.log(content)
  const renderHtml = (data) => {
    const htmlResult = data.map(
      (obj) =>
        `  <div class="container">
            <div class="information">
               <div class="information__item">
                 <div class="information__logo">
                     <img src="${obj.logo}" alt="">
                 </div>
                  <div  class="information__img">
                      <img src="${obj.img}" alt="">
                  </div>
                  <div class="information__title">
                      <p>${obj.title}</p>
                  </div>
                <div class="information__link">
                    <a href="">${obj.link}</a> 
                    <p> tài trợ</p>
                </div>
              </div>
             </div>
             </div>
            `
    )
    return htmlResult.join('')
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('information')
    newsContainer.innerHTML = renderHtml(content)
  })
  