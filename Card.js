import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { DeleteNote } from './NoteService';
import moment from 'moment';
import { formatDate } from './util';

export default function Card({ title, description, date, id, navigation }) {
    console.log(date);
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>{title}</Text>
                <View style={styles.buttons}>
                    <View style={styles.deleteButton}>
                        <Button title="Edit" onPress={() => {
                            navigation.navigate('Edit Note', { Id: id })
                        }} />
                    </View>
                    <View style={styles.deleteButton}>
                        <Button title="Delete" color="red" onPress={() => {
                            DeleteNote(id);
                        }} />
                    </View>
                </View>
            </View>
            <View style={styles.description}>
                <Text style={styles.descriptionText}>{description}</Text>
            </View>
            <View style={styles.date}>
                <Text style={styles.dateText}>{date}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignContent: 'center',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#3e5f85',
        margin: 10,
        padding: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#b1cdfa'
    },
    title: {
        width: "100%",
        paddingBottom: 5,
        borderBottomWidth: 2,
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    deleteButton: {
        position: 'relative',
        width: '70px',
        height: '30px',
        right: '5px',
        bottom: '5px',
        marginVertical: "10px",
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        marginBottom: 10,
    },
    descriptionText: {
        fontSize: 15,
    },
    date: {
        paddingBottom: 5,
    }

});