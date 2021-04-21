import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-book-reader"></i>
                    <span>Lecture</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-film"></i>
                    <span>Cinéma</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-plane"></i>
                    <span>Voyage</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-camera-retro"></i>
                    <span>Photographie</span>
                </li>
            </ul>

        </div>
    );
};

export default Hobbies;