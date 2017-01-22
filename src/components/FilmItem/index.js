import React, {Component, PropTypes} from 'react';
import {View, Text, Image} from 'react-native';
import stylesheet from './stylesheet';
import filmsDbService from '../../services/FilmsDbService';

export default class FilmItem extends Component {
    static propTypes = {
        film: PropTypes.object.isRequired
    };

    render() {
        const {film} = this.props;
        const imageUrl = filmsDbService.getImageUrl(film.poster_path);
        return (
            <View style={stylesheet.filmItem}>
                <Image
                    style={stylesheet.image}
                    source={{uri: imageUrl}}
                />
                <Text style={stylesheet.title}>{film.title}</Text>
                <Text style={stylesheet.year}>{` (${film.release_date.split('-')[0]}) `}</Text>
            </View>
        );
    }
}