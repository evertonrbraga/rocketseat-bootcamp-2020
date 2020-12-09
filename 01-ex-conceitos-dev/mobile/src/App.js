<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, { useState, useEffect } from 'react';
>>>>>>> Typescript first look

import api from './services/api';

import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
<<<<<<< HEAD
} from "react-native";

export default function App() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        api.get('/repositories').then(res => {
            setRepositories(res.data);
        })
    }, [])

    async function handleLikeRepository(id) {
        await api.post(`/repositories/${id}/like`);

        const findIndex = repositories.findIndex(repository => repository.id === id);

        const newRepos = [...repositories ];

        newRepos[findIndex].likes++;

        setRepositories(newRepos);
    }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList 
            style={styles.repositoryContainer}
            data={repositories}
            keyExtractor={repository => repository.id}
            renderItem={({item: repository}) => (
                <>
                    <Text style={styles.repository}>{repository.title}</Text>

                    <View style={styles.techsContainer}>
                        {repository.techs.map(tech => (
                            <Text key={tech} style={styles.tech}>
                                {tech}
                            </Text>
                        ))}
                    </View>

                    <View style={styles.likesContainer}>
                        <Text
                            style={styles.likeText}
                            testID={`repository-likes-${repository.id}`}
                        >
                            {repository.likes} curtidas
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleLikeRepository(repository.id)}
                        testID={`like-button-${repository.id}`}
                    >
                        <Text style={styles.buttonText}>Curtir</Text>
                    </TouchableOpacity>
                </>
            )}
=======
} from 'react-native';

export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('/repositories').then((res) => {
      setRepositories(res.data);
    });
  }, []);

  async function handleLikeRepository(id) {
    await api.post(`/repositories/${id}/like`);

    const findIndex = repositories.findIndex(
      (repository) => repository.id === id
    );

    const newRepos = [...repositories];

    newRepos[findIndex].likes++;

    setRepositories(newRepos);
  }

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#7159c1' />
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.repositoryContainer}
          data={repositories}
          keyExtractor={(repository) => repository.id}
          renderItem={({ item: repository }) => (
            <>
              <Text style={styles.repository}>{repository.title}</Text>

              <View style={styles.techsContainer}>
                {repository.techs.map((tech) => (
                  <Text key={tech} style={styles.tech}>
                    {tech}
                  </Text>
                ))}
              </View>

              <View style={styles.likesContainer}>
                <Text
                  style={styles.likeText}
                  testID={`repository-likes-${repository.id}`}
                >
                  {repository.likes} curtidas
                </Text>
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() => handleLikeRepository(repository.id)}
                testID={`like-button-${repository.id}`}
              >
                <Text style={styles.buttonText}>Curtir</Text>
              </TouchableOpacity>
            </>
          )}
>>>>>>> Typescript first look
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: "#7159c1",
=======
    backgroundColor: '#7159c1',
>>>>>>> Typescript first look
  },
  repositoryContainer: {
    marginBottom: 15,
    marginHorizontal: 15,
<<<<<<< HEAD
    backgroundColor: "#fff",
=======
    backgroundColor: '#fff',
>>>>>>> Typescript first look
    padding: 20,
  },
  repository: {
    fontSize: 32,
<<<<<<< HEAD
    fontWeight: "bold",
  },
  techsContainer: {
    flexDirection: "row",
=======
    fontWeight: 'bold',
  },
  techsContainer: {
    flexDirection: 'row',
>>>>>>> Typescript first look
    marginTop: 10,
  },
  tech: {
    fontSize: 12,
<<<<<<< HEAD
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "#04d361",
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#fff",
  },
  likesContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likeText: {
    fontSize: 14,
    fontWeight: "bold",
=======
    fontWeight: 'bold',
    marginRight: 10,
    backgroundColor: '#04d361',
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#fff',
  },
  likesContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likeText: {
    fontSize: 14,
    fontWeight: 'bold',
>>>>>>> Typescript first look
    marginRight: 10,
  },
  button: {
    marginTop: 10,
  },
  buttonText: {
    fontSize: 14,
<<<<<<< HEAD
    fontWeight: "bold",
    marginRight: 10,
    color: "#fff",
    backgroundColor: "#7159c1",
    padding: 15,
  },
});
=======
    fontWeight: 'bold',
    marginRight: 10,
    color: '#fff',
    backgroundColor: '#7159c1',
    padding: 15,
  },
});
>>>>>>> Typescript first look
