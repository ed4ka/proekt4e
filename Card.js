import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { DeleteNote } from './NoteService';

export default function Card({ title, description, date, id }) {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>{title}</Text>
                <View style={styles.buttons}>
                    <View style={styles.deleteButton}>
                        <Button title="Edit" />
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
                <Text style={styles.dateText}>{id}</Text>
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
        margin: 10,
        padding: 5,
        paddingHorizontal: 10,
        backgroundColor: '#c6eb34',
        paddingVertical: 10,
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
        // marginVertical: "10px",
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