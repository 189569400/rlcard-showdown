import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LeaderBoard from './view/LeaderBoard';
import { PvEDoudizhuDemoView } from './view/PvEView';
import { DoudizhuReplayView, LeducHoldemReplayView } from './view/ReplayView';

const navbarSubtitleMap = {
    '/leaderboard': '',
    '/replay/doudizhu': 'Doudizhu',
    '/replay/leduc-holdem': "Leduc Hold'em",
    '/pve/doudizhu-demo': 'Doudizhu PvE Demo',
};

function App() {
    const { t } = useTranslation();
    // todo: add 404 page

    return (
        <Router>
            <Navbar subtitleMap={navbarSubtitleMap} />
            <div style={{ marginTop: '75px' }}>
                {t('wdnmd')}
                <Route exact path="/">
                    <Redirect to="/leaderboard?type=game&name=leduc-holdem" />
                    {/* <Redirect to="/pve/doudizhu-demo" /> */}
                </Route>
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route path="/replay/doudizhu" component={DoudizhuReplayView} />
                <Route path="/replay/leduc-holdem" component={LeducHoldemReplayView} />
                <Route path="/pve/doudizhu-demo" component={PvEDoudizhuDemoView} />
            </div>
        </Router>
    );
}

export default App;
