import fetchData from "./fetchData";

const domainName = "http://localhost:3000/"

class GetUserData {

    constructor(id) {
        this.id = id;
    }

    async generalInformations() {
        const generalInformations = await fetchData(domainName + "user/" + this.id);
        return generalInformations.data;
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