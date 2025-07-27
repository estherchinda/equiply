"use client";

import Heading from "../display/HeadingComponent";
import Button from "../forms/Button";

export default function SystemPreferences() {
    const display = [
        "Light Mode",
        "Dark Mode",
        "System Default",
    ];
  return (
    <div className="space-y-8 my-10">
      <Heading
        content="System Preferences"
        subtitle="Manage your system preferences and settings."
      />
      <div>
        <h3 className="text-xl font-bold">Notifications</h3>
        <div className="flex justify-between items-center mt-4">
          <div className="space-y-2">
            <h4 className="text-base font-medium leading-normal line-clamp-1">
              Enable Notifications
            </h4>
            <p className="text-[#9eb7a8] text-sm font-normal leading-normal line-clamp-2">
              Receive notifications for new messages, rental approvals and
              system updates.
            </p>
          </div>
          <div className="shrink-0">
            <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-[#29382f] p-0.5 has-[:checked]:justify-end has-[:checked]:bg-[#a5f2c4]">
              <div
                className="h-full w-[27px] rounded-full bg-white"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px;",
                }}
              ></div>
              <input type="checkbox" className="invisible absolute" />
            </label>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold">Display Perferences</h3>
        <div className="mt-5 flex gap-4 items-center">
            {display.map((d, i) => (
                <label
                key={i}
                className="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#3d5245] px-4 h-11 text-white has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#a5f2c4] relative cursor-pointer"
              >
                {d}
                <input type="radio" className="invisible absolute" name="26318cff-6b3b-4abb-a80c-98cb3e951d4c" />
              </label>
            ))}
        </div>
      </div>
      <div className="flex justify-end w-full mt-5">
        <div className="w-[200px]">
          <Button content="Save" />
        </div>
      </div>
    </div>
  );
}
