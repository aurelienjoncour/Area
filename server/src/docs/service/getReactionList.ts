export const getReactionList = {
    get: {
        tags: ["Service"],
        description: "Get a list of reaction available",
        operationId: "getReactionList",
        parameters: [
            {
                name: "service",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/service"
                },
                required: false,
                description: "Service name"
            }
        ],
        responses: {
            "200": {
                description: "A list of reaction is obtained",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/ReactionList"
                        }
                    }
                }
            },
            "500": {
                description: "Server error"
            }
        }
    }
};