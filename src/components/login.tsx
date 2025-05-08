import Logo from "../assets/react.svg"

const companyName: string = "MoneyMind";
interface Styles {
    container: React.CSSProperties;
    logo: React.CSSProperties;
    forms: React.CSSProperties;
    submit: React.CSSProperties;
    input: React.CSSProperties;

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
    }
}

const LoginForm = () => {
    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px"}}>
            <div style={styles.container}>
                <img src={Logo} style={styles.logo}></img>
                <h1>{companyName}</h1>
            </div>
            <form style={styles.forms} action="POST">
                <input type="text" placeholder="Username" style={styles.input} />
                <input type="password" placeholder="Password" style={styles.input}/>
                <button type="submit" style={styles.submit}>Login</button>
                <a href="#" style={{
                    textDecoration: "none",
                    color: "#494B53",
                    fontSize: "14px",
                    marginTop: "10px"
                }}>Forgot Password?</a>
            </form>
        </div>
    )
}


const login = () => {
    return(
        <div>
            <LoginForm />
        </div>
    )
}

export default login