import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  SectionList,
  StatusBar,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const DATA = [
  {
    title: 'Universities',
    data: [
      'AKTU',
      'Amity University',
      'IIT-Kanpur',
      'Allahbad University',
      'Delhi Univrersity',
    ],
  },
  {
    title: 'Colleges',
    data: [
      'ABESIT',
      'RKGIT',
      'KIET',
      'Lady Shri RAM',
      'Bhagini Nivedita College',
    ],
  },
  {
    title: 'Schools',
    data: [
      'Father Agnel',
      'Sun Valley International',
      'Modern School',
      'K R Mangalam',
      'ST Thomas',
    ],
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const List = () => {
  return (
    <SafeAreaView style={styles.safeAreaConatiner}>
      <View style={styles.conatiner}>
        <Text style={styles.titleText}>Section List</Text>
        <Text style={styles.titleContent}>
          Below is the list of Unviversities, Colleges and School
        </Text>
      </View>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
        style={styles.section}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaConatiner: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 10,
  },
  conatiner: {
    flex: 0.2,
    backgroundColor: '#32CD32',
  },
  titleText: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleContent: {
    textAlign: 'center',
    fontSize: 20,
  },
  section: {
    flex: 0.8,
  },
  item: {
    backgroundColor: 'yellow',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default List;
