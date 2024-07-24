
const Create = () => {

    const onCreate = (event) => {
        const newTitle = {


        }
    }
    return (
        <>
            <h3>CREATE</h3>
            <form onSubmit={onCreate}>
                <p><input name='title' placeholder='title'></input></p>
                <p><textarea name='body' placeholder='body'></textarea></p>
                <button value='create'>작성</button>
            </form>
        </>
    )

}
export default Create