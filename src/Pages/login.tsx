import Logo from "../assets/react.svg"
import { useState } from "react";

const companyName: string = "MoneyMind";
interface Styles {
    container: React.CSSProperties;
    logo: React.CSSProperties;
    forms: React.CSSProperties;
    submit: React.CSSProperties;
    input: React.CSSProperties;
    root: React.CSSProperties;

}

const styles: Styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px"
    },
    logo: {
        width: "100px",
        height: "100px"
    },
    forms: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        marginTop: "20px",
        width: "300px",
        padding: "20px"
    },
    submit: {
        backgroundColor: "red",
        color: "white",
        padding: "10px",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
        width: "100px",
        alignSelf: "center",
    },
    input: {
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        width: "100%"
    },
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    }
}

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px"}}>
            <div style={styles.container}>
                <img src={Logo} style={styles.logo}></img>
                <h1>{companyName}</h1>
            </div>
            <form style={styles.forms} action="POST">
                <input type="text" placeholder="Username" style={styles.input} value={username}  onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" style={styles.input} value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" style={styles.submit}>Login</button>
                <a href="#" style={{
                    textDecoration: "underline",
                    color: "#494B53",
                    fontSize: "14px",
                    marginTop: "10px"
                }}>Forgot Password?</a>
            </form>
        </div>
    )
}



const Login = () => {
    return(
        <div style={styles.root}>
            <LoginForm />
        </div>
    )
}

export default Login