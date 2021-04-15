import React from 'react';
import './tabs.css';

export default function TabsComponent({ tabNames = [], onTabChange = () => {} }) {
    return (
        <div className="tab-headers-container">
            { tabNames.map((tab, i) => {
                return (
                    <div className="tab-header" key={i} onClick={() => onTabChange(i)}>
                        { tab }
                    </div>
                );
            }) }
        </div>
    );
}
