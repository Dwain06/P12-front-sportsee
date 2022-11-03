import fetchData from "./fetchData";

// Import nutrients icons
import calorieCount from "../assets/icons/nutrients/calorieCount.png";
import proteinCount from "../assets/icons/nutrients/proteinCount.png";
import carbohydrateCount from "../assets/icons/nutrients/carbohydrateCount.png";
import lipidCount from "../assets/icons/nutrients/lipidCount.png";

// Fetching datas from dev environment only
const domainName = "http://localhost:3000/"

class GetUserData {

    /**
     * ID of user
     * @param {number} id 
     */
    constructor(id) {
        this.id = id;
    }

    /**
     * Get general informations of user
     * @returns {promise<{age: number, firstName: string, lastName: string, score: {score: number}[]}>}
     */
    async generalInformations() {
        const generalInformations = await fetchData(domainName + "user/" + this.id);

        const score = generalInformations.data.todayScore ? generalInformations.data.todayScore : generalInformations.data.score;
        return { ...generalInformations.data.userInfos, score: [{score: score*100}] } // Add array of scores for Recharts
    }

    /**
     * Get nutrients datas of user
     * @returns {promise<{name: string, count: string, img: string}[]>}
     */
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

    /**
     * Get activity datas of user
     * @returns {promise<{calories: number, day: string, dayNumber: string, kilogram: number}[]>}
     */
    async activity() {
        const activity = await fetchData(domainName + "user/" + this.id + "/activity");

        return activity.data.sessions.map(obj => {
            obj.dayNumber = obj.day.split("-")[2]; // Add day number value to each object
            return { ...obj }
        });
    }

    /**
     * Get day by day average sessions length of user
     * @returns {promise<{day: string, sessionLength: number}[]>}
     */
    async averageSessions() {
        const averageSessions = await fetchData(domainName + "user/" + this.id + "/average-sessions");

        const days = ["L", "M", "M", "J", "V", "S", "D"];
        return averageSessions.data.sessions.map(obj => {
            return { ...obj, day: (days[obj.day - 1]) }
        });
    }

    /**
     * Get performance datas of user
     * @returns {promise<{value: number, kind: string}[]>}
     */
    async performance() {
        const performance = await fetchData(domainName + "user/" + this.id + "/performance");
        
        const { data, kind } = performance.data;
        const translateKinds = {
            cardio: "Cardio",
            energy: "Energie",
            endurance: "Endurance",
            strength: "Force",
            speed: "Vitesse",
            intensity: "Intensité",
        };
        return data.map(obj => {
            return { ...obj, kind: translateKinds[kind[obj.kind]] }
        })
    }
}

export default GetUserData;