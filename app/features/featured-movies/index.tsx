import { Poster } from '@/ui/poster';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { movies$ } from './state';
import { useAtomValue } from 'jotai';
import { loadable } from 'jotai/utils';
import { typography } from '@/styles/typography';
import { color } from '@/styles/color';

type Props = {
  style?: any;
};

export function FeaturedMovies({ style }: Props): JSX.Element | null {
  const stateLoadable = useAtomValue(loadable(movies$));

  switch (stateLoadable.state) {
    case 'hasError':
    case 'loading': {
      return null;
    }

    case 'hasData': {
      return (
        <View style={[styles.root, style]}>
            <Text style={
              [styles.title, typography.h2, 
              { 
                color: color.textPrimary 
              }]}
            >Featured Movies</Text>
          <ScrollView horizontal style={styles.list}>
            {stateLoadable.data.map((it) => (
              <Poster
                key={it.id}
                isFavorite
                title={it.title}
                onFavoritePress={undefined as any}
                src={it.src}
                movieInfo={{
                  title: it.title,
                  director: it.director,
                  releaseYear: it.releaseYear,
                  genres: it.genres,
                  rating: it.rating,
                }}
              />
            ))}
          </ScrollView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  root: {},

  title: {
    marginBottom: 20,
  },

  list: {},
});
