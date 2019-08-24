import axios from 'axios';
import * as constants from './constants';

const changeDeatil = (title, content) => ({
  type: constants.CHANGE_DETAIL,
  title,
  content
});

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      const result = res.data.data;
      dispatch(changeDeatil(result.title, result.content));
    }).catch(() => {
       "出错了，请重试"
    })
  }
};