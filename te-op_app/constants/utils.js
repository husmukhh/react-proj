import { Platform, StatusBar } from 'react-native';
import { theme } from 'galio-framework';

export const StatusHeight = StatusBar.currentHeight;
export const HeaderHeight = (theme.SIZES.BASE * 3.5 + (StatusHeight || 0));
export const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812);




function getCoursesAsync(searchText, pageNo , country, pageSize) {
  return fetch('http://localhost:8080/course/'), {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
      "searchText" : searchText,
    	"pageNo" : pageNo,
    	"country" : country,
    	"pageSize" : pageSize
  })
}
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.courseList;
    })
    .catch((error) => {
      console.error(error);
    });
}
