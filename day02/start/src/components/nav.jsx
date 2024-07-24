import Article from "./article"

const Nav = ({ Topics, setSelectId }) => {

    const idAlert = (id) => {
        alert(id)
    }
    const SubContent = (seid) => {
        setSelectId(seid)
        //이건 id정보를 받아 상태를 업데이트 해야하는것이고
    }

    return (
        <>
            {Topics.map(to => (
                <li key={to.id}>
                    {to.title}

                    <button onClick={() => idAlert(to.id)}>id</button>
                    <button onClick={() => SubContent(to.id)}>설명</button>
                </li>
            ))}

        </>

    )
}
export default Nav 