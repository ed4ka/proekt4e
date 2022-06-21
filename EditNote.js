import { Text, TextInput, View, Button } from 'react-native'
import React, { Component } from 'react'
import { editNote, getNote, getNotejk } from './NoteService'
import moment from 'moment'
import { formatDate } from './util'

export default class EditNote extends Component {

    state = {
        title: "",
        description: "",
    }

    async componentDidMount() {

        const { Id } = this.props.route.params;
        var noteId = JSON.stringify(Id);
        var note = await getNote(noteId.replace('"', ''));
        this.setState({ title: note.title, description: note.description });
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

                <Button title='Edit Note' onPress={async () => {
                    const { Id } = this.props.route.params;
                    var noteId = JSON.stringify(Id);
                    await editNote(this.state.title, this.state.description, noteId.replace('"', '').replace('"', ''));
                    console.log("Edited");
                }} />
            </View>
        )
    }
}