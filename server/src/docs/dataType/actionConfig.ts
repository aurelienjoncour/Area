export const actionConfig = {
    DateTimeConfig: {
        type: "object",
        required: ["time"],
        properties: {
            time: {
                type: "number",
                description: "timestamp for the action"
            }
        }
    },
    TimeConfig: {
        type: "object",
        required: ["time"],
        properties: {
            time: {
                type: "string",
                description: "cron config string",
                example: "* * * * *"
            }
        }
    },
    TwitchStreamConfig: {
        type: "object",
        required: ["username"],
        properties: {
            username: {
                type: "string",
                description: "Username of the streamer",
                example: "aypierre"
            }
        }
    },
    TwitterTweetConfig: {
        type: "object",
        required: ["username"],
        properties: {
            username: {
                type: "string",
                description: "Username on twiter",
                example: "Phaillyks"
            }
        }
    },
    RSSConfig: {
        type: "object",
        required: ["url"],
        properties: {
            url: {
                type: "string",
                description: "url of the rss flux"
            }
        }
    },
    DiscordMessageConfig: {
        type: "object",
        required: ["channelId"],
        properties: {
            channelId: {
                type: "string",
                description: "id of the discord channel"
            }
        }
    },
    GithubIssueConfig: {
        type: "object",
        required: ["owner", "repository"],
        properties: {
            owner: {
                type: "string",
                description: "username of the repository owner"
            },
            repository: {
                type: "string",
                description: "name of the repository"
            }
        }
    },
    GithubPulReqConfig: {
        type: "object",
        required: ["owner", "repository"],
        properties: {
            owner: {
                type: "string",
                description: "username of the repository owner"
            },
            repository: {
                type: "string",
                description: "name of the repository"
            }
        }
    }
};