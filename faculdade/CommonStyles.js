import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  input: {
    borderBottomWidth: 1,
    padding: 8,
    marginVertical: 10
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10
  },
  buttonTextBig: {
    fontSize: 18,
    color: '#fff'
  },
  textItem: {
    fontSize: 16
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
    padding: 10,
    borderRadius: 5
  },
  editButton: {
    backgroundColor: '#4CD964',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff'
  }
});
