import React, { useState } from "react";
import classes from "./login.module.css";
import { MdOutlineSettings, MdOutlinePersonOutline, MdMessage, MdOutlineHome, MdOutlineHelpOutline, MdOutlineLogin, MdOutlineLogout } from 'react-icons/md';
// const opendropdown = true ? classes.dropdown_content : classes.display_none;
const LogIn = () => {
    const [openDropDown, setOpenDropDown] = useState(true);
    const [nameValue, setNameValue] = useState("");
    const dropDown = openDropDown ? classes.dropdown_content : classes.display_none;

    const setValue = (e, value) => {
        e.preventDefault();
        setNameValue(value);
        setOpenDropDown(!openDropDown)
        // setNameValue(event.target);
    }
    // console.log(await axios.get("http://localhost:5000/login")) 
    return (<div style={{ paddingTop: "20px", paddingLeft: "20px", bottom: "20px", width: "300px" }}>
        {/* className={classes.body} */}

        <input type="text" name="name" placeholder="name" className={classes.input}></input>

        <br />

        <div style={{ width: "400px", marginBottom: "10px" }}>
            <input type="text" name="email" placeholder="email" className={classes.borderless}></input>
        </div>

        <input type="checkbox" name="degree" value="B.A." ></input> <label>B.A.</label>
        <input type="checkbox" name="degree" value="B.Sc."></input><label>B.Sc.</label>


        <input type="radio" id="html" name="fav_language" value="HTML"></input>
        <label for="html">HTML</label>
        <input type="radio" id="css" name="fav_language" value="CSS" checked></input>
        <label for="css">CSS</label>

        <div style={{ width: "200px" }}>
            <select className={classes.custom_select}>
                <option value="0">Select car:</option>
                <option value="1">Audi</option>
                <option value="2">BMW</option>
                <option value="3">Citroen</option>
            </select>
        </div>
        {/* 
        <div className={classes.dropdown}>
            <button className={classes.dropbtn} onClick={() => { setOpenDropDown(!openDropDown) }}>Dropdown</button>

            <div class={dropDown}>
                <div className={classes.triangle_div}>
                    <div className={classes.triangle_up}></div>
                </div>
                <div className={classes.dropdown_body}>
                    <a onClick={() => { setOpenDropDown(!openDropDown) }} href="#">Link 1</a>
                    <a onClick={() => { setOpenDropDown(!openDropDown) }}>Link 2</a>
                    <a onClick={() => { setOpenDropDown(!openDropDown) }}>Link 3</a>
                </div>
            </div>
        </div> */}


        <div className={classes.dropdown}>
            <input type="text" name="name" value={nameValue} placeholder="name" className={classes.input_selection} onClick={() => { setOpenDropDown(!openDropDown) }}></input>
            <div class={dropDown}>
                <div className={classes.triangle_div}>
                    <div className={classes.triangle_up}></div>
                </div>
                <div className={classes.dropdown_body}>
                    <a onClick={(e) => setValue(e, "option1")} value="option1" name="name">option1</a>
                    <a onClick={(e) => setValue(e, "option2")} value="option2" name="name">option2</a>
                    <a onClick={(e) => setValue(e, "option3")} value="option3" name="name">option3</a>
                </div>
            </div>
        </div>

        {/* <ul >
            <li className={classes.list}><span><MdOutlineHome /></span><a href="http://localhost:5000/login">Home</a></li>
            <li className={classes.list}><span><MdOutlinePersonOutline /></span><a href="http://localhost:5000/login">Profile</a></li>
            <li className={classes.list}><span><MdMessage /></span><a href="http://localhost:5000/login">Messages</a></li>
            <li className={classes.list}><span><MdOutlineSettings /></span><a href="http://localhost:5000/login">setting</a></li>
            <li className={classes.list}><span><MdOutlineHelpOutline /></span><a href="http://localhost:5000/login">Help</a></li>
            <li className={classes.list}><MdOutlineLogout /><a href="http://localhost:5000/login">SignOut</a></li>
        </ul> */}
        {/* <button onClick={() => { logInUser() }}>logIn</button>
        <button onClick={() => { downloadFile() }}>Download</button>
        <button onClick={() => { console.log(token) }}>check token</button> */}
    </div >)
}

export default LogIn;