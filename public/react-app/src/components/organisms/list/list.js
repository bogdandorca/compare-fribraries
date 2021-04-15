import React  from 'react';
import './list.css';

export default function ListComponent() {
    const params = new URLSearchParams(window.location.search);

    const numberOfListItems = params.get('list-items') || 10;

    return (
        <div className="list-tab">
            <ul>
                { Array.apply(null, Array(+numberOfListItems)).map((listItem, i) => (
                    <li key={i}>
                        This is item number { i + 1 }
                    </li>
                ))}
            </ul>
        </div>
    );
}
