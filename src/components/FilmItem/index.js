import React, {Component, PropTypes} from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import stylesheet from './stylesheet';
import filmsDbService from '../../services/FilmsDbService';
import * as navigationHandler from '../../utils/navigationHandler';

export default class FilmItem extends Component {
    static propTypes = {
        film: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired
    };

    render() {
        const {film, navigator} = this.props;
        const imageUrl = filmsDbService.getImageUrl(film.poster_path);
        return (
            <TouchableHighlight
                underlayColor={ 'transparent' }
                onPress={() => {
                    navigationHandler.openFilmDetails(navigator, film)
                }}
            >
                <View style={stylesheet.filmItem}>
                    <Image
                        style={stylesheet.image}
                        source={{uri: imageUrl}}
                    />
                    <View style={stylesheet.details}>
                        <View style={stylesheet.header}>
                            <Text style={stylesheet.title}>{film.title}</Text>
                            <Text style={stylesheet.year}>{` (${film.release_date.split('-')[0]}) `}</Text>
                        </View>
                        <Text style={stylesheet.overview}>{film.overview}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}