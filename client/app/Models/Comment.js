
export default class Post {
  constructor({ id, userId, content, postId, votes, isArchived }) {
    this.id = id
    this.userId = userId
    this.content = content
    this.postId = postId
    this.votes = votes
    this.isArchived = isArchived
  }

  // REVIEW Maybe refactor the database to have a unique user name as well as the userId

  get Template() {
    return `
    <div class="row comment-border m-1">
      <div class="col-md-3 d-flex justify-content-around align-items-center">
        <button type="button" class="btn btn-primary" onclick="app.controllers.changeScore(1)">+</button>
        <p>Score: <span id="${this.id}-score">${this.votes}</span></p>
        <button type="button" class="btn btn-primary" onclick="app.controllers.changeScore(-1)">-</button>
      </div>
      <div class="col-md-10">
        <p>${this.content}</p>
      </div>
    </div>
    `
  }
}

{ /* <div class="col-4">
<p><b>${this.userId}</b></p>
      </div> */ }
