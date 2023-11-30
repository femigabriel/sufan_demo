/* eslint-disable react/prop-types */
/* eslint-disable no-constant-condition */
import "../style.scss";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import { useEffect, useRef, useState } from "react";
import {
  Avatar,
  // Avatar,
  CircularProgress,
  // Button,
  IconButton
} from "@mui/material";
import InputField from "../../../components/forms/InputField";
import DropDownWrapper from "../../../components/DropDownWrapper";
import EmojiPicker from "emoji-picker-react";
import EmptyResponse from "../../../components/EmptyResponse";
import MessageWidget from "./MessageWidget";
import { AddOutlined, MessageOutlined, SendOutlined, } from "@mui/icons-material";
import { useGetUser } from "../../../hooks/getUserHook";
import { handleError } from "../../../utils";
import { useGetAdminProfileQuery, useGetUsersQuery, useSendChatsMutation } from "../../../services/general.api";
import { LoadingButton } from "@mui/lab";
// import { showToast } from "../../../redux/store.hook";
// import {
//   io
// } from 'socket?.io-client';
import CircularLoader from "../../../components/CircularLoader";

function ChatSection({
  isChatsLoading,
  messages,
  senderInfo,
  chatHeader,
  chatBg,
  inputBg,
  setOpenImage,
  isOnline,
  socket,
  setIsTypingProfile,
  setImage }) {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false)


  useEffect(() => {
    setIsTypingProfile(isTyping)
  }, [isTyping, setIsTypingProfile])



  const [sendChats, { isLoading: isSending }] = useSendChatsMutation()

  const { user } = useGetUser()
  const { data: users } = useGetUsersQuery()

  const userId = users?.data?.data?.find(el => el?._id === senderInfo?._id)

  // scroll to bottom when new messages enter
  const messagesEndRef = useRef();
  const chatsRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  useEffect(() => {
    if (chatsRef.current && messagesEndRef.current && messages)
      setTimeout(() => {
        chatsRef.current.scroll({
          top: messagesEndRef.current.offsetTop,
          behavior: "smooth",
        });
      }, 1000);
  }, [messages]);

  // console.log(messagesEndRef?.current?.offsetTop)

  const { data: adminProfile } = useGetAdminProfileQuery()

  const onSendMsg = async (text) => {
    const formData = new FormData()

    formData.append('recipient', user?.accountType?.toLowerCase() === 'admin' ? 'User' : 'Admin')
    formData.append('recipientId', user?.accountType?.toLowerCase() === 'admin' ? userId?._id : adminProfile?.data[0]?._id)

    if (typeof text === 'string') {
      formData.append('message', text)
    }

    if (typeof text === 'object') {
      formData.append('image', text)
    }

    try {
      await sendChats(formData).unwrap();
      setIsTyping(false)
      setText("")
    } catch (error) {
      handleError(error)
    }
    // console.log(formData.get('recipient'), formData.get('recipientId'))
  }



  const typingHandler = () => {
    socket?.emit('typing', { userId: user?._id, typing: true })

    socket?.on('display', (res) => {
      if (res?.userId !== user?._id) {
        setIsTyping(true);
      }
    })


  };
  let lastTypingTime = new Date().getTime();
  const timerLength = 3000;
  setTimeout(() => {
    const timeNow = new Date().getTime();
    const timeDiff = timeNow - lastTypingTime;
    // console.log(timeNow, lastTypingTime,timeDiff)
    if (timeDiff >= timerLength && isTyping) {
      setIsTyping(false);
    }
  }, timerLength);

  return (
    <>
      {/* <ViewCustomServiceModal /> */}
      <div className="bg-secondary noScrollBar chat-section">
        {chatHeader}
        <div
          ref={chatsRef}
          className={`chat-body noScrollBar bg-grey90 ${chatBg ? chatBg : ""
            } noScrollBar  scrollbarstyle`}
        >
          {isChatsLoading
            ? (
              <CircularLoader />
            )
            : !messages?.length ? (
              <div className="h-2/3">
                <EmptyResponse
                  icon={<MessageOutlined />}
                  message="No messages yet..."
                />
              </div>
            ) : (
              <>
                {messages?.map((msg, i) => (
                  <MessageWidget msg={msg} key={i} senderInfo={senderInfo} isOnline={isOnline} setOpenImage={setOpenImage} setImage={setImage} />
                ))}
              </>
            )}

          {/* TYPING  */}
          {isTyping && (
            <div className="message sender" >
              <span className="relative mr-2">
                <Avatar
                  className="w-full h-full"
                  sx={{ borderRadius: '8px' }}
                  src={senderInfo?.profileImage || ""}
                  alt={"Sender"}
                />
                <span className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-success`}></span>

              </span>
              <div className="right">
                <p
                  className={`time w-fit mb-2 flex gap-1 items-center text-white font-normal text-xs  ml-auto`}
                >
                  <span className="capitalize font-bold">{senderInfo?.fullName}</span>

                </p>
                <p className="font-normal text-light-blue text-xs italic">Typing</p>
              </div>
            </div>
          )}

          <div ref={messagesEndRef}></div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSendMsg(text);
          }}
          className="chat-form bg-secondary flex gap-2 items-center"
        >
          {/* <Avatar src="" sx={{ mr: 2 }} /> */}
          <div
            className={`rounded-xl  ${inputBg ? inputBg : "bg-[#18204E]"
              } flex flex-grow items-center  justify-between md:mr4 mr2`}
          >
            <div className="flex-1">
              <InputField
                ref={inputRef}
                value={typeof text === 'object' ? text?.name : text}
                onChange={(e) => {
                  typingHandler()
                  setText(e.target.value)
                }}
                placeholder="Type to add your message"
                spaceY={false}
                className='!w-full !bg-transparent !text-light-blue'
              />
            </div>
            <div className="flex gap-x-2 items-center pr-3 w3/12">
              <DropDownWrapper
                contentPadding="p-0"
                orientation="top"
                mobilePosition={"-right-10"}
                position="right"
                action={
                  <IconButton component="div">
                    <SentimentSatisfiedOutlinedIcon sx={{ color: '#99A9FF' }} />
                  </IconButton>
                }
              >
                <div>
                  <EmojiPicker
                    onEmojiClick={(e,) => {
                      // console.log(e.emoji, val)
                      setText((prev) => `${prev}${e.emoji}`)
                    }
                    }
                    disableAutoFocus={true}
                    native
                  />
                </div>
              </DropDownWrapper>

              <IconButton component="label" htmlFor="file">
                <input
                  // onChange={e => e.target.files && uploadFile(e?.target?.files[0])}
                  onChange={e => setText(e.target.files[0])}
                  type="file"
                  id="file"
                  name="image"
                  className="sr-only"
                />
                <AddOutlined sx={{ color: '#99A9FF' }} />
              </IconButton>

              <LoadingButton
                loading={isSending}
                loadingIndicator={
                  <CircularProgress
                    sx={{
                      color: "#fff",
                    }}
                    size="1.2rem"
                  />
                }
                type="submit"
                sx={{
                  minWidth: "unset",
                }}
                variant="contained"
              >

                <span className="inline-flex items-center gap-x-1 text-sm">
                  <SendOutlined color='white' />
                </span>

              </LoadingButton>
            </div>
          </div>


        </form>
      </div>
    </>
  );
}

export default ChatSection;
