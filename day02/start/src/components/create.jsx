
const Create = ({ Topics, setTopics, setChangeCreateMode, setSelectId }) => {

    const onCreate = (event) => {
        event.preventDefault();
        const newTitle = {
            id: Math.floor(Math.random() * 1000),
            title: event.target.title.value,
            body: event.target.body.value,
        }
        setTopics([...Topics, newTitle])
        setChangeCreateMode(false)
        setSelectId(newTitle.id)
    }
    return (
        <>
            <h3>CREATE</h3>
            <form onSubmit={onCreate}>
                <p><input name='title' placeholder='title'></input></p>
                <p><textarea name='body' placeholder='body'></textarea></p>
                <button value='create' > 작성</button>
            </form >
        </>
    )

}
export default Create