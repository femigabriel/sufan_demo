import { Avatar, Button, IconButton } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import ChatProfile from "./Widgets/ChatProfile";
import ChatSection from "./Widgets/ChatSection";
import InputField from "components/forms/InputField";
import SearchIcon from "@mui/icons-material/Search";
// import ChatProfileLoader from "./Widgets/ChatProfileLoader";
// import Loader from "components/Loader";
import EmptyResponse from "components/EmptyResponse";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserName } from "utils";
import DropDownWrapper from "components/DropDownWrapper";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { chats_mock2 } from "./Widgets/messagesList";
import FileIcon from "components/Vectors/FileIcon";
import RemoveRedEyeOutlined from "@mui/icons-material/RemoveRedEyeOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import ArchiveIcon from "components/Vectors/ArchiveIcon";
import FlagIconOutlined from "components/Vectors/FlagIconOutlined";
import ConversationIcon from "components/Vectors/ConversationIcon";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import TagIcon from "components/Vectors/TagIcon";

function ArchivedChats() {
    const [activeChatID, setActiveChatID] = useState(null);
    const [showChats, setshowChats] = useState(false);
    const user = {
        id: "123",
    };
    // get converstion
    // set all chats in state
    const [allChats, setAllChats] = useState(chats_mock2);

    // // search chats
    const searchChats = useCallback(
        value => {
            if (value && !!value.trim() && chats_mock2) {
                const newConv = [...chats_mock2].filter(item => {
                    let mem = item.members.find(member => member.id !== user?.id);
                    console.log(value, mem?.id);
                    if (mem)
                        return (
                            mem.id === value ||
                            getUserName(mem)?.toLowerCase().includes(value.toLowerCase())
                        );
                    else return false;
                });
                setAllChats(newConv);
            } else if (chats_mock2) {
                setAllChats(chats_mock2);
            }
        },
        [user?.id]
    );


    // get single chat from params id
    const location = useLocation();
    const urlParams = new URLSearchParams(location.search);
    const chatId = urlParams.get("id");
    useEffect(() => {
        if (chatId && chats_mock2) {
            searchChats(chatId);
        }
    }, [chatId, searchChats]);
    const navigate = useNavigate();
    // if (false) return <Loader />;
    return (
        <div className="h-full bg-grey100 py-6 md:px-8 px-0">
            <div
                style={{ height: "calc(100vh - 200px)" }}
                className="flex overflow-hidden relative min-h-[760px] bg-white rounded-lg border w-full"
            >
                <div className="lg:w-[350px] w-full lg:border-r border-primaryBorder py-6 lg:max-w-[450px] max-h-full h-full flex flex-col overflow-hidden">
                    <div className="flex gap-3 items-center border-b pb-5 space-x-3 px-4">
                        <IconButton onClick={() => navigate(-1)}>
                            <ArrowBackIcon />
                        </IconButton>
                        <p className="text-xl font-semibold">
                            Archived Messages
                        </p>
                        {/* <DropDownWrapper
                            className="more-actions"
                            action={
                                <Button
                                    variant="contained"
                                    color="greyBorder"
                                    sx={{
                                        minWidth: "unset",
                                        px: "10px !important",
                                    }}
                                >
                                    <MoreVertOutlinedIcon />
                                </Button>
                            }
                        >
                            <div>
                                <button>Archived Messages</button>
                                <button>Unread messages</button>
                            </div>
                        </DropDownWrapper> */}
                    </div>
                    <div className="px-4 py-4 border-primaryBorder">
                        <InputField
                            extraClass="border-primaryBorder"
                            spaceY={false}
                            onChange={e => {
                                searchChats(e.target.value);
                            }}
                            prefix={<SearchIcon sx={{ color: "#00233F80", mx: 0.5 }} />}
                            placeholder="Search users..."
                        />
                    </div>
                    <div className="chats flex-grow overflow-auto h-[100vh] py-1 scrollbar-style">
                        {!allChats.length ? (
                            <div className="h-2/3">
                                <EmptyResponse
                                    icon={<ArchiveIcon color='#8585A3' sx={{ height: 80, width: 80 }} />}
                                    message="No Archived chats"
                                />
                            </div>
                        ) : (
                            allChats?.map((item, i) => (
                                <ChatProfile
                                    time={item.updatedAt}
                                    active={item.id === activeChatID}
                                    key={item.id + "_" + i}
                                    lastMsg={
                                        item.messages[item.messages.length - 1]?.file &&
                                            item.messages[item.messages.length - 1]?.file?.length ? (
                                            <span className="flex space-x-2 items-center">
                                                <FileIcon width={"0.9rem"} height={"0.9rem"} />
                                                <span>File</span>
                                            </span>
                                        ) : (
                                            item.messages[item.messages.length - 1]?.text
                                        )
                                    }
                                    senderInfo={item.members.find(el => el.id !== user?.id)}
                                    onClick={() => {
                                        setActiveChatID(item.id);
                                        setshowChats(true);
                                    }}
                                />
                            ))
                        )}
                    </div>
                </div>
                <div
                    className={`flex-grow absolute inset-0 bg-white lg:static z-20 transition  ${showChats ? "translate-x-0" : "translate-x-[110vw] lg:translate-x-0"
                        } `}
                >
                    {/* {false && <Loader />} */}
                    {chats_mock2.length > 0 && activeChatID !== null && (
                        <ChatSection
                            chatId={chats_mock2.find(el => el.id === activeChatID).id}
                            chatHeader={
                                <div className="flex justify-between items-center p-4 border-b border-primaryBorder">
                                    <div className="flex items-center">
                                        <div className="flex lg:hidden -ml-3">
                                            <IconButton
                                                onClick={() => {
                                                    setActiveChatID(null);
                                                    setshowChats(false);
                                                }}
                                            >
                                                <ArrowBackIcon />
                                            </IconButton>
                                        </div>
                                        <div className="flex space-x-4 items-center">
                                            <Avatar
                                                className="w-[50px] h-[50px]"
                                                src={
                                                    chats_mock2
                                                        .find(el => el.id === activeChatID)
                                                        .members.find(el => el.id !== user?.id).avatar
                                                        ?.url || ""
                                                }
                                                alt="user"
                                            />
                                            <div>
                                                <p className="text-primaryDark text-xl font-medium">
                                                    {
                                                        chats_mock2
                                                            .find(el => el.id === activeChatID)
                                                            .members.find(el => el.id !== user?.id).name
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inline-flex gap-2 5 items-center">
                                        <Button
                                            variant='contained'
                                            sx={{ borderRadius: '6px' }}
                                            color='primaryInverse'
                                        >
                                            Share Campaign
                                        </Button>

                                        <DropDownWrapper
                                            className="more-actions"
                                            action={
                                                <Button
                                                    variant="contained"
                                                    color="greyBorder"
                                                    sx={{
                                                        borderRadius: '6px',
                                                        minWidth: "unset",
                                                        px: {
                                                            xs: "5px !important",
                                                            sm: "10px !important",
                                                        },
                                                    }}
                                                >
                                                    <MoreVertOutlinedIcon />
                                                </Button>
                                            }
                                        >
                                            <div>
                                                <button>
                                                    <RemoveRedEyeOutlined /> View Profile
                                                </button>
                                                <button>
                                                    <ArchiveIcon /> Archive
                                                </button>
                                                <button>
                                                    <PushPinOutlinedIcon /> Pin Chat
                                                </button>
                                                <button className="text-error">
                                                    <FlagIconOutlined /> Create Ticket
                                                </button>
                                            </div>
                                        </DropDownWrapper>
                                    </div>
                                </div>
                            }
                            messages={chats_mock2.find(el => el.id === activeChatID).messages}
                            senderInfo={chats_mock2
                                .find(el => el.id === activeChatID)
                                .members.find(el => el.id !== user?.id)}
                        />
                    )}
                    {!allChats.length
                        // ? null
                        //           : activeChatID === null
                        && (
                            <div className="h-full w-full flex items-center justify-center flex-col">
                                <EmptyResponse
                                    icon={<ConversationIcon sx={{ height: 80, width: 80 }} />}
                                    message="Select a conversation"
                                />
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
}

export default ArchivedChats;
