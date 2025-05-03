import {
  View,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
  Text,
} from 'react-native';
import { Image } from 'expo-image';

type PosterProps = {
  title: string;
  src: string;
  onFavoritePress: () => void;
  isFavorite: boolean;
  styles?: StyleProp<ViewStyle>;
};

export function Poster(props: PosterProps) {

  return (
    <View style={[styles.wrapper, styles.wrapper]}>
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
    </View>
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
});
