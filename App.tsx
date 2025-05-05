import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import HomeScreen from '@/screens/home';
import FavoritesScreen from '@/screens/favorites';
import TopRatedScreen from '@/screens/top-rated';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { appRouteNames } from '@/routes';
import { z } from 'zod';
import { Ionicons } from '@expo/vector-icons';
import { color } from '@/styles/color';

// Define a custom theme based on DarkTheme
const MyTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: color.bgPrimary
  },
};

const Tab = createBottomTabNavigator();

const envSchema = z.object({
  EXPO_PUBLIC_SERVER_IP: z.string().ip(),
  EXPO_PUBLIC_SERVER_PORT: z.string().length(4),
});

const result = envSchema.safeParse(process.env);
if (result.error) {
  console.error(result.error);
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar style="light" animated />
      <Tab.Navigator initialRouteName={appRouteNames.root}>
        <Tab.Screen
          name="tab-home"
          component={HomeScreen}
          options={{
            headerTitle: 'Screen Junkies',
            headerTitleAlign: 'center',
            
            tabBarLabel: () => null,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="tab-top-rated"
          component={TopRatedScreen}
          options={{
            headerTitle: 'Top Rated',
            headerTitleAlign: 'center',
            tabBarLabel: () => null,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="star-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="tab-favorites"
          component={FavoritesScreen}
          options={{
            headerTitle: 'Favorites',
            headerTitleAlign: 'center',
            tabBarLabel: () => null,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
