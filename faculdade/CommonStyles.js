import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  textItem: {
    fontSize: 18,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonTextBig: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    padding: 5,
    borderRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  scrollContainer: {
    width: '100%',
  },
  itemsContainer: {
    paddingBottom: 100,
  },
});
