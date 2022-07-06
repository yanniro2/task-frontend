import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
function Menu(props)
{
    return (
        <div className='Menu'>
            <div className="close">
                <AiOutlineCloseCircle className='close-icon' onClick={props.showMenu} />
            </div>
            <ul>
                <li>
                    <a href="#">Menu one</a>
                </li>
                <li>
                    <a href="#">Menu Two </a>
                </li>
                <li>
                    <a href="#">Menu Three</a>
                </li>
                <li>
                    <a href="#">Menu Four</a>
                </li>
                <li>
                    <a href="#">Menu Five</a>
                </li>
                <li>
                    <a href="#">Menu Six</a>
                </li>
                <li>
                    <a href="#">Menu Seven</a>
                </li>
                <li>
                    <a href="#">Menu Eight</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
