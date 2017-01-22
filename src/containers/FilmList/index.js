import React, {Component, PropTypes} from 'react';
import {View, Text, ListView} from 'react-native';
import { connect } from 'react-redux';
import stylesheet from './stylesheet';
import {getFilmsData} from '../../store/films/actions';
import * as selectors from '../../store/selectors';
import FilmItem from '../../components/FilmItem';

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

class FilmList extends Component {
    componentDidMount() {
        this.props.dispatch(getFilmsData());
    }

    render() {
        return (
            <ListView
                style={stylesheet.container}
                dataSource={ds.cloneWithRows(this.props.filmList)}
                renderRow={(item) =>
                    <FilmItem
                        film={item}
                        navigator={this.props.navigator}
                    />
                }
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        filmList: selectors.getFilmList(state)
    };
}

export default connect(mapStateToProps)(FilmList);