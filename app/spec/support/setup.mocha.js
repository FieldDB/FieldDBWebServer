import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import jsdom from 'jsdom'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)
chai.use(chaiAsPromised)

global.document = jsdom.jsdom('<html><head><script></script></head><body></body></html>')
global.window = global.document.defaultView
global.navigator = global.window.navigator
