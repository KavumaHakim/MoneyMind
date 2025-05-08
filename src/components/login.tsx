
import Logo from "../assets/react.svg"

const companyName: string = "YYY STATISTICS";
interface Styles {
    container: React.CSSProperties;
    logo: React.CSSProperties;
    forms: React.CSSProperties;
    
}

const styles: Styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "20px",

    },
    logo: {
        width: "100px",
        height: "100px"
    },
    forms: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "10px",
        marginTop: "20px",
        width: "300px",
        padding: "20px"
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

const LoginForm = () => {
    return(
        <div style={styles.container}>
            <form style={styles.forms}>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}


const login = () => {
    return(
        <>
            <Headings />
            <LoginForm />
        </>
    )
}

export default login