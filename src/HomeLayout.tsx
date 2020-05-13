import React, {useCallback, useState} from "react"
import {CircularProgress, createStyles, TextField, Theme, WithStyles, withStyles} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    root: {
        backgroundColor: "white",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: -8,
    },
    message: {
        color: "rgba(0,0,0,0.7)",
        fontSize: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "arial",
        justifyContent: "center",
    },
    button: {
        margin: 24,
        cursor: "pointer",
        border: "1px solid black",
        borderRadius: 4,
        padding: 12,
        fontSize: 12,
        opacity: 0.5,
        color: "black",
        transition: "all .2s ease-in-out",
        "&:hover": {
            opacity: 1,
            backgroundColor: "white",
            color: theme.palette.primary.main,
            border: "1px solid " + theme.palette.primary.main,
        },
        width: 170,
        textAlign: "center",
    }
})

interface ButtonProps {
    text: string,
    onClick?: () => void,
}

const ButtonLayout: React.FunctionComponent<ButtonProps & WithStyles<typeof styles>> = props => {
    const {classes} = props
    return <div className={classes.button} onClick={props.onClick}>
        {props.text}
    </div>
}
const Button = withStyles(styles)(ButtonLayout)

interface HomeLayoutProps {
    onLogin: (username: string, password: string) => void,
    onLogout: () => void,
    loading: boolean,
    authenticated: boolean,
    username?: string,
}

const HomeLayout: React.FunctionComponent<HomeLayoutProps & WithStyles<typeof styles>> = props => {

    const {classes} = props

    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const content = useCallback(() => {

        if (props.loading) {
            return <CircularProgress/>
        } else if (props.authenticated) {
            return <div className={classes.message}>
                Welcome {props.username}!
                <Button text={"Logout"} onClick={() => props.onLogout()}/>
            </div>
        } else {
            return <div className={classes.message}>
                <TextField
                    label="Username"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    style={{marginTop: 12}}
                />
                <Button text={"Login"} onClick={() => props.onLogin(name, password)}/>
            </div>
        }
    }, [props.authenticated, name, props.username, props.loading])

    return <div className={classes.root}>
        {content()}
    </div>

}


export default withStyles(styles)(HomeLayout)