import React, {Component} from 'react';
import ProgressBar from './ProgressBar';
class Languages extends Component {
    state= {
        languages: [
            {id:1, value: "Java", xp:1},
            {id:2, value: "Python", xp:0.6},
            {id:3, value: "php", xp:1},
            {id:4, value: "JavaScript", xp:1},
        ],

        frameworks:[
            {id:5, value: "React", xp:1},
            {id:6, value: "Angular", xp:1},
            {id:7, value: "Vue", xp:1},
        ]
    }
    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar
                languages={languages}
                className="languagesDisplay"
                title="languages"
                />
             {/*   <ProgressBar
                frameworks={frameworks}
                className="frameworksDisplay"
                title="frameworks & bibliothèques"
                />*/}

            </div>
        );
    }
}

export default Languages;