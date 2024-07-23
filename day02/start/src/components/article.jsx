
const Article = ({ Topics, SelcetId }) => {
    const SelectTopic = Topics.find(topic => topic.id === SelcetId);

    return (
        <>
            <h2>{SelectTopic.subtitle}</h2>
            <p>{SelectTopic.content}</p>
        </>

    )

}
export default Article