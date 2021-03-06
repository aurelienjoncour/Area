export const getActionList = {
    get: {
        tags: ["Service"],
        security: [{
            bearerAuth: []
        }],
        description: "Get a list of action available",
        operationId: "getActionList",
        parameters: [
            {
                name: "service",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/ServiceType"
                },
                required: false,
                description: "Service name"
            }
        ],
        responses: {
            "400": {
                description: "Missing or wrong params"
            },
            "401": {
                $ref: "#/components/responses/MissingToken"
            },
            "403": {
                $ref: "#/components/responses/UnauthorizedError"
            },
            "200": {
                description: "A list of action is obtained",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/ActionList"
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