import LableIcon from "../components/Icons/Label";
import {
  PlusIcon,
  PencilIcon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/solid";
import profileImage from "./../assets/img/profile.png";
import StopIcon from "../components/Icons/StopIcon";
import NoVoiceIcon from "./../assets/img/microphone.svg";

export default function OutgoingCalls() {
  return (
    <div className="w-full h-full font-primary">
      <div className="border-b border-skyBlue h-[85px] flex items-center px-5 justify-between">
        <div className="w-fit">
          <span className="text-darkPrimary font-bold text-[18px]">
            پروفایل
          </span>

          <div className="flex gap-x-5 text-xs mt-3">
            <span>شنبه ۴ تیرماه</span>
            <span>ساعت: ۱۲:۳۶:۲۸</span>
          </div>
        </div>
        <div className="">
          <div className="w-28 h-12 bg-sky2 rounded-md text-sm text-MidnightSteel px-4 py-3 flex items-center gap-x-2">
            <LableIcon className="stroke-MidnightSteel w-5 h-5" />
            <span>برچسب</span>
          </div>
        </div>
      </div>
      <div className="h-full w-full px-4">
        <div className="h-fit py-3 flex flex-col gap-y-4 md:flex-row md:justify-between md:items-start text-sm">
          <div
            className="h-44 md:h-14 md:text-xs md:w-10/12 lg:w-9/12 bg-SoftBlue rounded-sm flex flex-col md:flex-row md:items-center md:justify-between px-4 py-3 gap-y-7 md:gap-y-0
         text-DeepBlue text-[13px] font-bold"
          >
            <span>اطلاعات نوبت:</span>
            <span>نام پزشک: هدی نعمت</span>
            <span>تاریخ نوبت: ۱۴۰۳/۰۵/۱۲ـ۱۱:۴۵:۰۰</span>
            <span className="flex items-center gap-x-1">
              <PencilIcon className="w-4 h-4 stroke-DeepBlue" />
              ویراش نوبت
            </span>
          </div>
          <button className="md:1/12 lg:w-2/12 h-14 bg-darkPrimary rounded-md flex items-center justify-center gap-x-5 md:gap-x-2 lg:gap-x-4 cursor-pointer px-4 md:mr-2 lg:mr-0">
            <PlusIcon className="stroke-white md:w-5 md:h-5 w-6 h-6" />
            <span className="text-white text-lg md:text-[11px] lg:text-[15px]">
              نوبت جدید
            </span>
          </button>
        </div>
        <div className="mt-4 grid grid-cols-12 gap-4">
          <div className="h-[490px] col-span-12 md:col-span-4 bg-white shadow-Rx rounded-lg overflow-hidden select-none">
            <div className="bg-SoftBlue h-24 relative px-5 py-6">
              <span className="text-darkPrimary text-xs font-bold">
                بیمار قدیمی
              </span>
              <div
                className="absolute left-[50%] -translate-x-[50%] -bottom-16 h-[120px] w-[120px] 
              rounded-full ring-[6px] ring-white bg-red-300 "
              >
                <img src={profileImage} alt="profle-img" />
              </div>
            </div>
            <div className="w-fill px-4 lg:px-20 mt-20 flex flex-col items-center">
              <span className="text-[25px] font-bold">مهدی غفاری</span>
              <span className="text-[30px] text-[#636366] font-bold mt-1 ">
                ۰۵:۳۲
              </span>
              <span className="text-[#ACACAC] text-xs mt-4">در حال ضبط...</span>
              <div className="h-[125px] mt-7 w-full flex flex-col justify-between">
                <div className="h-14 flex gap-x-4">
                  <div className="flex-1 border border-sky3 rounded-md flex flex-col items-center">
                    <StopIcon className="stroke-sky3 mt-1.5" />
                    <span className="text-xs text-sky3 mt-2">نگه داشتن</span>
                  </div>
                  <div className="flex-1 border border-sky3 rounded-md flex flex-col items-center ">
                    <PhoneArrowUpRightIcon className="stroke-sky3 h-4 w-4 mt-1.5 rotate-45" />
                    <span className="text-xs text-sky3 mt-2">انتقال</span>
                  </div>
                  <div className="flex-1 border border-sky3 rounded-md flex flex-col items-center">
                    <img
                      src={NoVoiceIcon}
                      alt="noVoce"
                      className="h-5 w-5 mt-1.5"
                    />
                    <span className="text-xs text-sky3 mt-2">بی صدا</span>
                  </div>
                </div>
                <button className="w-full h-14 bg-red-600 rounded-md flex justify-center items-center gap-x-4 cursor-pointer">
                  <PhoneIcon className="text-white h-7 w-7 rotate-135 mt-1" />
                  <span className="text-white">قطع تماس</span>
                </button>
              </div>
            </div>
          </div>
          <div className="h-[490px] col-span-12 md:col-span-8 bg-white shadow-Rx rounded-lg"></div>
        </div>
        <div className="bg-white shadow-Rx rounded-lg h-[510px] mt-6"></div>
      </div>
    </div>
  );
}
