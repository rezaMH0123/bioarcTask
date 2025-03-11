import LableIcon from "../components/Icons/Label";
import { PlusIcon, PencilIcon } from "@heroicons/react/24/outline";

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
      <div className="border border-red-500 h-full py-3 px-11 flex justify-between text-sm">
        <div
          className="h-14 w-[850px] bg-SoftBlue rounded-sm flex items-center justify-between px-4
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
        <button className="w-[205px] h-14 bg-darkPrimary rounded-md flex items-center justify-center gap-x-4 cursor-pointer">
          <PlusIcon className="stroke-white w-6 h-6" />
          <span className="text-white text-[16px]">نوبت جدید</span>
        </button>
      </div>
    </div>
  );
}
