import { Image } from 'expo-image';
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
  Text,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';

import { color } from '@/styles/color';

type MovieInfo = {
  title: string;
  director: string;
  releaseYear: number;
  genres: string[];
  rating: number;
}

type PosterProps = {
  title: string;
  src: string;
  onFavoritePress: () => void;
  isFavorite: boolean;
  movieInfo: MovieInfo;
  styles?: StyleProp<ViewStyle>;
};

export function Poster(props: PosterProps) {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
    <View style={[styles.wrapper, styles.wrapper]}>
    <Pressable onPress={() => setModalVisible(true)}>
      {props.onFavoritePress && (
        <Pressable
          style={[
            styles.button,
            props.isFavorite
              ? {
                  backgroundColor: 'yellow',
                }
              : { backgroundColor: 'transparent' },
          ]}
          onPress={props.onFavoritePress}
        >
          {props.isFavorite ? '-' : '+'}
        </Pressable>
      )}
      <Image
        alt={props.title}
        source={{ uri: props.src }}
        style={styles.image}
      />
      </Pressable>
    </View>
    <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <Pressable
        style={styles.modalOverlay}
        onPress={() => setModalVisible(false)}
      >
        <View style={{flex: 2}}></View>
        <TouchableWithoutFeedback>
          <View style={styles.modalContent}>
            <Image
              alt={props.title}
              source={{ uri: props.src }}
              style={styles.modalBackgroundImage}
            />
            <View style={styles.modalOverlayContent}>
              <Text style={styles.modalTitle}>{props.title}</Text>
              <View style={styles.modalInfoContainer}>
                <View style={styles.modalInfoRow}>
                  <Text style={styles.modalBodyText}>Director</Text>
                  <Text style={styles.modalBodyText}>{props.movieInfo.director}</Text>
                </View>
                <View style={styles.modalInfoRow}>
                  <Text style={styles.modalBodyText}>Rating</Text>
                  <Text style={styles.modalBodyText}>{props.movieInfo.rating}</Text>
                </View>
                <View style={styles.modalInfoRow}>
                  <Text style={styles.modalBodyText}>Release Year</Text>
                  <Text style={styles.modalBodyText}>{props.movieInfo.releaseYear}</Text>
                </View>
                <View style={styles.modalInfoRow}>
                  <Text style={styles.modalBodyText}>Genres</Text>
                  <Text style={styles.modalBodyText}>{props.movieInfo.genres.join(', ')}</Text>
                </View>
              </View>
              <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Pressable>
    </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    // width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    gap: 10,
    paddingBottom: 5,
  },
  image: {
    width: 150,
    height: 220,
    marginBottom: 8,
  },
  modalImage: {
    width: 200,
    height: 270,
    marginBottom: 8,
  },
  button: {
    borderWidth: 2,
    borderColor: 'yellow',
    position: 'absolute',
    top: 10,
    right: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  modalOverlay: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5',
  },
  modalContent: {
    backgroundColor: 'transparent',
    borderTopEndRadius: 10,
    width: '100%',
    height: 450,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    overflow: 'hidden',
    position: 'relative',
  },
  modalBackgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  modalOverlayContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    flex: 1,
    width: '100%',
    height: '100%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: color.textPrimary,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 15,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalBodyText: {
    color: color.textSecondary,
    fontSize: 16,
    marginTop: 10,
  },
  modalInfoContainer: {
    flex: 1,
    paddingHorizontal: 30,
  },
  modalInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
