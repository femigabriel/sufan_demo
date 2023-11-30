/* eslint-disable react/prop-types */
import { Avatar } from '@mui/material';
import SmallTickIcon from '../Vectors/SmallTickIcon';

function UserDisplay({
    name,
    img,
    badge,
    email,
    handle,
    imgRounded = true,
    truncate = false,
    max_width = '150px',
    size = 'medium',
    textWhite = false,
    reverse = false,
    className = '',
    isOnline = false,
}) {
    return (
        <div
            className={`flex ${size === 'small' ? 'gap-x-2' : 'gap-x-4'} items-center ${reverse && 'flex-row-reverse'
                } ${className}`}
        >
            {(badge || isOnline) ? (
                <div className="relative h-[40px] w-[40px]">
                    <Avatar
                        src={img}
                        alt="avatar"
                        className="w-full"
                        sx={{
                            borderRadius: imgRounded ? '50%' : '4px',
                            width: size === 'medium' ? 40 : size === 'small' ? 30 : 50,
                            height: size === 'medium' ? 40 : size === 'small' ? 30 : 50,
                        }}
                    />
                    {badge &&
                        <div className="absolute -top-1 -right-1">
                            <SmallTickIcon TooltipTitle="verified" tooltipPlacement="top" color="#8937CE" />
                        </div>
                    }

                    {isOnline &&
                        <span className="bg-success rounded-full w-[10px] h-[10px] absolute bottom-0 right-0"></span>
                    }
                </div>
            ) : (
                <Avatar
                    src={img}
                    sx={{
                        borderRadius: imgRounded ? '50%' : '4px',
                        width: size === 'medium' ? 40 : size === 'small' ? 30 : 50,
                        height: size === 'medium' ? 40 : size === 'small' ? 30 : 50,
                    }}
                />
            )}
            <div>
                <p
                    style={{ maxWidth: max_width }}
                    className={`${truncate && `truncate`} ${size === 'medium' || size === 'small' ? 'text-sm' : 'text-base'
                        } ${textWhite ? 'text-white' : 'text-secondary'}  font-medium capitalize`}
                >
                    {name}
                </p>
                {email && (
                    <p
                        className={`${truncate && 'truncate'}  ${size === 'medium' || size === 'small' ? 'text-xs' : 'text-sm'
                            } mt-1 ${textWhite ? 'text-light-blue' : 'text-grey'}  `}
                    >
                        {email}
                    </p>
                )}
                {handle && (
                    <p
                        className={`${truncate && 'truncate'}  ${size === 'medium' || size === 'small' ? 'text-xs' : 'text-sm'
                            } mt-1 ${textWhite ? 'text-white' : 'text-grey'}  `}
                    >
                        {handle}
                    </p>
                )}
            </div>
        </div>
    );
}

export default UserDisplay;
