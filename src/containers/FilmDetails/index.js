import React, {Component, PropTypes} from 'react';
import {View, Text, Image} from 'react-native';
import stylesheet from './stylesheet';
import filmsDbService from '../../services/FilmsDbService';
import { connect } from 'react-redux';
import * as selectors from '../../store/selectors';

class FilmDetails extends Component {
    static propTypes = {
        filmId: PropTypes.number.isRequired,
        film: PropTypes.object.isRequired
    };

    render() {
        const {film} = this.props;
        const imageUrl = filmsDbService.getImageUrl(film.poster_path);
        return (
            <View style={stylesheet.filmItem}>
                <Text style={stylesheet.title}>{film.title}</Text>
                <View style={stylesheet.info}>
                    <Image
                        style={stylesheet.image}
                        source={{uri: imageUrl}}
                    />
                    <View>
                        <Text style={stylesheet.details}>{`Release date: ${film.release_date}`}</Text>
                        <Text style={stylesheet.details}>{`Average Vote: ${film.vote_average}`}</Text>
                        <Text style={stylesheet.details}>{`Count of Votes: ${film.vote_count}`}</Text>
                        <Text style={stylesheet.details}>{`Popularity: ${film.popularity}`}</Text>
                        <Text style={stylesheet.details}>{`Is Adult: ${film.adult}`}</Text>
                        <Text style={stylesheet.details}>{`Language: ${film.original_language}`}</Text>
                    </View>
                </View>
                <Text style={stylesheet.overview}>{film.overview}</Text>
            </View>
        );
    }
}


function mapStateToProps(state, props) {
    return {
        film: selectors.getFilmById(state, props.filmId)
    };
}

export default connect(mapStateToProps)(FilmDetails);