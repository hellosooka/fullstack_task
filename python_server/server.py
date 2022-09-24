import socket


new_socket = socket.socket()
new_socket.bind(("127.0.0.1", 2000))
new_socket.listen()


print('Server started')