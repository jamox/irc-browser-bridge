import logger from 'winston'
import ChatBinder from './chatbinder'

//if (process.env.NODE_ENV === 'development') {
logger.level = 'debug'
logger.info("Logging in debug level")
//}

const ircOpts = {
  server: 'open.ircnet.net',
  nick: 'tmc-irc',
  channel: '#mooc.fi'
}

const chatBinder = new ChatBinder(ircOpts, 3001)
chatBinder.start()
