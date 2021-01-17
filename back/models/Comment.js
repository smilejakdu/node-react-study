module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', { // mysql 에는 users 로 저장이됨
        // id 가 기본적으로 들어있다.
        content : {},
    }, {
        charset: 'utf8mb4', // 이모티콘이 있을수도 있어서 mb4 를 넣어준다.
        collate: 'utf8_general_ci' // 한글저장
    });
    Comment.associate = (db) => {};
    return Comment;
}