/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect } from "react";
import { useGetUser } from "../../../../../hooks/getUserHook"
import { useGetAdminProfileQuery, useGetConversationQuery } from "../../../../../services/general.api"
import Chats from "../../../../Chats"
// import socket from "../../../../../socket";
import { useEffect, useState } from "react";

import {
  io
} from 'socket.io-client';


const BusinessChats = () => {
  const { user } = useGetUser();
  const [realTimeMessage, setRealTimeMessage] = useState({})
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([])

  const params = {
    _id: user?._id
  }
  const { data: getConversations, isLoading: isConversationLoading } = useGetConversationQuery(params)

  const conversations = getConversations?.data

  const { data: adminProfile } = useGetAdminProfileQuery();

  useEffect(() => {
    const newSocket = io('https://sufian-bles.onrender.com');
    setSocket(newSocket)

    return () => {
      socket?.disconnect();
    };
  }, []);



  useEffect(() => {
    socket?.emit('join', { userId: user?._id, type: 'User' })

    socket?.on('join', () => {
      // console.log("Response:", res);
    })

    socket?.on('private-message', (msg) => {
      // console.log("private-message", msg)
      setRealTimeMessage(msg)
    })

    socket?.emit('onlineUsers', user?._id)
    socket?.on("onlineUsers", (res) => {
      setOnlineUsers(res)
    });

    return () => {
      socket?.off('onlineUsers')
      socket?.emit('offline')
    }


  }, [socket]);

  // console.log(socket)


  // console.log(onlineUsers, socket)

  return (
    <>
      <Chats
        conversations={conversations?.length === 0 ? adminProfile?.data : getConversations?.data}
        realTimeMessage={realTimeMessage}
        socket={socket}
        onlineUsers={onlineUsers}
        isConversationLoading={isConversationLoading}
      />
    </>
  )
}

export default BusinessChats