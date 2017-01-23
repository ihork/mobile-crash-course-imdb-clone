export function openFilmDetails(navigator, filmId) {
    navigator.push({
        screen: 'com.example.FilmDetails',
        passProps: {
            filmId
        }
    })
}