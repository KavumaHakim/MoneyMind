
import Logo from "../assets/react.svg"

const companyName: string = "YYY STATISTICS";
interface Styles {
    container: React.CSSProperties;
    logo: React.CSSProperties;
}

const styles: Styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "20px",
        height: "100vh"
    },
    logo: {
        width: "100px",
        height: "100px"
    }
}
const Headings = () =>{
    return(
        <div style={styles.container}>
            <img src={Logo} style={styles.logo}></img>
            <h1>{companyName}</h1>
            
        </div>
        
    )
}



const login = () => {
    return(
        <>
            <Headings />
        </>
    )
}

export default login
export {Headings}