/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Avatar, Fade, IconButton, Slide } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import ChatProfile from "./Widgets/ChatProfile";
import ChatSection from "./Widgets/ChatSection";
import SearchIcon from "@mui/icons-material/Search";
import EmptyResponse from "../../components/EmptyResponse";
import CircularLoader from "../../components/CircularLoader";
import { useLocation } from "react-router-dom";

import MessageOutlined from "@mui/icons-material/MessageOutlined"

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import SearchInput from "../../components/forms/SearchInput";
import { useGetUser } from "../../hooks/getUserHook";
import { useGetChatsQuery } from "../../services/general.api";

const Chats = ({ conversations, isConversationLoading, realTimeMessage, socket, onlineUsers, isOnline }) => {
  const [activeChatID, setActiveChatID] = useState(null);
  const [showChats, setshowChats] = useState(false);
  const [isTyping, setIsTyping] = useState(false)
  const [openImage, setOpenImage] = useState(false)
  const [image, setImage] = useState('')

  const { user } = useGetUser();

  const chatParams = {
    conversationId: activeChatID
  }

  const {
    data: chatsByConversationId,
    isLoading: isChatsLoading,
  } = useGetChatsQuery(chatParams);

  // get converstion
  // set all chats in state
  const [allConversations, setAllConversations] = useState([]);
  const [allChats, setAllChats] = useState([])

  // Set chats after initial call
  useEffect(() => {
    setAllChats(chatsByConversationId?.data)

  }, [chatsByConversationId?.data])

  // Sets real time messages from socket.io
  useEffect(() => {
    setAllChats(prev => prev && [...prev, realTimeMessage])
  }, [realTimeMessage])
  // console.log("online users:", onlineUsers)


  useEffect(() => {
    setAllConversations(conversations && [...conversations]?.sort(
      (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
    ))

  }, [conversations])

  const searchChats = useCallback(
    (value) => {
      if (value && !!value.trim() && conversations) {
        const newConv = [...conversations].filter((item) => {
          // let mem = item?.members.find((member) => member._id !== user?._id);
          let mem = item?.entityOneId?._id !== user?._id ? item?.entityOneId : item?.entityTwoId?._id !== user?._id ? item?.entityTwoId : null
          if (mem)
            return (
              mem._id === value ||
              mem?.fullName?.toLowerCase().includes(value.toLowerCase())
            );
          else return false;
        });
        setAllConversations(newConv);
      } else if (conversations) {
        setAllConversations(conversations);
      }
    },
    [conversations, user?._id]
  );

  // get single chat from params id
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const chatId = urlParams.get("id");

  useEffect(() => {
    if (chatId && conversations) {
      searchChats(chatId);
    }
  }, [chatId, conversations, searchChats]);


  // CURRENT CONVERSATION
  const currentConversation = conversations?.find((el) => el._id === activeChatID)


  // HELPER FUNCTION TO GET ONLINE USER
  const getConversationOnlineStatus = (item) => {
    const accountType = user?.accountType;
    if (accountType?.toLowerCase() === 'admin') {
      const id = item?.entityOneId?._id;
      const found = onlineUsers?.find((u) => u?.userId === id)
      return found ? true : false
    } else {
      const id = item?.entityTwoId?._id;
      const found = onlineUsers?.some((u) => u?.userId === id)
      return found ? true : false
    }
  }

  // USE TO THE ESCAPE KEY TO NAVIGATE BACK TO THE CONVERSATION LISTS.
  useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setActiveChatID(null);
        setshowChats(false);
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);


  return (
    <>

      <div className="inner bg-grey100">
        <div
          style={{ height: "calc(100vh - 200px)" }}
          className="flex bg-[#18204E] overflow-hidden relative min-h-[760px] bgwhite rounded-2xl w-full"
        >
          <div className="lg:w-[400px] w-full lg:border-r border-primaryBorder py-6 lg:max-w-[450px] max-h-full h-full flex flex-col overflow-hidden">
            <p className="text-xl md:text-2xl lg:pl-7 text-center font-semibold mb-5 md:mb-10 text-white">Recent Conversations</p>
            <div className="flex items-center justify-center lg:pl-7 mb-8">
              <SearchInput
                spaceY={false}
                className='bg-[#020718] !text-[#c8c8c8] bg-opacity-[23%] !max-w-[300px] border-2 border-[#15A4FB]/50'
                onChange={(e) => {
                  searchChats(e.target.value);
                }}
                prefix={<SearchIcon sx={{ color: "#00233F80", mx: 0.5 }} />}
                placeholder="Search..."
              />
            </div>
            <div className=" chats flex-grow overflow-auto px-7 h-[100vh] py-1 scrollbar-style">
              {isConversationLoading ? (<CircularLoader />) : !allConversations?.length ? (
                <div className="h-2/3">
                  <EmptyResponse
                    icon={<MessageOutlined sx={{ height: 80, width: 80 }} />}
                    message="No Conversations found"
                  />
                </div>
              ) : (
                allConversations?.map((item, i) => {
                  return (
                    <ChatProfile
                      time={item?.updatedAt}
                      active={item?._id === activeChatID}
                      key={item?._id + "_" + i}
                      isOnline={getConversationOnlineStatus(item)}
                      isTyping={isTyping}
                      id={item?._id}
                      lastMsg={item?.lastMessage?.message || item?.lastMessage?.image}
                      senderInfo={
                        item?.entityOneId?._id !== user?._id
                          ? item?.entityOneId || item
                          : item?.entityTwoId?._id !== user?._id
                            ? item?.entityTwoId || item
                            : null
                      }
                      onClick={() => {
                        setActiveChatID(item?._id);
                        setshowChats(true);
                      }}
                    />
                  )
                })
              )}
            </div>
          </div>
          <div
            className={`flex-grow absolute inset-0 bgwhite lg:static z-20 transition  ${showChats
              ? "translate-x-0"
              : "translate-x-[110vw] lg:translate-x-0"
              } `}
          >
            {/* {false && <Loader />} */}
            {conversations?.length > 0 && activeChatID !== null && (
              <ChatSection
                setOpenImage={setOpenImage}
                setImage={setImage}
                isChatsLoading={isChatsLoading}
                isOnline={getConversationOnlineStatus(currentConversation)}
                socket={socket}
                setIsTypingProfile={setIsTyping}
                // chatId={conversations.find((el) => el._id === activeChatID)._id}
                chatHeader={
                  <div className="flex justify-between items-center p-4 border-b border-light-blue">
                    <div className="flex items-center">
                      <div className="flex lg:hidden -ml-3">
                        <IconButton
                          onClick={() => {
                            setActiveChatID(null);
                            setshowChats(false);
                          }}
                        >
                          <ArrowBackIcon sx={{ color: '#99A9FF' }} />
                        </IconButton>
                      </div>
                      <div className="flex space-x-4 items-center">
                        <span className="relative">
                          <Avatar
                            sx={{ borderRadius: '8px', width: '43px', height: '43px', }}
                            src={
                              currentConversation?.entityOneId?._id !== user?._id
                                ? currentConversation?.entityOneId?.profileImage || currentConversation?.profileImage
                                : currentConversation?.entityTwoId?._id !== user?._id
                                  ? currentConversation?.entityTwoId?.profileImage || currentConversation?.profileImage
                                  : null
                            }
                            alt="user"
                          />

                          <span className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full ${getConversationOnlineStatus(currentConversation) ? 'bg-success' : 'bg-error'}`}></span>
                        </span>
                        <div className="flex flex-col justify-center">
                          <p className="flex gap-1 capitalize items-center text-white text-xl font-medium">
                            {
                              currentConversation?.entityOneId?._id !== user?._id
                                ? currentConversation?.entityOneId?.fullName || currentConversation?.fullName
                                : currentConversation?.entityTwoId?._id !== user?._id
                                  ? currentConversation?.entityTwoId?.fullName || currentConversation?.fullName
                                  : null
                            }
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 items-center">
                      <IconButton>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.51336 2.66667H6.62919L7.95561 5.98317L5.82436 7.404C5.69885 7.48774 5.59596 7.60116 5.5248 7.7342C5.45364 7.86724 5.41642 8.01579 5.41644 8.16667C5.41919 8.25283 5.41644 8.16758 5.41644 8.16758V8.18683C5.41699 8.22783 5.41882 8.26879 5.42194 8.30967C5.42744 8.38483 5.43661 8.48658 5.45403 8.61217C5.48978 8.85967 5.55853 9.20067 5.69236 9.60217C5.96186 10.4088 6.48986 11.4529 7.51836 12.4814C8.54686 13.5099 9.59094 14.0379 10.3967 14.3074C10.7991 14.4413 11.1392 14.5091 11.3885 14.5458C11.5293 14.5654 11.6709 14.5776 11.8129 14.5824L11.8249 14.5833H11.8322C11.8322 14.5833 11.9349 14.5778 11.8331 14.5833C12.0033 14.5832 12.1701 14.5358 12.3148 14.4462C12.4596 14.3567 12.5765 14.2287 12.6526 14.0764L13.2668 12.8481L17.3331 13.5264V17.4864C15.398 17.766 10.1712 18.0419 6.06453 13.9353C1.95786 9.82858 2.23286 4.60083 2.51336 2.66667ZM7.31669 8.61217L8.97311 7.5085C9.32304 7.27509 9.58207 6.92845 9.70674 6.52672C9.83142 6.12499 9.81416 5.6926 9.65786 5.30208L8.33144 1.98558C8.19533 1.64541 7.96041 1.35383 7.657 1.14845C7.35358 0.943067 6.99558 0.833309 6.62919 0.833334H2.46569C1.63244 0.833334 0.848694 1.41175 0.712111 2.31558C0.400444 4.37075 -0.0221393 10.4409 4.76836 15.2314C9.55886 20.0219 15.629 19.5984 17.6842 19.2877C18.588 19.1502 19.1664 18.3673 19.1664 17.5341V13.5264C19.1665 13.0924 19.0126 12.6725 18.7321 12.3413C18.4516 12.0102 18.0628 11.7892 17.6347 11.7178L13.5684 11.0404C13.1816 10.9759 12.7844 11.037 12.4349 11.2149C12.0855 11.3927 11.8023 11.6779 11.6269 12.0286L11.3097 12.6638C11.1975 12.6362 11.0865 12.6041 10.9769 12.5676C10.4086 12.3788 9.61936 11.9901 8.81453 11.1853C8.00969 10.3804 7.62103 9.59117 7.43219 9.02192C7.3871 8.88736 7.34886 8.7506 7.31761 8.61217H7.31669Z" fill="#99A9FF" />
                        </svg>
                      </IconButton>

                      <IconButton>
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.0002 19.0229L14.6572 14.6799M14.6572 14.6799C15.4001 13.937 15.9894 13.0551 16.3914 12.0845C16.7935 11.1139 17.0004 10.0735 17.0004 9.02294C17.0004 7.97233 16.7935 6.93202 16.3914 5.96139C15.9894 4.99076 15.4001 4.10882 14.6572 3.36594C13.9143 2.62305 13.0324 2.03376 12.0618 1.63171C11.0911 1.22966 10.0508 1.02273 9.00021 1.02273C7.9496 1.02273 6.90929 1.22966 5.93866 1.63171C4.96803 2.03376 4.08609 2.62305 3.34321 3.36594C1.84288 4.86627 1 6.90115 1 9.02294C1 11.1447 1.84288 13.1796 3.34321 14.6799C4.84354 16.1803 6.87842 17.0231 9.00021 17.0231C11.122 17.0231 13.1569 16.1803 14.6572 14.6799Z" stroke="#99A9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </IconButton>
                      <IconButton>
                        <svg width="6" height="20" viewBox="0 0 6 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.64062 8.35938C5.11458 8.83333 5.35156 9.38021 5.35156 10C5.35156 10.6198 5.11458 11.1667 4.64062 11.6406C4.16667 12.1146 3.61979 12.3516 3 12.3516C2.38021 12.3516 1.83333 12.1146 1.35937 11.6406C0.885416 11.1667 0.648437 10.6198 0.648437 10C0.648437 9.38021 0.885416 8.83333 1.35937 8.35938C1.83333 7.88542 2.38021 7.64844 3 7.64844C3.61979 7.64844 4.16667 7.88542 4.64062 8.35938ZM4.64062 15.3594C5.11458 15.8333 5.35156 16.3802 5.35156 17C5.35156 17.6198 5.11458 18.1667 4.64062 18.6406C4.16667 19.1146 3.61979 19.3516 3 19.3516C2.38021 19.3516 1.83333 19.1146 1.35937 18.6406C0.885416 18.1667 0.648437 17.6198 0.648437 17C0.648437 16.3802 0.885416 15.8333 1.35937 15.3594C1.83333 14.8854 2.38021 14.6484 3 14.6484C3.61979 14.6484 4.16667 14.8854 4.64062 15.3594ZM4.64062 1.35938C5.11458 1.83333 5.35156 2.38021 5.35156 3C5.35156 3.61979 5.11458 4.16667 4.64062 4.64063C4.16667 5.11458 3.61979 5.35156 3 5.35156C2.38021 5.35156 1.83333 5.11458 1.35937 4.64063C0.885416 4.16667 0.648437 3.61979 0.648437 3C0.648437 2.38021 0.885416 1.83333 1.35937 1.35938C1.83333 0.885418 2.38021 0.648439 3 0.648439C3.61979 0.648439 4.16667 0.885418 4.64062 1.35938Z" fill="white" fillOpacity="0.5" />
                        </svg>
                      </IconButton>
                    </div>
                  </div>
                }
                messages={allChats}
                senderInfo={
                  currentConversation?.entityOneId?._id !== user?._id
                    ? currentConversation?.entityOneId || currentConversation
                    : currentConversation?.entityTwoId?._id !== user?._id
                      ? currentConversation?.entityTwoId || currentConversation
                      : null
                }
              />
            )}
            {!allConversations?.length
              ? null
              : activeChatID === null && (
                <div className="h-full w-full flex items-center justify-center flex-col">
                  <EmptyResponse
                    icon={<MessageOutlined sx={{ height: 80, width: 80 }} />}
                    message="Select a conversation"
                  />
                </div>
              )}
          </div>
        </div>

      </div>

      {/* CHAT IMAGE MODAL */}
      <Fade
        in={openImage}
      >
        <div
          onClick={(e) => e.target === e.currentTarget && setOpenImage(false)}
          className="modal-wrap"
        >
          <Slide direction="up"
            in={true}
            mountOnEnter unmountOnExit
          >
            <div
              style={{
                maxWidth: 600,
                // height: 400,
                flexGrow: 1,
                position: "relative",
              }}
            >
              <IconButton
                sx={{ background: "rgba(0, 0, 0, 0.04) !important", position: 'absolute' }}
                className="close-modal-btn"

                onClick={() => setOpenImage(false)}
              >
                <ClearIcon sx={{ fontSize: "32px", color: '#fff' }} />
              </IconButton>

              <img src={image} alt="chat_img" className="min-w-full  min-h[400px] h-auto max-h-[75vh] !object-fill !rounded-[20px]" />
            </div>
          </Slide>
        </div>
      </Fade>
    </>
  );
};

export default Chats;
