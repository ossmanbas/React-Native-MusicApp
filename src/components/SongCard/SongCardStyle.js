import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    padding: 10,
    color: 'black',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },
  info_container: {
      flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  year: {
    marginLeft: 10,
    color: 'gray',
    fontSize: 12,
  },
  footer: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    padding: 2,
  },
  footer_info: {
    color: 'red',
    fontSize: 10,
  },
  body: {
    flexDirection: 'row',
  },
});
