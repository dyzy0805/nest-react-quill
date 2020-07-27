/*
 * @Desrcription: 
 * @Author: dongyue
 * @CreateDate: 
 * @LastEditors: dongyue
 * @LastEditTime: 2020-07-27 18:12:18
 */ 
class Blockquote {
    constructor (quillJS) {
      this.quillJS = quillJS
      this.name = 'blockquote'
      this.pattern = /^(>)\s/g
      this.getAction.bind(this)
    }
  
    getAction () {
      return {
        name: this.name,
        pattern: this.pattern,
        action: (text, selection, pattern, lineStart) => {
          const match = pattern.exec(text)
          if (!match) return
          const size = match[0].length
          setTimeout(() => {
            this.quillJS.formatLine(selection.index, 1, 'blockquote', true)
            this.quillJS.deleteText(selection.index - 2, 2)
            if (lineStart + 1 === this.quillJS.editor.delta.length()) {
              this.quillJS.format('blockquote', false)
            }
          }, 0)
        }
      }
    }
  }
  
  export default Blockquote
  