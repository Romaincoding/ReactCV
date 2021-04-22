import React, {Component} from 'react';
import ProgressBar from './ProgressBar';
class Languages extends Component {
    state= {
        languages: [
            {id:1, value: "Java", xp:1},
            {id:2, value: "Python", xp:0.6},
            {id:3, value: "JavaScript", xp:0.4},
        ],

        frameworks:[
            {id:1, value: "React", xp:1},
            {id:2, value: "Angular", xp:0.5},
            {id:3, value: "Vue", xp:0.3},
        ]
    }
    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar
                data={languages}
                className="languagesDisplay"
                title="languages"
                />

                <ProgressBar
                data={frameworks}
                className="frameworksDisplay"
                title="frameworks & bibliothèques"
                />

            </div>
        );
    }
}

export default Languages;