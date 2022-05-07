import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './SongCardStyle';

const SongCard = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.song.imageUrl}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{props.song.title}</Text>

        <View style={styles.body}>
          <View style={styles.info_container}>
            <Text style={{color: 'green'}}>{props.song.artist}</Text>
            <Text style={styles.year}>{props.song.year}</Text>
          </View>
          {props.song.isSoldOut && (
            <View style={styles.footer}>
              <Text style={styles.footer_info}>TÜKENDİ</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default SongCard;
