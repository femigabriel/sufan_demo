/* eslint-disable react/prop-types */

const TextWithLinesBg = ({ text, uppercase = true }) => {
    return (
        <span
            className={`relative text-center ${uppercase && 'uppercase'} font-semibold mb-10 md2:mb-20 t bg-no-repeat bg-center`}
        >
            <img src="/images/bg-lines.png" alt="" className="absolute top-1/2 max-w-[5.2rem] md2:max-w-none left-1/2 -translate-x-1/2 -translate-y-1/2" />

            <p className="z-1 text-3xl sm:text-4xl md2:text-5xl text-white">

                {text}
            </p>
        </span>
    )
}

export default TextWithLinesBg