export const newsCard = (data, type) => {
    const { id, title, date, content, imageUrl } = data
    return `<div class="news__card ${type === 'big' ? 'news__card--big' : ''} ">
              <div class="news__card__image"> <img loading="lazy" src='${imageUrl}'/> </div>
              <div class="news_caption__area">
                <p class="news_caption__area__date" > ${date}</p>
                <h4 class="news_caption__area__title_small"> <a class="news__link" href="berita.html?nId=${id}"> ${
        type && type === 'big' ? title : title.substring(0, 40) + '...'
    }</a></h4>
                ${
                    type && type === 'big'
                        ? `<div class="news_caption__area__description" > ${content.substring(
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

export const playerCard = ({ id, imageUrl, sector, name }) =>
    `<div class=" player_card">
            <img loading="lazy" class="player_img" src="${imageUrl}"/>
            <div class=" player_info">
                <p class="player_sector">${sector}</p>
                  <h4 class="player_name">${name}</h4>
                <a class="player_button" href="pemain.html?pId=${id}">INFO PROFIL</a>
            </div>
      </div>`

export const newsDetail = ({ imageUrl, title, date, author, content }) => {
    return `<div class="container">
                <div class="news-detail__image">
                     <img loading="lazy" src="${imageUrl}" alt="">
                </div>
                <div class="news-detail__title">
                    <h3>${title}</h3>
                    <p>${date} <span class="divider">|</span> <span>${author}</span></p>
                </div>
                <div class="news-detail__container">
                    <div class="news-detail__content">
                    ${content}
                    </div>
                </div>
            </div>`
}

export const playerDetail = ({
    name,
    born,
    club,
    city,
    sector,
    imageUrl,
    hand,
}) => {
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
                            <img loading="lazy" class="profile-image" src="${imageUrl}"/>
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
