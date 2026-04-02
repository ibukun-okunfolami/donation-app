import { TextInput, Pressable } from 'react-native';
import React, { useRef, useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import Icon from '../../blocks/Icon';
import styles from './style';

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [search, setSearch] = useState('');
  const textInputRef = useRef<TextInput>(null);
  const handleFocus = () => {
    textInputRef.current?.focus();
  };

  const handleSearch = (searchValue: string) => {
    setSearch(searchValue);
    onSearch?.(searchValue);
  };

  return (
    <Pressable style={styles.searchInputContainer} onPress={handleFocus}>
      <Icon icon={faSearch} color={'#25C0FF'} size={22} />
      <TextInput
        ref={textInputRef}
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={'#686C7A'}
        value={search}
        onChangeText={e => handleSearch(e)}
      />
    </Pressable>
  );
};

type SearchInputProps = {
  onSearch?: (value: string) => void;
};

export default SearchInput;
