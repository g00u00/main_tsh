import React from 'react';

function Navigation() {
    return (
        <div className="card text-center border-bottom-0">
            <div className="card-header border-0">
                <ul className="nav nav-tabs card-header-tabs border-0">
                    <li className="nav-item"><a className="nav-link active fw-bolder border border-bottom-0"
                                                href="./index.html"
                                                target="_self">Главная</a></li>
                    <li className="nav-item"><a className="nav-link"
                                                href="https://en.wikibooks.org/w/index.php?title=Guide_to_Unix/Commands"
                                                target="_blank">UnixCommands</a></li>
                    <li className="nav-item"><a className="nav-link" href="https://github.com/g00u00"
                                                target="_blank">https://github.com/g00u00</a></li>
                    <li className="nav-item"><a className="nav-link deactivate"
                                                href="https://github.com/g00u00/index/tree/main/files"
                                                target="_blank">PuTTY,
                        FileZilla, Vim</a></li>

                </ul>
            </div>
        </div>
    );
}

export default Navigation;