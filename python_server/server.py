from aiohttp import web
import socketio


sio = socketio.AsyncServer(cors_allowed_origins=['http://localhost:3000'])

app = web.Application()

sio.attach(app)

async def index(request):
    with open('index.html') as f:
        return web.Response(text=f.read(), content_type='text/html')


@sio.on('*')
def catch_all(event, sid, data):
    sio.emit('send_message', { 'data' : 'data' })

@sio.on('message')
async def print_message(sid, message):
    print("Socket ID: " , sid)
    print(message)
    




app.router.add_get('/', index)


if __name__ == '__main__':
    web.run_app(app)