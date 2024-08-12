import axios from "axios"

// const serverUrl = "http://localhost:8080/api/v1"
const serverUrl = "https://hpi-back-1.onrender.com/api/v1"

const files = [
    "The Crown.pdf", "The Emperor.pdf", "LIC.pdf"
]

export const fileDownload = (name, email, mob, val) => async(dispatch) =>{
    try {
        dispatch({
            type: "FileDownloadRequest"
        });

        const response = await axios.post(`${serverUrl}/file/download`, {name, email, mob, val}, {
            withCredentials: true,
            headers:{
                "Content-Type":"application/json"
            },
            responseType: 'blob'
        });

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${files[val]}`); // You can set a dynamic filename if needed
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);

        dispatch({
            type: "FileDownloadSuccess",
        })
        
    } catch (error) {
        dispatch({
            type: "FileDownloadFailure",
            payload: error.response.data.message
        })
    }
}

export const contactUs = (fName, email, msg) => async(dispatch) => {
    try {
        dispatch({
            type: "ContactRequest",
        });

        const {data} = await axios.post(`${serverUrl}/contact`, {fName, email, msg}, {
            withCredentials: true,
            headers: {
                'Content-Type': "application/json"
            }
        });

        dispatch({
            type: "ContactSuccess",
            payload: data.message
        })
        
    } catch (error) {
        dispatch({
            type: "ContactFailure",
            payload: error.response.data.message
        })
    }
}