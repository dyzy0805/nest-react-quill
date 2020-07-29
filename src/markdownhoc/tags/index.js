/*
 * @Desrcription: 
 * @Author: dongyue
 * @CreateDate: 
 * @LastEditors: dongyue
 * @LastEditTime: 2020-07-29 14:34:57
 */ 
import Header from './header'
import Bold from './bold'

class TagsOperators {
  constructor (editor) {
    this.editor = editor
    this.getOperatorsAll.bind(this)
    this.tags = [
      new Header(this.editor).getAction(),
      new Bold(this.editor).getAction()
    ]
  }

  getOperatorsAll () {
    return this.tags
  }
}

export default TagsOperators
