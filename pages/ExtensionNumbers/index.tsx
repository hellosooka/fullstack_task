import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import { w3cwebsocket } from 'websocket'
import ExtensionData from '../../components/ExtensionData/ExtensionData'
import { useAppDispatch, useAppSelector } from '../../hooks/useApp'
import { changeStatus } from '../../store/authSlice/authSlice'
import style from './ExtensionNumbers.module.css'




export default function ExtensionNumbers() {

	
	const [socket, setSocket] = useState<Socket>();
	const [socketConnected, setSocketConnected] = useState(false);
	const [alert, setAlert] = useState<string[]>([]);



	useEffect(() => {
    setSocket(io("http://localhost:8080"));
  }, []);

	useEffect(() => {
    if (!socket) return;

    socket.on('connect', () => {
      setSocketConnected(socket.connected);
			console.log('Connect succes')
			socket.emit('messag', { Connection: 'ok' })
    });
    socket.on('disconnect', () => {
      setSocketConnected(socket.connected);
    });
		socket.on("send_message", data => {
      setAlert([JSON.parse(data)])
			console.log(alert)
    });
	

  }, [socket]);
		
	const handleSocketConnection = () => {
    if (socketConnected && socket != undefined)
      socket.disconnect();
    else if(socket != undefined) {
      socket.connect();
    }
  }

	const subscribeToDateEvent = (interval = 1000) => {
		if(socket != undefined) {
			socket.emit('send_message', interval);
		}
  }
	

	const router = useRouter()

	const statusSelector = useAppSelector(state => state.authToken.status)
	const dispatch = useAppDispatch()

	const goToAuth = () => {
		dispatch(changeStatus('empty'))
		router.push('/auth')
	}
	

	return (
		<>
			<button onClick={() =>  goToAuth() } className={style.logOut} > Log out </button>
			<div className={style.extensionNumbers} >
				<h1 className={style.title} > <p className={style.search} > Your </p>   extension numbers </h1>
				<ExtensionData />
				<b>Websocket connection status:</b> {socketConnected ? 'Connected' : 'Disconnected'}
			</div>
		</>
	)
}




