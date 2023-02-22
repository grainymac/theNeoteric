
export const getHomeArticles = () => {
    return fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=MsPVgpYhAG3JeoiWtahQfPG9tC3OlJ99')
    .then(response => response.json())
}

export const getArtsArticles = () => {
    return fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=MsPVgpYhAG3JeoiWtahQfPG9tC3OlJ99')
    .then(response => response.json())
}

export const getScienceArticles = () => {
    return fetch('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=MsPVgpYhAG3JeoiWtahQfPG9tC3OlJ99')
    .then(response => response.json())
}

export const getUsArticles = () => {
    return fetch('https://api.nytimes.com/svc/topstories/v2/us.json?api-key=MsPVgpYhAG3JeoiWtahQfPG9tC3OlJ99')
    .then(response => response.json())
}

export const getWorldArticles = () => {
    return fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=MsPVgpYhAG3JeoiWtahQfPG9tC3OlJ99')
    .then(response => response.json())
}