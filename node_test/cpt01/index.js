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
    constructor(boardName) { // name = boardName
        // 'Board는 name 데이터를 포함해야 하며 null 또는 빈 문자열("")은 허용하지 않는다.' 
        if (boardName == null || boardName == "") {
            throw Error();
        }
        // 클래스 필드 선언 및 초기화 (생성자 내부에서 해야함), 클래스의 인스턴스 통해서 외부에서 참조 가능 (public)
        this.boardName = boardName;
        this.addedBoard = false; // Board 존재 여부
        this.articles = [];
    }
    // 'Site 에 추가된 Board만 사용 가능한 것으로 간주하며 사용 불가능한 Board에는 Article을 추가할 수 없다.'
    // 'Article 은 n개 이상 추가 할 수 있다.'
    publish(article) { 
        if (this.addedBoard == false) {
            throw Error();   
        }
        
        // 'Board에 Article을 추가할 때 Article에 ID를 자동 생성해서 부여해야 한다.'
        article.id = `${this.boardName}-${Math.random()}`; // 규칙은 ${board.name}-${랜덤 값} 를 따른다.
        
        // 'Board에 Article을 추가할 때 Article에 작성 일자가 들어가야 한다.'
        article.createdDate = new Date().toISOString();    // createdDate가 저장되는 형식은 ISO 8601을 따른다.
        this.articles.push(article);
    }

    // '작성된 Article 목록을 조회 할 수 있어야 한다.'
    getAllArticles() {
        return this.articles;
    }

}

class Article {
    constructor(article) {
        const { subject, content, author } = article;
        
        // 'Article은 subject, content, author 3개의 데이터를 포함해야 하며 null 또는 빈 문자열("")은 허용하지 않는다.'
        if (subject == null || subject == "" || content == null || content == "" || author == null || author == "") {            
            throw Error();
        }
        this.subject = subject;
        this.content = content;
        this.author = author;
        this.comments = [];
    }

    reply(comment) {
        // 'Board에 추가된 Article만 사용 가능한 것으로 간주하며 사용 불가능한 Article에는 Comment를 추가할 수 없다.'
        if (!this.id) { 
            throw Error();
        }
        // 'Article에 Comment를 추가할 때 Comment에 작성 일자가 들어가야 한다.'
        comment.createdDate = new Date().toISOString();   // createdDate가 저장되는 형식은 ISO 8601을 따른다.
        this.comments.push(comment);
    }
    // '작성된 Comment 목록을 조회 할 수 있어야 한다.'
    getAllComments() { 
        return this.comments;
    }

}

class Comment {
    // 'Comment는 content, author 2개의 데이터를 포함해야 하며 null 또는 빈 문자열("")은 허용하지 않는다.'
    constructor(comment) { 
        const { content, author } = comment; // Comment는 content, author 2개의 데이터를 포함

        if (content == null || content == "" || author == null || author == "") { // null 또는 빈 문자열("")은 허용하지 않는다.
            throw Error();
        }
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
