import { reactionConfig } from "./reactionConfig";
import { actionConfig } from "./actionConfig";
import { parameters } from "./parameters";
import { reactionType } from "./reactionType";
import { actionType } from "./actionType";
import { reaction } from "./reaction";
import { action } from "./action";

export = {
    ...reaction,
    ...action,
    ...reactionType,
    ...actionType,
    ...reactionConfig,
    ...actionConfig,
    ...parameters
};