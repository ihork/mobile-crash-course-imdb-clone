import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import stylesheet from './stylesheet';

export default class FilmItem extends Component {
    static propTypes = {
        film: PropTypes.object.isRequired
    };

    render() {
        return (
            <View style={stylesheet.filmItem}>
                <Text>{this.props.film.id}</Text>
            </View>
        );
    }
}