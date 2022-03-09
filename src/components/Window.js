import React,{useState,useEffect} from 'react';
import "../styles/window.css";

export default function window({value}) {
    return (<>
    <h4 className='view'>{value}</h4>
    </>)
};

