import { formatDate } from './util';
import { FlatList, Text, View, Button } from 'react-native'
import React, { Component } from 'react'
import { getNotes } from './NoteService';
import Card from './Card';
var request = require("request");

export default class HomePage extends Component {
    state = {
        notes: []
    }

    async componentDidMount() {
        var notes = await getNotes();

        this.setState({ notes: notes });
    }

    render() {
        return (
            <View>
                <FlatList data={this.state.notes}
                    renderItem={({ item }) => <Card
                        title={item['title']}
                        description={item['description']}
                        date={item['date']}
                        id={item['_id']}
                        navigation={this.props.navigation}
                    />}
                    numColumns={5}
                />
                <Button title='Add Note' onPress={() => {
                    this.props.navigation.navigate('Add Note')
                }} />
            </View>
        )
    }
}