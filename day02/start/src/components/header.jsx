
const Header = (props) => {
    console.log('props', props, props.title)

    const onChangeAlert = (event) => {
        event.preventDefault();
        alert('수업이 최적화가 안되어있네 ')
    }
    return (
        <>
            <h1>
                {props.title}
            </h1>
            <button onClick={onChangeAlert}>뭔지 몰랑</button>
        </>

    )

}
export default Header