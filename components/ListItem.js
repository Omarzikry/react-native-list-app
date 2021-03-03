import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

const ListItem = ({text, id, setItems}) => {
  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{text}</Text>
        <Button
          title="Delete"
          color="firebrick"
          onPress={() => {
            deleteItem(id);
          }}
        />
      </View>
    </TouchableOpacity>
  );
};
export default ListItem;
