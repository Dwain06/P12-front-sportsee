import React, { useEffect, useState } from 'react';
import GetUserData from '../../data/GetUserData';
import ActivityCharts from '../charts/ActivityCharts';
import Nutrients from '../nutrients/Nutrients';

const Dashboard = () => {

    const [generalInformations, setGeneralInformations] = useState();
    const [nutrients, setNutrients] = useState();
    const [activity, setactivity] = useState();
    const [averageSessions, setAverageSessions] = useState();
    const [performance, setPerformance] = useState();

    const userId = 12;

    useEffect(() => {
        async function getDatas() {
            const userData = new GetUserData(userId);
            setGeneralInformations(await userData.generalInformations());
            setNutrients(await userData.nutrients());
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
                    <div className="dashboard__welcome">
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
                    <div className="dashboard__datas">
                        <div className="datas__charts">
                            <div className="datas__charts--activity">
                                <ActivityCharts props={activity.sessions}/>
                            </div>
                            <div className="datas__charts--scores">

                            </div>
                        </div>
                        <div className="datas--nutrients">
                            {nutrients.map((nutrient, index) => (
                                <Nutrients key={index + 1} props={nutrient} />
                            ))}

                        </div>
                    </div>
                </div>
                :
                <div className="loading">Loading...</div>
            }
        </>
    );
};

export default Dashboard;