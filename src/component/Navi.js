import React, { useState } from "react";
import navicss from '../css/navi.module.css';
import { Link } from "react-router-dom";
import Scrollspy from "react-scrollspy";
import { NavItem } from "react-bootstrap";
import naviDBfile from "../dbjson/naviDBfile.json";

function Navi(props){
    const [ naviText, updateText ] = useState(true);
    // json -> map

    return(
            <header id="hd" className={`${navicss.hd} bg-light fixed-top`}>
                <div  className="container-lg d-lg-flex flex-wrap justify-content-between align-items-center">
                    <h1>
                        <Link to="/" className={`${navicss.logo}`}></Link>
                    </h1>
                    <ul id="sns" className="d-flex">
                        <li><a href="" target="_blank" className="px-3">git</a></li>
                        <li><a href="" target="_blank" className="px-3">notion</a></li>
                        <li><a href="" target="_blank" className="px-3">기획서</a></li>
                    </ul>
                </div>
                <Scrollspy id="gnb" className={`${navicss.navbar} d-none d-md-flex`}>
                    {
                        naviDBfile.naviDATA.map( (item, idx)=> {
                            const mCls = item.d1.cls.join(" ");
                            // if(item.d1.type){
                            //     return  (
                            //         <li key={ 'navi'+idx } className={mCls}>
                            //             <a href={item.d1.href}>
                            //                 {item.d1.naviText}
                            //             </a>
                            //         </li>
                            //     )
                            // }else{
                            //     return  (
                            //         <li key={ 'navi'+idx } className={mCls}>
                            //             <Link to={item.d1.href}>
                            //                 {item.d1.naviText}
                            //             </Link>
                            //         </li>
                            //     )
                            // } // if, else로 짜게 될경우 하나의 else로 인해 모든 li들이 if문 처리가 되기때문에 좋은 식이 되지 않는다
                            return (
                                item.d1.type== !"a"?
                                (<li key={'navi'+idx}><Link to={item.d1.href} className={mCls}>{item.d1.naviText}</Link></li>) : 
                                (<li key={'navi'+idx}><a href={item.d1.href} className={mCls}>{item.d1.naviText}</a></li>)
                            )
                        })
                    }
                </Scrollspy>
            </header>        
    );
}

export default Navi;