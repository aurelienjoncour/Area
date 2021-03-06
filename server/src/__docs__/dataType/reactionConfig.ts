export const reactionConfig = {
    TwitterPostTweetConfig: {
        type: "object",
        required: ["message"],
        properties: {
            message: {
                type: "string",
                description: "Text content of the tweet"
            }
        }
    },
    LinkedinPostConfig: {
        type: "object",
        required: ["message"],
        properties: {
            message: {
                type: "string",
                description: "Text content of the linkeding post"
            }
        }
    },
    TwitterUpdatePictureConfig: {
        type: "object",
        required: ["url"],
        properties: {
            url: {
                type: "string",
                description: "The link of the image url (jpg)"
            }
        }
    },
    DiscordPostMsgConfig: {
        type: "object",
        required: ["message"],
        properties: {
            message: {
                type: "string",
                description: "Text content of the discord message"
            }
        }
    },
    GithubCreateIssueConfig: {
        type: "object",
        required: ["owner", "repository", "title", "body"],
        properties: {
            owner: {
                type: "string",
                description: "Username of the repository's owner"
            },
            repository: {
                type: "string",
                description: "Name of the github repository"
            },
            title: {
                type: "string",
                description: "Title of the github issue"
            },
            body: {
                type: "string",
                description: "Message content of the github issue"
            }
        }
    },
    NotionAddMessageConfig: {
        type: "object",
        required: ["message", "urlPage"],
        properties: {
            message: {
                type: "string",
                description: "The content of the notion message"
            },
            urlPage: {
                type: "string",
                description: "The url of the page where the message is append"
            }
        }
    },
    DropboxUploadConfig: {
        type: "object",
        required: ["localFilepath", "remoteFilepath"],
        properties: {
            localFilepath: {
                type: "string",
                description: "The filepath to the file to be sent on the dropbox"
            },
            remoteFilepath: {
                type: "string",
                description: "The filepath that will correspond to the file on the dropbox"
            }
        }
    }
};