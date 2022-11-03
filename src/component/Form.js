import React, {useState} from 'react';
import axios from 'axios';
//const url = "https://2b4b-103-113-175-2.ngrok.io/story/upload";
const url = "http://localhost:4000/upload";
const url1 = "https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5"
const Form = ()=>{
    //const [file, setFile] = useState();
    const onChange = async(event) =>{
        event.preventDefault();
        let  formData = new FormData();
        formData.append('avatar', event.target.files[0], event.target.files[0].name);
        console.log(event.target.files[0].name);
        for (var key of formData.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }
        formData = JSON.stringify(Object.fromEntries(formData));
        console.log(formData);
        
        const value = await axios.post(url, {body: formData});
        console.log(value);
        // console.log(value);
        // console.log(event.target.files[0]);
        //console.log(file.name);
    }

    return (
        <div>
            <input type="file" name="file" onChange={onChange}/>
            <input type="submit" value="Submit" />
        </div>
    )
}

export default Form;