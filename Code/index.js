/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');
let ENV = '';
let correctCtr_l1 = 0;
let correctCtr_l2 = 0;

let alreadySaid_l1 = [];
let alreadySaid_l2 = [];

const GetEnvAPIHandler = {
    
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'Dialog.API.Invoked'
            && handlerInput.requestEnvelope.request.apiRequest.name === 'getEnvAPI';
    },
    handle(handlerInput) {
        const apiRequest = handlerInput.requestEnvelope.request.apiRequest;

        let environment = resolveEntity(apiRequest.slots, "environment");

        const resultEntity = {};
        if (environment !== null) {
            resultEntity.environment = apiRequest.arguments.environment;
            ENV = resultEntity.environment;
            correctCtr_l1 = 0;
            correctCtr_l2 = 0;
        }

        const response = buildSuccessApiResponse(resultEntity);
        console.log('GetEnvAPIHandler', JSON.stringify(response));

        return response;
    }
};

const StartGameAPIHandler = {
    
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'Dialog.API.Invoked'
            && handlerInput.requestEnvelope.request.apiRequest.name === 'startGameAPI';
    },
    handle(handlerInput) {
        const apiRequest = handlerInput.requestEnvelope.request.apiRequest;

        let yesNo = resolveEntity(apiRequest.slots, "yesNo");

        const resultEntity = {};
        if (yesNo !== null) {
            if(yesNo === "no" || yesNo === "nope")
                resultEntity.environment = "";
            else
                resultEntity.environment = ENV;
        }

        const response = buildSuccessApiResponse(resultEntity);
        console.log('startGameAPIHandler', JSON.stringify(response));

        return response;
    }
};

const GetResultAPIHandler = {
    
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'Dialog.API.Invoked'
            && handlerInput.requestEnvelope.request.apiRequest.name === 'getResultAPI';
    },
    handle(handlerInput) {
        const apiRequest = handlerInput.requestEnvelope.request.apiRequest;

        let answer = resolveEntity(apiRequest.slots, "answer");

        const resultEntity = {};
        if (answer !== null) {
            if(alreadySaid_l1.includes(answer)){
                resultEntity.correctWrong = "";
                resultEntity.yesNo = "yes";
            } else {
                alreadySaid_l1.push(answer);
                if(["apple","orange","strawberry","peach"].includes(answer)) {
                
                    correctCtr_l1 += 1;
                    if( correctCtr_l1 === 4 ) {
                        resultEntity.yesNo = "no";
                    }
                    else {
                    resultEntity.yesNo = "yes";
                    }
                    resultEntity.correctWrong = "correct";
                } else if(answer === "no") {
                    resultEntity.correctWrong = "wrong";
                    resultEntity.yesNo = "no";
                } else {
                    resultEntity.correctWrong = "wrong";
                    resultEntity.yesNo = "yes";
                }
            }
        } else {
            resultEntity.correctWrong = "wrong";
            resultEntity.yesNo = "yes";
        }

        const response = buildSuccessApiResponse(resultEntity);
        console.log('getResultAPIHandler', JSON.stringify(response), alreadySaid_l1, answer, correctCtr_l1);

        return response;
    }
};

const NextLevelAPIHandler = {
    
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'Dialog.API.Invoked'
            && handlerInput.requestEnvelope.request.apiRequest.name === 'nextLevelAPI';
    },
    handle(handlerInput) {
        const apiRequest = handlerInput.requestEnvelope.request.apiRequest;

        let level = resolveEntity(apiRequest.slots, "level");

        const resultEntity = {};
        if (level !== null) {
            resultEntity.environment = ENV;
        }

        const response = buildSuccessApiResponse(resultEntity);
        console.log('nextLevelAPIHandler', JSON.stringify(response));

        return response;
    }
};

const GetNextLevelResultsAPIHandler = {
    
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'Dialog.API.Invoked'
            && handlerInput.requestEnvelope.request.apiRequest.name === 'getNextLevelResultsAPI';
    },
    handle(handlerInput) {
        const apiRequest = handlerInput.requestEnvelope.request.apiRequest;

        let answerLevelUp = resolveEntity(apiRequest.slots, "answerLevelUp");
        const resultEntity = {};
        
        if (answerLevelUp !== null) {
            if(alreadySaid_l2.includes(answerLevelUp)){
                resultEntity.correctWrong = "";
                resultEntity.yesNo = "yes";
            } else {
                alreadySaid_l2.push(answerLevelUp);
                if(["sleep","ate","jog","sun","cloud","rain"].includes(answerLevelUp)) {
                    correctCtr_l2 += 1;
                    if( correctCtr_l2 === 6 ) {
                        resultEntity.yesNo = "no";
                    }
                    else {
                    resultEntity.yesNo = "yes";
                    }
                    resultEntity.correctWrong = "correct";
                } else if(answerLevelUp === "no") {
                    resultEntity.correctWrong = "wrong";
                    resultEntity.yesNo = "no";
                } else {
                    resultEntity.correctWrong = "wrong";
                    resultEntity.yesNo = "yes";
                }
            }
        } else {
            resultEntity.correctWrong = "wrong";
            resultEntity.yesNo = "yes";
        }

        const response = buildSuccessApiResponse(resultEntity);
        console.log('getNextLevelResultsAPIHandler', answerLevelUp, JSON.stringify(response), alreadySaid_l2, answerLevelUp, correctCtr_l2);

        return response;
    }
};


const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Welcome, you can say Hello or Help. Which would you like to try?';
        console.log("In LaunchRequestHandler");

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';
        console.log("In HelloWorldIntentHandler");

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const resolveEntity = function(resolvedEntity, slot) {

    //This is built in functionality with SDK Using Alexa's ER
    let erAuthorityResolution = resolvedEntity[slot].resolutions
        .resolutionsPerAuthority[0];
    let value = null;

    if (erAuthorityResolution.status.code === 'ER_SUCCESS_MATCH') {
        value = erAuthorityResolution.values[0].value.name;
    }

    return value;
};

const buildSuccessApiResponse = (returnEntity) => {
    return { apiResponse: returnEntity };
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        GetEnvAPIHandler,
        StartGameAPIHandler,
        GetResultAPIHandler,
        NextLevelAPIHandler,
        GetNextLevelResultsAPIHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();