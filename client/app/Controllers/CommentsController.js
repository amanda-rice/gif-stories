import { ProxyState } from '../AppState.js'
import { commentsService } from '../Services/CommentsService.js'
import { logger } from '../Utils/Logger.js'

export class CommentsController {
  async getAllComments() {
    try {
      const comments = await commentsService.getAllComments()
      return comments
    } catch (error) {
      logger.log('Failed getting all comments:', error)
    }
  }

  async getCommentById(id) {
    try {
      const comment = await commentsService.getCommentById(id)
      return comment
    } catch (error) {
      logger.log('Failed get comment byID:', error)
    }
  }

  async archiveComment(id) {
    try {
      const comment = await commentsService.archiveComment(id)
      return comment
    } catch (error) {
      logger.log('Failed to archive comment', error)
    }
  }

  async addComment(postId) {
    try {
      event.preventDefault()
      debugger
      const form = event.target
      const rawComment = {
        content: form.data.content,
        postId: postId
      }
      const comment = await commentsService.addComment(rawComment)
      form.reset()
      return comment
    } catch (error) {
      logger.log('Failed adding comment', error)
    }
  }
}
