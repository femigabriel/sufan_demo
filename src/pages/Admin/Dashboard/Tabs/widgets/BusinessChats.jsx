/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useGetUser } from "../../../../../hooks/getUserHook"
import { useGetAdminConversationQuery } from "../../../../../services/Admin/adminGeneral.api";
import Chats from "../../../../Chats"
import {
  io
} from 'socket.io-client';


const BusinessChats = () => {
  const { user } = useGetUser();
  const [realTimeMessage, setRealTimeMessage] = useState({})
  const [socket, setSocket] = useState(null)
  // const { data: users } = useGetUsersQuery()
  const [onlineUsers, setOnlineUsers] = useState([])

  // const isOnline = onlineUsers?.some((u) => u?.userId === user?._id)
 

  const params = {
    _id: user?._id
  }
  const { data: getConversations, isLoading: isConversationLoading } = useGetAdminConversationQuery(params)

  const conversations = getConversations?.data;

  useEffect(() => {
    const newSocket = io('https://sufian-bles.onrender.com');
    setSocket(newSocket)

    return () => {
      socket?.disconnect();
    };
  }, []);

  useEffect(() => {
    socket?.emit('join', { userId: user?._id, type: 'Admin' })

    socket?.on('join', () => {
      // console.log("Response:--", res);
    })


    socket?.on('private-message', (msg) => {
      // console.log("private-message", msg)
      setRealTimeMessage(msg)
    })

    socket?.emit('onlineUsers', user?._id)
    socket?.on("onlineUsers", (res) => {
      // console
      setOnlineUsers(res)
    });

    return () => {
      socket?.off('onlineUsers')
      socket?.emit('offline')
    }

  }, [socket]);

  // console.log(socket)
  return (
    <>
      <Chats
        conversations={conversations}
        realTimeMessage={realTimeMessage}
        socket={socket}
        // isOnline={isOnline}
        onlineUsers={onlineUsers}
        isConversationLoading={isConversationLoading}
      />
    </>
  )
}

export default BusinessChats