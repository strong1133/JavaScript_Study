class Site {
    constructor() {
        this.boards = []; // this: 클래스가 생성할 인스턴스, boards: 클래스 필드
    }
    // 'Site는 n개 이상 생성 할 수 있다.'
    // 'Site에는 Board를 추가하고,
    // 'Board는 n개 이상 추가 할 수 있다.'

    addBoard(board) {
        if (this.boards.find((oldB) => oldB.boardName == board.boardName)) throw Error()
        board.addedBoard = true
        this.boards.push(board);
    }

    // 추가된 Board를 조회할 수 있다.
    findBoardByName(boardName) {
        let findBoard =  this.boards.find((board) => board.boardName == boardName);
        return findBoard;
    }

}

class Board {
    constructor(boardName) {
        if (boardName == null || boardName ==""){
            throw Error;
        }
        this.boardName = boardName;
        this.addedBoard = false;
        this.articles = [];
    }

    publish(article){
        if(this.addedBoard == false){
            throw Error;
        }
        
        article.id = `${this.boardName}-${Math.random()}`
        article.createdDate = new Date().toISOString();
        this.articles.push(article)
    }

    getAllArticles(){
        return this.articles;
    }

}

class Article {
    constructor(article){

        const { subject, content, author } = article;

        if (subject == null || subject == "" || content == null || content == "" || author == null || author == "") {            
            throw Error();
        }

        if(!subject || !content || !author)  throw Error();

        this.subject = subject;
        this.content = content;
        this.author = author;
        this.comments = [];
    }

    reply(comment) {
        if(!this.id) throw Error

        comment.createdDate = new Date().toISOString();
        this.comments.push(comment);
    }

    getAllComments(){
        return this.comments
    }
}

class Comment {
    constructor(comment){
        const { content, author } = comment;
        if(!content || !author) throw Error

        this.content = content;
        this.author = author;
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
}
