/*
 * @Desrcription: 
 * @Author: dongyue
 * @CreateDate: 
 * @LastEditors: dongyue
 * @LastEditTime: 2020-07-27 18:16:33
 */ 
class Header {
    constructor (quillJS) {
      this.quillJS = quillJS
      this.name = 'header'
      this.pattern = /^(#){1,6}\s/g
      this.getAction.bind(this)
    }
  
    getAction () {
      return {
        name: this.name,
        pattern: this.pattern,
        action: (text, selection, pattern) => {
          const match = pattern.exec(text)
          if (!match) return
          const size = match[0].length
          setTimeout(() => {
            this.quillJS.formatLine(selection.index, 0, 'header', size - 1)
            this.quillJS.deleteText(selection.index - size, size)
          }, 0)
        }
      }
    }
  }
  
  export default Header
  