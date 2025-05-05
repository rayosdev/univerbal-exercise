import { ReactNode } from 'react';
import {
  StyleProp,
  View,
  ViewStyle,
  Text,
  StyleSheet,
  SectionList,
} from 'react-native';

import { Rating } from '../rating';
import { Movie } from 'domain/movie';
import { TVSeries } from 'domain/tv-series';

type ListProps = {
  style?: StyleProp<ViewStyle>;
  data: Movie[] | TVSeries[];
};

export function List({ style, data }: ListProps): ReactNode {
  return (
    <SectionList
      sections={[{ title: 'Top Rated', data }]}
      stickySectionHeadersEnabled={false}
      style={style}
      data={data}
      keyExtractor={(it) => it.id}
      renderItem={(it) => {
        return (
          <ListEntry
            style={undefined}
            rating={it.item.rating}
            title={it.item.title}
          />
        );
      }}
    />
  );
}

type ListEntryProps = {
  style: any | undefined;
  title: string;
  rating: number;
  src?: string;
};

function ListEntry({ style, title, rating }: ListEntryProps): ReactNode {
  // top rated has to have a rating above 75%
  const styles = getListEntryStyle(rating > 75);

  return (
    <View style={[styles.root, style]}>
      <Text>{title}</Text>
      <Rating value={rating} />
    </View>
  );
}

const getListEntryStyle = (isHighlighted: boolean) => {
  return StyleSheet.create({
    root: isHighlighted
      ? {
          padding: 12,
          backgroundColor: 'gold',
        }
      : { padding: 12 },
  });
};
