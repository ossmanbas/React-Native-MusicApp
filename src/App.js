import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, FlatList, View} from 'react-native';
import musicdata from './music-data.json';
import SongCard from './components/SongCard/SongCard';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  const [list, setList] = useState(musicdata);
  const renderSong = ({item}) => <SongCard song={item} />;

  const handleSearch = text => {
    const filteredList = musicdata.filter(song => {
      const girilen = text.toLowerCase();
      const eldeki = song.title.toLowerCase();

      return eldeki.indexOf(girilen) > -1;
    });

    setList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'black',
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
