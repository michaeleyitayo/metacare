import search from "../../../assets/icons/search.svg";

const Header = () => {
  return (
    <div className="text-[18px] h-[78px] border-b-[1px]  border-b-[#ECEBF5 px-[40px] flex items-center justify-between">
      <div className="bg-[#FAFAFC] h-[54px] w-[441px] px-[16px] rounded-[10px] flex items-center">
        <input
          type="text"
          placeholder="Ask us any question"
          className="text-[16px] bg-transparent text-black placeholder-[#A3A3C2] outline-none flex-1"
          id=""
        />
        <img src={search} alt="" />
      </div>
      <div className="w-[175px] h-[54px] rounded-[8px] border-[#ECEBF5] border flex items-center justify-between px-[16px] py-[11px] cursor-pointer">
        <div className="flex items-center gap-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.235 3.48071C11.102 2.36502 10.1525 1.5 9.00098 1.5C7.84947 1.5 6.9 2.36502 6.76693 3.48071C4.88993 4.3316 3.58431 6.22166 3.58431 8.41667V12.1799L2.33144 14.662C2.07964 15.1609 2.4422 15.75 3.00098 15.75H6.87901C7.18788 16.6239 8.02131 17.25 9.00098 17.25C9.98064 17.25 10.8141 16.6239 11.1229 15.75H15.001C15.5598 15.75 15.9223 15.1609 15.6705 14.662L14.4176 12.1799V8.41667C14.4176 6.22166 13.112 4.3316 11.235 3.48071ZM12.9981 12.6964L13.7823 14.25H4.21967L5.00385 12.6964C5.05675 12.5916 5.08431 12.4759 5.08431 12.3585V8.41667C5.08431 6.25355 6.83786 4.5 9.00098 4.5C11.1641 4.5 12.9176 6.25355 12.9176 8.41667V12.3585C12.9176 12.4759 12.9452 12.5916 12.9981 12.6964Z"
              fill="#A3A3C2"
            />
          </svg>
          <div className="h-[16px] w-[16px] rounded-[4px] bg-[#F25A68] text-[12px] flex items-center justify-center text-white text-center">
            3
          </div>
        </div>
        <div className="h-[24px] w-[1px] bg-[#ECEBF5]"></div>
        <div className="flex items-center gap-2">
          <div className="h-[32px] w-[32px] rounded-full border-[1px] border-[#6837EF]"></div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 9.05719L10.8619 6.19526C11.1223 5.93491 11.5444 5.93491 11.8047 6.19526C12.0651 6.45561 12.0651 6.87772 11.8047 7.13807L8.4714 10.4714C8.21105 10.7318 7.78895 10.7318 7.5286 10.4714L4.19526 7.13807C3.93491 6.87772 3.93491 6.45561 4.19526 6.19526C4.45561 5.93491 4.87772 5.93491 5.13807 6.19526L8 9.05719Z"
              fill="#696D8C"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
