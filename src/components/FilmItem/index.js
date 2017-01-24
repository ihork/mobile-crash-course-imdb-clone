import React, {Component, PropTypes} from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import stylesheet from './stylesheet';

export default class FilmItem extends Component {
    static propTypes = {
        film: PropTypes.object.isRequired,
        filmImageUrl: PropTypes.string,
        onPress: PropTypes.func.isRequired
    };

    render() {
        const {film, onPress, filmImageUrl, testID} = this.props;
        return (
            <TouchableHighlight
                underlayColor={ 'transparent' }
                onPress={() => {onPress(film.id)}}
            >
                <View style={stylesheet.filmItem}
                      testID={testID}>
                    <Image
                        style={stylesheet.image}
                        source={{uri: filmImageUrl}}
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