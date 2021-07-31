import { ProxyState } from '../AppState.js'
import Comment from '../Models/Comment.js'
import { logger } from '../Utils/Logger.js'
import { api } from './AxiosService.js'

class CommentsService {
  async getAllComments() {
    const comments = await api.get('api/comments')
    ProxyState.comments = comments.data.map(p => new Comment(p))
    return comments
  }

  async getCommentById(id) {
    const comment = await api.get('api/comments/' + id)
    return comment
  }

  async addComment(rawComment) {
    const comment = await api.comment('api/comments/', new Comment(rawComment))
    return comment
  }

  async archiveComment(id) {
    await api.comment('api/comments/' + id)
    logger.log('Archived Successfully')
  }
}
export const commentsService = new CommentsService()