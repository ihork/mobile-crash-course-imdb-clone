import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';
import stylesheet from './stylesheet';
import {getFilmsData} from '../../store/films/actions';
import * as selectors from '../../store/selectors';

class FilmList extends Component {
    componentDidMount() {
        this.props.dispatch(getFilmsData());
    }
    render() {console.log('FILMS', this.props.films);
        return (
            <View>
                <Text>FilmList {JSON.stringify(this.props.films)}</Text>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        films: selectors.getFilms(state)
    };
}

export default connect(mapStateToProps)(FilmList);