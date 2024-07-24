
const Article = ({ Topics, SelcetId, setSelectId }) => {
    const SelectTopic = Topics.find(topic => topic.id === SelcetId);

    const onclickClose = (event) => {
        event.preventDefault();
        setSelectId(null)
    }

    return (
        <>
            <h2>{SelectTopic.title}</h2>
            <p>{SelectTopic.body}</p>
            <button onClick={onclickClose}>닫기</button>
        </>

    )

}
export default Article
// 작성 버튼을 누르면 ui가 작성모드로 바뀐다 수정이아니다.
// modal이 아닌 ui가 바뀌어야한다 그러기때문에 그냥 새로운 컴포넌트가 여기 들어왔으면 좋겠다 그리고 x 즉 뒤로가기를 누르면 원래 content페이지가 보일수있도록 만들것이다.