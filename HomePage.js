import { formatDate } from './util';
import { FlatList, Text, View } from 'react-native'
import React, { Component } from 'react'
import { getNotes } from './NoteService';
import Card from './Card';
import { Button } from 'react-native-web';
var request = require("request");

export default class HomePage extends Component {
    state = {
        notes: []
    }

    async componentDidMount() {
        var notes = await getNotes();
        notes.forEach(i => {
            var formattedDate = formatDate(i['createdNote']);
            i['createdNote'] = formattedDate;
        });
        this.setState({ notes: notes });
    }

    render() {
        return (
            <View>
                <FlatList data={this.state.notes}
                    renderItem={({ item }) => <Card title={item['title']} description={item['description']} date={item['createdNote']} id={item['_id']} />}
                    numColumns={5}
                />
                <Button title='Add Note' onPress={() => {
                    this.props.navigation.navigate('Add Note')
                }} />
            </View>
        )
    }
}