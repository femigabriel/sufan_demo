function ChatProfileLoader() {
  return (
    <>
      <div className={`border-b border-primaryBorder py-3 px-6 animate-pulse`}>
        <div className="flex space-x-3 items-center">
          <div className="rounded-full bg-slate-300 h-[36px] w-[36px]"></div>
          <div className="grid grid-cols-3 gap-4 flex-grow">
            <div className="h-2 bg-slate-300 rounded col-span-2"></div>
            <div className="h-2 bg-slate-300 rounded col-span-1"></div>
          </div>
        </div>
        <div className="space-y-3 mt-4">
          <div className="h-2 bg-slate-300 rounded"></div>
          <div className="h-2 bg-slate-300 rounded"></div>
        </div>
      </div>
    </>
  );
}

export default ChatProfileLoader;
