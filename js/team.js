recommend = [
    {worker:"eunseo", reco_src : "", reco_url : "", reco_comment : ""},
    {worker:"juho", reco_src : "./assets/image/menu/알리오올리오.png", reco_url : "", reco_comment : "좋아하는 요리: 파스타"},
    {worker:"bumik", reco_src : "./assets/image/menu/김치찌개.png", reco_url : "recipe.html?food=KIMCHI_JJIGAE&menu=kimchiStew&source=recommend&spicyLevel=보통맛&salinity=보통&mainProtein=참치", reco_comment : "좋아하는 요리: 김치찌개"},
    {worker:"gayoung", reco_src : "", reco_url : "", reco_comment : ""},
    {worker:"eunbyul", reco_src : "", reco_url : "", reco_comment : ""},
]

const eunseoCard = {
    photo : document.querySelector('#eunseo .team-worker-photo'),
    intro :  document.querySelector('#eunseo .team-worker-introduce'),
}

const juhoCard = {
    photo : document.querySelector('#juho .team-worker-photo'),
    intro :  document.querySelector('#juho .team-worker-introduce'),
}

const bumikCard = {
    photo : document.querySelector('#bumik .team-worker-photo'),
    intro :  document.querySelector('#bumik .team-worker-introduce'),
}

const gayoungCard = {
    photo : document.querySelector('#gayoung .team-worker-photo'),
    intro :  document.querySelector('#gayoung .team-worker-introduce'),
}

const eunbyulCard = {
    photo : document.querySelector('#eunbyul .team-worker-photo'),
    intro :  document.querySelector('#eunbyul .team-worker-introduce'),
}

const cards = { eunseo: eunseoCard, juho: juhoCard, bumik: bumikCard, gayoung: gayoungCard, eunbyul: eunbyulCard }

recommend.forEach(reco => {
    const card = cards[reco.worker]
    const el = document.querySelector(`#${reco.worker}`)
    const originalSrc = card.photo.src
    const originalIntro = card.intro.innerHTML

    el.addEventListener('mouseenter', () => {
        card.photo.src = reco.reco_src
        card.intro.innerHTML = reco.reco_comment
    })
    el.addEventListener('mouseleave', () => {
        card.photo.src = originalSrc
        card.intro.innerHTML = originalIntro
    })
    el.addEventListener('click', () => {
        window.location.href = reco.reco_url
    })
})

