import React, {useState, useEffect} from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api'

export default function App() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        api.get('/projects').then(res => {
            console.log(res.data)
            setProjects(res.data)
        })
    }, [])

    async function handleAddProject() {
        const res = await api.post('/projects', {
            title: `Projeto ${Date.now()}`,
            owner: 'Everton Braga'
        })

        const project = res.data

        setProjects([ ...projects, project ])
    }

    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor='#7159c1' />
            <SafeAreaView style={styles.container}>
                <FlatList   
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item }) => (
                        <Text style={styles.title}>{item.title}</Text>
                    )}
                />
                <TouchableOpacity 
                    activeOpacity={0.6} 
                    style={styles.button} 
                    onPress={handleAddProject}
                >
                    <Text style={styles.buttonText}>Adicionar projeto</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        alignItems: 'center'
    },

    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    button: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        fontWeight: 'bold',
        fontSize: 16
    }
})