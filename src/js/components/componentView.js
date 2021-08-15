export const newsCard = (data, type) => {
    return `<div class="news__card ${type === 'big' ? 'news__card--big' : ''} ">
              <div class="news__card__image"> <img src='${
                  data.imageUrl
              }'/> </div>
              <div class="news_caption__area">
                <p class="news_caption__area__date" > ${data.date}</p>
                <h4 class="news_caption__area__title_small"> <a class="news__link" href="berita.html?nId=${
                    data.id
                }"> ${
        type && type === 'big'
            ? data.title
            : data.title.substring(0, 40) + '...'
    }</a></h4>
                ${
                    type && type === 'big'
                        ? `<div class="news_caption__area__description" > ${data.content.substring(
                              3,
                              80
                          )} <a class="primary_link" href="berita.html?nId=${
                              data.id
                          }">...Selengkapnya</a></div>`
                        : ''
                } 
              </div>
          </div>`
}

export const playerCard = (data) =>
    `<div class=" player_card">
            <img class="player_img" src="${data.imageUrl}"/>
            <div class=" player_info">
                <p class="player_sector">${data.sector}</p>
                  <h4 class="player_name">${data.name}</h4>
                <a class="player_button" href="pemain.html?pId=${data.id}">INFO PROFIL</a>
            </div>
      </div>`

export const newsDetail = (data) => {
    return `<div class="container">
                <div class="news-detail__image">
                     <img src="${data.imageUrl}" alt="">
                </div>
                <div class="news-detail__title">
                    <h3>${data.title}</h3>
                    <p>${data.date} <span class="divider">|</span> <span>${data.author}</span></p>
                </div>
                <div class="news-detail__container">
                    <div class="news-detail__content">
                    ${data.content}
                    </div>
                </div>
            </div>`
}

export const playerDetail = (data) => {
    const { name, born, club, city, sector, imageUrl, hand } = data
    const labelPlayer = (label, content) =>
        `<div class="label-group">
                <p class="label-name">${label}</p>
                <p class="label-content" >${content}</p>
            </div>`

    return ` 
            <div class="players-profile-section" >
                <div class="container profile-area-container">
                    <div class="profile-player-name">
                        <h3> ${name}</h3>
                    </div>
                    <div class="profile-player-container">
                        <div class="image-area">
                            <img class="profile-image" src="${imageUrl}"/>
                        </div>
                        <div class="profile-player-detail">
                            ${labelPlayer('club', club)}
                            ${labelPlayer('lahir', born)}
                            ${labelPlayer('kota', city)}
                            ${labelPlayer('sektor', sector)}
                            ${labelPlayer('tangan', hand)}
                        </div>
                    </div>
                </div>
            </div>`
}

export const sectionTitle = (title, link) =>
    `
     <div class="section_title">
      <h3>${title}</h3>
      ${
          link &&
          `<a href="${link}" class="section_title__link">SEMUA ${title}</a>`
      }
    </div>`
