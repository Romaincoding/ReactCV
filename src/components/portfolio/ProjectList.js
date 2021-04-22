import React, {Component} from 'react';
import {portfolioData} from "../../data/portfolioData";
import Project from "./Project";

class ProjectList extends Component {
    state = {
        project:portfolioData,
        radios: [
            {id:1, value: "Java", xp:1},
            {id:2, value: "Python", xp:0.6},
            {id:3, value: "javascript", xp:0.4},

        ],
        selectedRadio: 'Java'
    };

    handleRadio = (event) => {
        let radio = event.target.value;
        this.setState({selectedRadio: radio})
    }

    render() {
        let {project, radios, selectedRadio} = this.state;

        return (
            <div className="portfolioContent">
                <ul className="radioDisplay">
                    {
                        radios.map((radio) => {
                            return (
                                <li key={radio.id} >
                                    <input
                                        type="radio"
                                        name="radio"
                                        checked={radio.value === selectedRadio}
                                        value={radio.value}
                                        id={radio.value}
                                        onChange={this.handleRadio}
                                        />
                                    <label htmlFor={radio.value}></label>{radio.value}
                                </li>
                            )
                        })
                    }

                </ul>
                <div className="projects">
                    {
                        project
                            .filter(item => item.languages.includes(selectedRadio))
                            .map(item=> {
                            return (
                                <Project
                                    key ={item.id}
                                    item={item}
                                    />
                            )
                        })
                    }
                </div>
                
            </div>
        );
    }
}

export default ProjectList;