import React from 'react';
import './sidebar.css';

export default function SidebarComponent() {
    return (
        <div className="sidebar">
            <h1>FBR</h1>

            <ul>
                <li>
                    <a href="/react">React</a>
                </li>
                <li>
                    <a href="/svelte">Svelte</a>
                </li>
                <li>
                    <a href="/vue">Vue</a>
                </li>
            </ul>
        </div>
    );
}
