/*
 * @Desrcription: 
 * @Author: dongyue
 * @CreateDate: 
 * @LastEditors: dongyue
 * @LastEditTime: 2020-07-29 18:05:56
 */ 
import Header from './header'
// import Bold from './bold'

class TagsOperators {
  constructor (editor, tags) {
    this.editor = editor;
    this.getOperatorsAll.bind(this);
    this.tags = [
      new Header(this.editor).getAction(),
      // new Bold(this.editor).getAction()
    ];
    this.customTags = tags;
  }

  getOperatorsAll () {
    return [...this.tags, ...this.customTags];
  }
}

export default TagsOperators
