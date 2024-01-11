export class Deal {
    projectName: string;

    constructor(obj?: any) {
        this.projectName = obj ? obj.projectName : '';
    }

    public toJSON() {
        return {
            projectName: this.projectName
        };
    }
}