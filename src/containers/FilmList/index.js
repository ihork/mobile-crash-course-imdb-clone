import React, {Component, PropTypes} from 'react';
import {View, Text, ListView, ActivityIndicator, TextInput, Alert} from 'react-native';
import { connect } from 'react-redux';
import stylesheet from './stylesheet';
import {getFilmsData} from '../../store/films/actions';
import * as selectors from '../../store/selectors';
import FilmItem from '../../components/FilmItem';
import _ from 'lodash';
import * as navigationHandler from '../../utils/navigationHandler';
import filmsDbService from '../../services/FilmsDbService';

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

class FilmList extends Component {
    constructor(props) {
        super(props);
        this.getFilmListNextPage = this.getFilmListNextPage.bind(this);
        this.makeSearch = _.debounce(this.makeSearch.bind(this), 500, {leading: true});
        this.onItemPress = _.partial(navigationHandler.openFilmDetails, props.navigator);
    }

    componentDidMount() {
        this.props.dispatch(getFilmsData());
    }

    getFilmListNextPage() {
        if (this.props.filmsAreLoading) {
            return;
        }

        this.props.dispatch(getFilmsData(this.props.searchQuery));
    }

    makeSearch(query) {
        this.props.dispatch(getFilmsData(query));
    }

    render() {
        return (
            <View style={stylesheet.container}>
                <TextInput
                    style={stylesheet.searchBar}
                    onChangeText={this.makeSearch}
                />
                <ListView
                    testID="ListView"
                    dataSource={ds.cloneWithRows(this.props.filmList)}
                    renderRow={(item, sectionID, rowID, highlightRow) => {
                        return (
                            <FilmItem
                                testID={`FilmItem-${rowID}`}
                                film={item}
                                filmImageUrl={filmsDbService.getImageUrl(item.poster_path)}
                                onPress={this.onItemPress}
                            />
                            )
                        }
                    }
                    onEndReached={this.getFilmListNextPage}
                    onEndReachedThreshold={10}
                />
                {
                    this.props.filmsAreLoading && this.props.currentPage
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
        filmsAreLoading: selectors.areFilmsLoading(state),
        currentPage: selectors.getCurrentPage(state),
        searchQuery: selectors.getSearchQuery(state)
    };
}

export default connect(mapStateToProps)(FilmList);