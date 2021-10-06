const content = [
    {
      id: 1,
      logo:'app/img/adxlogo2.png',
      img:'app/img/Rectangle.png',
      title: 'Hè này, trải nghiệm kỳ nghỉ 5 sao tại thiên đường nghỉ dưỡng Vinpearl 2021',
      link:'thegioididong.vn'
    },
    {
        id: 2,
        logo:'app/img/adxlogo2.png',
        img:'app/img/Rectangle.png',
        title: 'Hè này, trải nghiệm kỳ nghỉ 5 sao tại thiên đường nghỉ dưỡng Vinpearl 2021',
        link:'<img src="app/img/image9.png" alt=""/>'
    },
  ]
  console.log(content)
  const renderHtml = (data) => {
    const htmlResult = data.map(
      (obj) =>
        ` <div class="information__item">
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
    </div>`
    )
  
    return htmlResult.join('')
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('information')
    newsContainer.innerHTML = renderHtml(content)
  })
  