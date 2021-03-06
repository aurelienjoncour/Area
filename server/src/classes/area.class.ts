import Model, { ObjectId } from "./model.class";
import Action from "./action.class";
import Reaction from "./reaction.class";
import { ActionConfig } from "../models/ActionConfig";
import { ActionResult } from "../models/ActionResult";
import { ReactionConfig } from "../models/ReactionConfig";

export default class ARea extends Model {
    trigger: {
        inputs: ActionConfig;
        action: Action | ObjectId;
        outputs?: ActionResult;
    };
    consequence: {
        inputs: ReactionConfig;
        reaction: Reaction | ObjectId;
    };

    constructor(area: ARea) {
        super(area);

        this.trigger = {
            inputs: area.trigger.inputs,
            action: (area.trigger.action as Action)?._id ? new Action(area.trigger.action as Action) : area.trigger.action,
            outputs: area.trigger.outputs
        };
        this.consequence = {
            inputs: area.consequence.inputs,
            reaction: (area.consequence.reaction as Reaction)?._id ? new Reaction(area.consequence.reaction as Reaction) : area.consequence.reaction
        };
    }
}