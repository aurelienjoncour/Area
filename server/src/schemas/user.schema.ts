import mongoose, { PopulateOptions } from "mongoose";

import User from "@classes/user.class";
import { getStrObjectId, ObjectId } from "@classes/model.class";
import OAuthProvider from "../models/oAuthProvider.enum";
import { ASchema } from "./abstract.schema";
import ARea from "@classes/area.class";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true},
    password: { type: String },
    token: { type: String },
    areas: [
        { type: mongoose.Schema.Types.ObjectId, ref: "ARea" }
    ],
    oauth: {
        twitter: {
            id: { type: String },
            accessToken: { type: String },
            secretToken: { type: String }
        },
        github: {
            id: { type: String },
            accessToken: { type: String },
            refreshToken: { type: String }
        },
        discord: {
            id: { type: String },
            accessToken: { type: String },
            refreshToken: { type: String }
        },
        dropbox: {
            id: { type: String },
            accessToken: { type: String },
            refreshToken: { type: String }
        },
        notion: {
            id: { type: String },
            accessToken: { type: String }
        },
        twitch: {
            id: { type: String },
            accessToken: { type: String },
            refreshToken: { type: String }
        },
        linkedin: {
            id: { type: String },
            accessToken: { type: String },
            refreshToken: { type: String }
        },
        unsplash: {
            id: { type: String },
            accessToken: { type: String },
            refreshToken: { type: String }
        }
    }
}, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

export class UserSchema extends ASchema<User> {
    constructor() {
        super(User, "User", userSchema);
    }

    public async isLoginValid(username: string, password: string): Promise<boolean> {
        const result = await this._model.findOne({ username, password });

        return !!result;
    }

    public async findByUsername(username: string): Promise<User | undefined> {
        const result = await this._model.findOne({ username });

        if (!result)
            return undefined;
        return new User(result.toObject<User>());
    }

    public async addARea(userId: ObjectId | string, area: ARea | ObjectId): Promise<User> {
        const result = await this._model.findByIdAndUpdate(userId, { $push: { areas: area } });

        if (!result)
            throw "Fail to add ARea";
        return new User(result.toObject<User>());
    }

    public async removeARea(userId: ObjectId | string, area: ARea | ObjectId | string): Promise<User> {
        const result = await this._model.findByIdAndUpdate(userId, { $pull: { areas: getStrObjectId(area) } });

        if (!result)
            throw "Fail to remove area from user";
        return new User(result.toObject<User>());
    }

    public async findByOAuthProviderId(providerType: OAuthProvider, providerId: string): Promise<User | undefined> {
        if (providerType === OAuthProvider.LOCAL)
            try {
                return this.get(providerId);
            } catch (error) {
                return undefined;
            }

        const result = await this._model.findOne({
            [`oauth.${providerType}.id`]: providerId
        });

        if (!result)
            return undefined;
        return new User(result.toObject<User>());
    }

    public async getUserList(): Promise<User[]> {
        const result = this.find(undefined, {
            path: "areas",
            populate: [
                {
                    path: "trigger",
                    populate: "action" as unknown as PopulateOptions
                },
                {
                    path: "consequence",
                    populate: "reaction" as unknown as PopulateOptions
                }
            ]
        });

        return result;
    }

    public async getAreaList(userId: ObjectId | string): Promise<User> {
        const result = this.get(userId, {
            path: "areas",
            populate: [
                {
                    path: "trigger",
                    populate: "action" as unknown as PopulateOptions
                },
                {
                    path: "consequence",
                    populate: "reaction" as unknown as PopulateOptions
                }
            ]
        }, "areas");

        return result;
    }

    public async getUserByAReaId(area: ARea | ObjectId | string): Promise<User> {
        const areaId: string = getStrObjectId(area);
        const result = await this._model.findOne({ areas: areaId }).exec();

        if (!result)
            throw "User with area ID not found: " + areaId.toString();
        return new User(result.toObject<User>());
    }

}