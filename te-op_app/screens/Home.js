import React from 'react';
import { StyleSheet, Dimensions, ScrollView ,Text} from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/utils';
const { width } = Dimensions.get('screen');

class Home extends React.Component {



  constructor() {
    super();
    this.state = {
      data: null,
      loading: true,

    };
  }

  renderCourses = () => {
    fetch('https://127.0.0.1:8080/courses/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "searchText":"Bio",
        "pageNo":1,
        "country" : "Canada",
        "pageSize": 10
      }),
    }).then(response => response.json())
    .then(responseJson => {
      return responseJson.courseList;
    })
    .catch(error => {
      console.error(error);
    });;


    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>

        <Block flex>
          <Text > Hello </Text>
        </Block>

    </ScrollView> );
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderCourses()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;
