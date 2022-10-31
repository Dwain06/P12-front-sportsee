import fetchData from "./fetchData";

import calorieCount from "../assets/icons/nutrients/calorieCount.png";
import proteinCount from "../assets/icons/nutrients/proteinCount.png";
import carbohydrateCount from "../assets/icons/nutrients/carbohydrateCount.png";
import lipidCount from "../assets/icons/nutrients/lipidCount.png";

// Fetching datas from dev environment only
const domainName = "http://localhost:3000/"

class GetUserData {

    constructor(id) {
        this.id = id;
    }

    async generalInformations() {
        const generalInformations = await fetchData(domainName + "user/" + this.id);
        return generalInformations.data;
    }

    async nutrients(){
        const nutrients = await fetchData(domainName + "user/" + this.id);
        return [
            {
                name: "Calories",
                count: (nutrients.data.keyData.calorieCount / 1000).toFixed(3) + "kCal",
                img: calorieCount
            },
            {
                name: "Proteines",
                count: nutrients.data.keyData.proteinCount + "g",
                img: proteinCount
            },
            {
                name: "Glucides",
                count: nutrients.data.keyData.carbohydrateCount + "g",
                img: carbohydrateCount
            },
            {
                name: "Lipides",
                count: nutrients.data.keyData.lipidCount + "g",
                img: lipidCount
            }
    ]
    }

    async activity() {
        const activity = await fetchData(domainName + "user/" + this.id + "/activity");
        return activity.data;
    }

    async averageSessions() {
        const averageSessions = await fetchData(domainName + "user/" + this.id + "/average-sessions");
        return averageSessions.data;
    }

    async performance() {
        const performance = await fetchData(domainName + "user/" + this.id + "/performance");
        return performance.data;
    }
}

export default GetUserData;