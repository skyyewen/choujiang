﻿/* 背景音乐数据，属性包括name和url，
*  name填要显示出来的名字；url填歌曲文件名（包括后缀名）
*  建议复制第一行加在最前面进行修改，注意逗号,
*  最后一个{ }后面不要有逗号,属性的值要用引号括起来
*/
var musicData =[
  { name: '恋愛サーキュレーション', url: 'love_loop.mp3'},
  { name: 'Ifの世界設定', url: 'If.mp3'},
  { name: 'LOL登录曲', url: 'LOL.mp3'}
];

/* 学生数据用英文逗号隔开
*  末尾不要有逗号,首尾 `号不能掉
*  ps：可以使用word替换功能对数据格式化
*↓↓↓↓↓学生数据↓↓↓↓↓*/
var stuData = `
周江浩,
白春明,
高勇,
贾贇,
张金峰,
崔亚男,
王倩,
王霞,
王佳烨,
侯文昕,
王佳慧,
任利,
顾天慧,
吴慧,
王一多,
张鑫宇,
胡文杰,
乔栋,
郝凯,
王志飞,
高勇,
白珏,
杨鹏华,
庞博,
尹勇,
段进堂,
成杰,
王焱,
牛逢贵,
马保春,
朱铭蝶,
张磊,
陈柏霖,
白燕琴,
郭帅
`;

//获取信息函数，请勿修改
function getData(type) {
  var stu = stuData.replace(/\r*\n*\t*\s/g,'').split(',');
  return type==0 ? musicData : stu;
}