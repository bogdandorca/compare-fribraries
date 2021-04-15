import React, { useState } from 'react';
import Tabs from '../../molecules/tabs/tabs';
import List from '../../organisms/list/list';
import './default.css';

export default function DefaultView() {
    const tabs = ['list', 'form'];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="default-template">
            <Tabs tabNames={tabs} onTabChange={(val) => setActiveTab(tabs[val])} />
            { activeTab === 'list' && <List /> }
        </div>
    );
}
