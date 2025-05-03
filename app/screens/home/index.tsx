import { Suspense, type ReactNode } from 'react';
import { View } from 'react-native';


import { FeaturedMovies } from '@/features/featured-movies';
import { FeaturedTvSeries } from '@/features/featured-tv-series';
import { Search } from '@/features/search';
import { color } from '@/styles/color'; 



export default function HomeScreen(): ReactNode {
  return (
    <View style={{ backgroundColor: color.bgPrimary, padding: 20 }}>
      <View style={{ marginBottom: 60 }}>
        <Search />
      </View>

      <FeaturedMovies style={{ marginBottom: 40 }} />
      {/* <FeaturedTvSeries /> */}
    </View>
  );
}
