/*
 * @Desrcription: 给quill提供markdown能力
 * @Author: dongyue
 * @CreateDate: 
 * @LastEditors: dongyue
 * @LastEditTime: 2020-07-29 15:36:06
 */ 
import TagsOperators from './tags'

class MarkdownEngine {
  constructor (editor) {
    this.editor = editor;
    this.editor.on('text-change', this.onTextChange.bind(this))
    this.actionCharacters = {
      whiteSpace: ' ',
      newLine: '\n'
    }
    this.ignoreTags = ['PRE']
    this.tags = new TagsOperators(this.editor)
    this.matches = this.tags.getOperatorsAll()
  }

  onTextChange (delta) {
    delta.ops.filter(e => e.hasOwnProperty('insert')).forEach(e => {
      switch (e.insert) {
        case this.actionCharacters.whiteSpace:
          this.onQuery()
          break
        case this.actionCharacters.newLine:
          this.onExecute()
          break
      }
    })
  }

  isValid (text, tagName) {
    return (
      typeof text !== 'undefined' &&
      text &&
      this.ignoreTags.indexOf(tagName) === -1
    )
  }

  onQuery () {
    const selection = this.editor.getSelection()
    if (!selection) return
    const [line, offset] = this.editor.getLine(selection.index)
    const text = line.domNode.textContent
    const lineStart = selection.index - offset
    if (this.isValid(text, line.domNode.tagName)) {
      for (let match of this.matches) {
        const matchedText = text.match(match.pattern)
        if (matchedText) {
          match.action(text, selection, match.pattern, lineStart)
          return
        }
      }
    }
  }

  onExecute () {
    let selection = this.editor.getSelection()
    if (!selection) return
    const [line, offset] = this.editor.getLine(selection.index)
    const text = line.domNode.textContent + ' '
    const lineStart = selection.index - offset
    selection.length = selection.index++
    if (this.isValid(text, line.domNode.tagName)) {
      for (let match of this.matches) {
        const matchedText = text.match(match.pattern)
        if (matchedText) {
          match.action(text, selection, match.pattern, lineStart)
          return
        }
      }
    }
  }
}

export default MarkdownEngine
