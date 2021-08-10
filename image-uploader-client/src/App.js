import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles"
import CardUploader from './components/CardUploader'
import Uploading from './components/Uploading'
import AfterUpload from './components/AfterUpload'

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
    const [File, setFile] = useState()

    const [status, setstatus] = useState("done")

    if(status === "uploading") {
        return (<div className={classes.app}><Uploading status={status} setstatus={setstatus} File={File} /></div>)
    }

    if(status === "done") {
        return (<div className={classes.app}><AfterUpload /></div>)
    }

    return (
        <div className={classes.app}>
            <CardUploader File={File} setFile={setFile} setstatus={setstatus}/>
        </div>
    )
}

export default App
