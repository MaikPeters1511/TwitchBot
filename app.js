import { ChatClient } from '@twurple/chat'
import {StaticAuthProvider} from "@twurple/auth"
import {Bot, createBotCommand} from "@twurple/easy-bot"
import {config} from "dotenv"
config()

const clientId = process.env.CLIENT_ID
const accessToken = process.env.ACCESS_TOKEN
const authProvider = new StaticAuthProvider(clientId, accessToken)
const channel = process.env.CHANNEL_NAME

const chatClient = new ChatClient({
    authProvider,
    channels: [channel]
});

const bot = new Bot({
    authProvider,
    channels: [channel],
    commands: [
        createBotCommand('dice', (params, { reply }) => {
            const diceRoll = Math.floor(Math.random() * 6) + 1;
            reply(`Du würfelst eine ${diceRoll}`);
        }),
        createBotCommand('hi', (params, { userName, say }) => {
            say(`${userName} sagt Hi zu ${params.join(' ')} und wünscht viel Spass`);
        })
    ]
});

chatClient.connect();
chatClient.say(channel,"hallöchen")
bot.join(channel)


