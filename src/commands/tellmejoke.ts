import {Command, flags} from '@oclif/command'
import fetch from 'node-fetch'

export default class Tellmejoke extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    const {args, flags} = this.parse(Tellmejoke)


	fetch('https://geek-jokes.sameerkumar.website/api').then(res => res.json()).then(res=> this.log(res));
    
  }
}
