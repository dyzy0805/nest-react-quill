/*
 * @Desrcription: 
 * @Author: dongyue
 * @CreateDate: 
 * @LastEditors: dongyue
 * @LastEditTime: 2020-07-27 18:19:44
 */ 
import Header from './header'
import Blockquote from './quote'
import Bold from './bold'
// import Link from './link'

class TagsOperators {
  constructor (quillJS) {
    this.quillJS = quillJS
    this.getOperatorsAll.bind(this)
    this.tags = [
      new Header(this.quillJS).getAction(),
      new Blockquote(this.quillJS).getAction(),
      new Bold(this.quillJS).getAction(),
      // new Link(this.quillJS).getAction()
    ]
  }

  getOperatorsAll () {
    return this.tags
  }
}

export default TagsOperators
