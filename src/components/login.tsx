import Logo from '../assets/react.svg'
const companyName: string = "YYY STATISTICS";
const login = () => {
    const styles: object = {
        fontSize:'2rem',
        fontFamily:'century gothic',
        color:'red',
        textAlign:'center',
    }
    const styleE: object = {
        display:'flex',
        gap:'5px',
        height:'100%',
        width:'100%'
    }
    return(
        <>
            <div style={styleE}>
                <img src={Logo} alt="logo" />
                <h1 style={styles}>{companyName}</h1>
            </div>
        </>
    )
}

export default login