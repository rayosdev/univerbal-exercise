import { Poster } from '@/ui/poster';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { featuredTvSeries$ } from './state';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { Rating } from '@/ui/rating';
import { color } from '@/styles/color';

export function FeaturedTvSeries() {
  const [featuredTvSeries] = useAtom(featuredTvSeries$);

  return (
    <View style={featuredTvSeriesStyles.root}>
      <Text style={featuredTvSeriesStyles.title}>Featured Tv Series</Text>
      <SectionList
        sections={[{ title: 'Featured', data: featuredTvSeries }]}
        stickySectionHeadersEnabled={false}
        style={featuredTvSeriesStyles.list}
        horizontal
        data={featuredTvSeries}
        keyExtractor={(it) => it.id}
        renderItem={(it) => {
          return (
            <Entry
              title={it.item.title}
              rating={it.item.rating}
              seasons={it.item.seasons}
            />
          );
        }}
      />
    </View>
  );
}

const featuredTvSeriesStyles = StyleSheet.create({
  root: {
    backgroundColor: 'pink',
  },

  title: {
    marginBottom: 20,
  },

  list: {
    backgroundColor: 'red',
  },
});

function Entry(props) {
  return (
    <View style={entryStyles.root}>
      <View style={entryStyles.overlay}>
        <Text style={entryStyles.text}>{props.title}</Text>
        <Rating style={entryStyles.text} value={props.rating} />
        <Text style={entryStyles.text}>seasons: {props.seasons.length}</Text>
      </View>
      <Poster
        title={props.title}
        style={entryStyles.poster}
        src={
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/2560px-Image_created_with_a_mobile_phone.png'
        }
      />
    </View>
  );
}

const entryStyles = StyleSheet.create({
  root: {
    height: 200,
    aspectRatio: 1 / 2,
    backgroundColor: 'blue',
    borderWidth: 2,
    borderColor: 'yellow',
    position: 'relative',
  },

  overlay: {
    position: 'absolute',
    backgroundColor: color.bgPrimary,
    zIndex: 1,
    width: '100%',
    height: '50%',
    bottom: 0,
    justifyContent: 'flex-start',
  },

  text: {
    color: 'white',
  },
});
