import React from 'react';

const ProgressBar = (props) => {

    const displayTab = props.data.map((item,id) => {
        let xpYears = 2;
        let progressBar = item.xp / xpYears * 100 + '%';
        return (
            <div key={id} className="languagesList">
                <li>{item.value}</li>
                <div className="progressBar" style={{width: progressBar}}></div>
            </div>
        )
    })

    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="years">
            </div>

            <div>
                {displayTab}

            </div>
        </div>
    );
};

export default ProgressBar;