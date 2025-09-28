import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
    backgroundColor: 'rgba(108, 132, 157, 0.12)',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
  success: {
    color: 'green',
    fontSize: 12,
    marginTop: 4,
  },
  red: {
    color: 'red',
  },
  dropdownMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lcon: {
    position: 'absolute',
    right: 10,
  },
});

export default styles;
