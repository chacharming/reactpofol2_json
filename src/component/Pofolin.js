import React from 'react';
import portfolio from '../dbjson/pofol.json';

function Portfolioin(props) {
    return (
        <div id={props.portfolioId} 
        className='py-5'>
            <h2 
            className='text-uppercase text-center'>
                {props.portfolioId}
            </h2>
            <p className='text-center'>
                {portfolio[props.portfolioId].title}
            </p>
            {/* 1.map사용(return:출력) 2.obj접근 */}
            <ul>
               {
                portfolio[props.portfolioId].swlist.map((v, i)=>{
                    return(
                        <li key={ 'thumb'+i} className={props.portfolioId+i}>
                            <h3>{v.ex}</h3>
                            {
                                v.thumb.map((value, index)=>{
                                    return <div className={"sub"+index}>{value}</div>
                                })
                            }
                        </li>
                    )
                    })
                }
            </ul>

        </div>
    );
}

export default Portfolioin;