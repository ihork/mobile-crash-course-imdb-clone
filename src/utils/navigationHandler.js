export function openFilmDetails(navigator, film) {
    console.log('log');
    navigator.push({
        screen: 'com.example.FilmDetails',
        passProps: {
            film
        }
    })
}