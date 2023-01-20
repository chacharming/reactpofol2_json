import React, {useState} from 'react';
import Pofolin from './Pofolin';
import pofolcss from '../css/pofol.module.css';


function Portfolio(props) {
    const [ worknm,worknmupdate ] = useState(['리액트','reactid']);
    const btnupdate = (e) => {
        e=e|| window.event;
        const newworknm =  e.target.getAttribute('datasrc').split(',')
        //타입도 저장된 데이터 타입을 array로 인식, getAtrribute로 가져오면 무조건 string
        //e.target.getAttribute('datasrc') string
        console.log(newworknm, typeof newworknm) //['CMS 그누보드','cmsid'] 'object' -> 요소가 1개인 Array
        
        worknmupdate(newworknm);
    }
    return (
        <div>
            <div className="d-flex justify-content-center pt-5">
                <button onClick={ btnupdate } datasrc={['리액트','reactid']} className={`${pofolcss.tabbtn}`}>PWA 리액트</button>
                <button onClick={ btnupdate } datasrc={['EC쇼핑몰','ecid']} className={`${pofolcss.tabbtn}`}>EC 쇼핑몰</button>
                <button onClick={ btnupdate } datasrc={['CMS 그누보드','cmsid']} className={`${pofolcss.tabbtn}`}>CMS 그누보드</button>
                <button onClick={ btnupdate } datasrc={['Design 피그마','figmaid']} className={`${pofolcss.tabbtn}`}>Design 피그마</button>
            </div>
            <Pofolin dbobjkey={worknm[0]}
            portfolioId={worknm[1]}></Pofolin>
        </div>
    );
}

export default Portfolio;