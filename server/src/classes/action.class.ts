import Model from "./model.class";
import { Parameter } from "../models/Parameters";
import { ServiceType } from "../models/ServiceType";

export enum ActionType {
    CRON = "CRON",
    DATETIME = "DATETIME",
    TWITCH_STREAM = "TWITCH_STREAM",
    TWITTER_MSG = "TWITTER_MSG",
    RSS_ENTRY = "RSS_ENTRY",
    GITHUB_ISSUE = "GITHUB_ISSUE",
    GITHUB_PULL_REQ = "GITHUB_PULL_REQ",
    DISCORD_MSG = "DISCORD_MSG",
    UNSPLASH_POST = "UNSPLASH_POST",
    UNSPLASH_RANDOM_POST = "UNSPLASH_RANDOM_POST",
}

export default class Action extends Model {
    type: ActionType;
    parameters: Parameter[];
    service: ServiceType;

    constructor(action: Action) {
        super(action);

        this.type = action.type;
        this.parameters = action.parameters;
        this.service = action.service;
    }
}