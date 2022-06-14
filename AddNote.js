import { Text, TextInput, View, Button } from 'react-native'
import React, { Component } from 'react'
import { CreateNote } from './NoteService'

export default class AddNote extends Component {
    state = {
        title: "",
        description: "",
    }

    render() {
        return (
            <View>
                <TextInput placeholder='Title' value={this.state.title} onChangeText={(text) => {
                    this.setState({ title: text })
                }} />
                <TextInput placeholder='Description' value={this.state.description} onChangeText={(text) => {
                    this.setState({ description: text })
                }} />

                <Button title='Add Note' onPress={async () => {
                    await CreateNote(this.state.title, this.state.description, Date.now());
                    window.location.reload();
                    this.props.navigation.navigate('Notes');
                }} />
            </View>
        )
    }
}