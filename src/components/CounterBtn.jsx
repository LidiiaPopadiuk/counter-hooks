export const Button = ({titleBtn, changeNumber}) => {
    return(
        <button style={{padding: '10px 20px', backgroundColor: 'lime'}} onClick={changeNumber}>{titleBtn}</button>
    )
}