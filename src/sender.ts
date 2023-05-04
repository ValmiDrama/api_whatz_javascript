import { start } from "repl";
import { create, Whatsapp, Message, SocketState } from "venom-bot";


const venom = require('venom-bot');



class Sender {
    private client = venom.client;

    constructor() {
        this.initialize()
    }

    async sendText(to: string, body: string) {

        await this.client.sendText(to, body)
    }


    private initialize() {
        venom.create({ session: 'session-name', })
            .then((client) => start(client))
            .catch((error) => console.error(error))

        const qr = (base64Qrimg: string) => {
            console.log('')
        }

        const status = (statusSession: string) => { }

        const start = (client: Whatsapp) => {
            this.client = client

            this.sendText("5562994218721@c.us", "sendText Teste.")

        }




    }

}


export default Sender