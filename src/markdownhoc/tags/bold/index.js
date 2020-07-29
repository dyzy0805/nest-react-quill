/*
 * @Desrcription: 
 * @Author: dongyue
 * @CreateDate: 
 * @LastEditors: dongyue
 * @LastEditTime: 2020-07-29 14:35:17
 */ 
class Bold {
    constructor (editor) {
      this.editor = editor
      this.name = 'bold'
      this.pattern = /(?:\*|_){2}(.+?)(?:\*|_){2}/g
      this.getAction.bind(this)
    }
  
    getAction () {
      return {
        name: this.name,
        pattern: this.pattern,
        action: (text, selection, pattern, lineStart) => {
          let match = pattern.exec(text)
  
          const annotatedText = match[0]
          const matchedText = match[1]
          const startIndex = lineStart + match.index
  
          if (text.match(/^([*_ \n]+)$/g)) return
  
          setTimeout(() => {
            this.editor.deleteText(startIndex, annotatedText.length)
            this.editor.insertText(startIndex, matchedText, { bold: true })
            this.editor.format('bold', false)
          }, 0)
        }
      }
    }
  }
  
  export default Bold
  