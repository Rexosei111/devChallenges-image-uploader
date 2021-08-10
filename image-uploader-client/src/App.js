import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import CardUploader from './components/CardUploader'

const useStyles = makeStyles(theme => ({
    app: {
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
}))

function App() {

    const classes = useStyles()
    return (
        <div className={classes.app}>
            <CardUploader />
        </div>
    )
}

export default App
