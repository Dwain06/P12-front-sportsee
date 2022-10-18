import React, { useEffect, useState } from 'react';
import GetUserData from '../../data/GetUserData';

const Dashboard = () => {
    
    // const [isLoaded, setIsLoaded] = useState(false);
    const [generalInformations, setGeneralInformations] = useState();
    const [activity, setactivity] = useState();    
    const [averageSessions, setAverageSessions] = useState();    
    const [performance, setPerformance] = useState();    
    
    const userId = 12;
    
    useEffect(() => {
        async function getDatas() {
            const userData = new GetUserData(userId);
            setGeneralInformations(await userData.generalInformations());
            setactivity(await userData.activity());
            setAverageSessions(await userData.averageSessions());
            setPerformance(await userData.performance());
        }
        getDatas();

        
    }, []);
    
    
    
    return (
        <>
            {generalInformations && activity && averageSessions && performance ?
                <div className='dashboard'>
                    <div className="welcome">
                        <h2>
                            Bonjour <span className='name'>{generalInformations.userInfos.firstName}</span>
                        </h2>
                        <h3>
                            Félicitation ! Vous avez explosé vos objectifs hier 👏
                        </h3>
                        <p>
                            {activity.userId}
                            {averageSessions.userId}
                            {performance.userId}
                        </p>
                    </div>
                </div>
                :
                <div className="loading">Loading...</div>
            }
        </>
    );
};

export default Dashboard;