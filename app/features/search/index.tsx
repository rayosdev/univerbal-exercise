import React, { ReactNode, useRef } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
  Text,
} from 'react-native';
import { inputValue$, suggestions$ } from './state';
import { useAtom, useAtomValue } from 'jotai';
import { loadable } from 'jotai/utils';
import { color } from '@/styles/color';

export type SearchProps = {
  style?: StyleProp<ViewStyle>;
};

export function Search({ style }: SearchProps): ReactNode {
  const inputRef = useRef<TextInput>(null);
  const [inputValue, setInputValue] = useAtom(inputValue$);
  const suggestions = useAtomValue(loadable(suggestions$));

  

  return (
    <View style={[searchStyles.root, style]}>

      <TextInput
        ref={inputRef}
        style={[searchStyles.input, style]}
        placeholder="type to search..."
        placeholderTextColor={color.textSecondary}
        onChangeText={setInputValue}
        value={inputValue}
      />

      

      {!inputValue ? null : (
        <View style={searchStyles.suggestions}>
          {suggestions.state !== 'hasData'
            ? null
            : suggestions.data.map((it) => (
                <View style={searchStyles.suggestionEntry}>
                  <Text>{it.title}</Text>
                </View>
              ))}
        </View>
      )}
    </View>
  );
}

const searchStyles = StyleSheet.create({
  root: {
    marginTop: 20,
    justifyContent: 'center',
    // alignContent: 'center',
    flex: 1,
    backgroundColor: '#0000',
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginVertical: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  inputFocused: {
    borderColor: '#007bff',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  suggestions: {
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'yellow',
  },

  suggestionEntry: {},
});
