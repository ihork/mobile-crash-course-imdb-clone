import React, {Component, PropTypes} from 'react';
import {View, Text, ListView, ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';
import stylesheet from './stylesheet';
import {getFilmsData} from '../../store/films/actions';
import * as selectors from '../../store/selectors';
import FilmItem from '../../components/FilmItem';

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

class FilmList extends Component {
    constructor(props) {
        super(props);
        this.getFilmListNextPage = this.getFilmListNextPage.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getFilmsData());
    }

    getFilmListNextPage() {
        if (this.props.filmsAreLoading) {
            return;
        }

        this.props.dispatch(getFilmsData());
    }

    render() {
        return (
            <View style={stylesheet.container}>
                <ListView
                    dataSource={ds.cloneWithRows(this.props.filmList)}
                    renderRow={(item) =>
                        <FilmItem
                            film={item}
                            navigator={this.props.navigator}
                        />
                    }
                    onEndReached={this.getFilmListNextPage}
                    onEndReachedThreshold={10}
                />
                {
                    this.props.filmsAreLoading
                    ? <ActivityIndicator size="large"></ActivityIndicator>
                    : null
                }
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        filmList: selectors.getFilmList(state),
        filmsAreLoading: selectors.areFilmsLoading(state)
    };
}

export default connect(mapStateToProps)(FilmList);