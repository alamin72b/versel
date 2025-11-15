import React from "react";
import Badge from "../../atoms/Badge";

export default function HowItWorksSection() {
  return (
    <div
      className="
        w-full mx-auto bg-neutral-1
        /* Section padding: mobile → 2xl */
        px-4 py-16
        sm:px-6 sm:py-20
        md:px-12 md:py-24
        lg:px-20 lg:py-28
        xl:px-[160px] xl:py-[120px]
        2xl:px-[240px] 2xl:py-[160px]
        /* Vertical spacing between hero and cards */
        flex flex-col gap-12 sm:gap-16 lg:gap-20 2xl:gap-[130px]
      "
    >
      {/* Hero block (title + subtitle) */}
      <div className="w-full max-w-[878px] h-[301px] sm:h-[240px] md:h-[301px] mx-auto flex flex-col items-center text-center gap-4 sm:gap-6 lg:gap-8">
        {/* Badge (uses Badge component) */}
        <Badge size="howit" tone="light">
          How it works
        </Badge>

        {/* Title */}
        <h2
          className="font-extrabold  font-roboto
            text-[28px] leading-[36px]
            sm:text-[32px] sm:leading-[40px] 
            md:text-[48px] md:leading-[56px] 
            lg:text-[52px] lg:leading-[62px] 
            xl:text-[56px] xl:leading-[68px]"
        >
          Simple & Fast Receive Your Payment in 3 Steps!
        </h2>

        {/* Subtitle */}
        <p
          className="font-manrope 
            text-[16px] leading-[26px] 
            sm:text-[18px] sm:leading-[28px] 
            md:text-[20px] md:leading-[30px] 
            lg:text-[22px] lg:leading-[34px] 
            xl:text-[24px] xl:leading-[36px] text-light-dark"
        >
          Empowering businesses with faster cash access, CASA provides a secure,
          fast, and flexible solution to get early payments for credit card
          sales.
        </p>
      </div>

      {/* Responsive columns: 1 → 2 (xl) → 3 (2xl) */}
      <div
        className="
          w-full max-w-[1440px] mx-auto
          grid grid-cols-1 gap-6 sm:gap-8 lg:gap-10
          xl:grid-cols-2
          2xl:grid-cols-3
        "
      >
        {/* Column 1 */}
        <div
          className="
            w-full mx-auto
            /* allow card to breathe on mobile, cap at design widths on larger */
            max-w-[456px] 2xl:max-w-[456px]
            bg-white rounded-[24px]
            px-[20px] py-[28px] sm:px-[24px] sm:py-[32px]
            shadow-[0_4px_24px_rgba(0,0,0,0.02)]
            flex flex-col gap-6 sm:gap-8
            min-h-[560px] lg:min-h-[680px] 2xl:min-h-[718px]
          "
        >
          <div className="bg-mint-3 w-full max-w-[398px] rounded-[25px] py-[24px] px-[20px] sm:py-[33px] sm:px-[24px] flex flex-col gap-4 sm:gap-6">
            <h4 className="text-[20px] leading-[28px] sm:text-[24px] sm:leading-[34px] font-bold">
              Sign Up
            </h4>

            <form className="space-y-4 sm:space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full max-w-[350px] h-[56px] sm:h-[64px] rounded-[25px] bg-white
               pt-[16px] pr-4 sm:pr-[181px] pb-[16px] pl-[16px] outline-none"
              />

              <input
                type="text"
                placeholder="Company name"
                className="w-full max-w-[350px] h-[56px] sm:h-[64px] rounded-[25px] bg-white
               pt-[16px] pr-4 sm:pr-[181px] pb-[16px] pl-[16px] outline-none"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full max-w-[350px] h-[56px] sm:h-[64px] rounded-[25px] bg-white
               pt-[16px] pr-4 sm:pr-[181px] pb-[16px] pl-[16px] outline-none"
              />
            </form>
          </div>

          <div className="w-full max-w-[380px] flex flex-col gap-4 sm:gap-6">
            <h4 className="text-[20px] leading-[28px] sm:text-[24px] sm:leading-[34px] font-bold">
              Connect Your Business
            </h4>

            <p className="font-manrope text-[16px] leading-[26px] sm:text-[20px] sm:leading-[32px]">
              Sign up and link your credit card processor or POS system with
              CASA. We support all major payment providers.
            </p>

            <ul className="flex flex-col gap-2">
              <li className="flex items-start gap-3 sm:gap-4">
                <img
                  src="/app/assets/howit/icon.svg"
                  alt="icon"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]"
                />
                <span className="font-semibold text-[16px] leading-[26px] sm:text-[18px] sm:leading-[30px]">
                  Fast approval &amp; easy integration
                </span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <img
                  src="/app/assets/howit/icon.svg"
                  alt="icon"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]"
                />
                <span className="font-semibold text-[16px] leading-[26px] sm:text-[18px] sm:leading-[30px]">
                  No impact on your credit score
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 2 */}
        <div
          className="
            w-full mx-auto
            max-w-[456px] 2xl:max-w-[456px]
            bg-white rounded-[24px]
            px-[20px] py-[28px] sm:px-[24px] sm:py-[32px]
            shadow-[0_4px_24px_rgba(0,0,0,0.02)]
            flex flex-col gap-6 sm:gap-8
            min-h-[560px] lg:min-h-[680px] 2xl:min-h-[718px]
          "
        >
          <div className="bg-accent w-full max-w-[396px] rounded-[25px] py-[24px] px-[20px] sm:py-[32px] sm:px-[24px] flex flex-col gap-4 sm:gap-6">
            {/* Card header row */}
            <div className="bg-white flex items-center p-3 sm:p-4 h-[72px] sm:h-[80px] gap-3 rounded-[25px]">
              <img
                src="app/assets/chart/1.svg"
                alt="Profile icon"
                className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px]"
              />
              <div className="flex items-center justify-between w-full gap-4">
                <div className="flex flex-col justify-center leading-tight">
                  <h4 className="font-bold text-xl sm:text-2xl leading-[26px] sm:leading-[28px]">
                    Maria Kosta (+$10K)
                  </h4>
                  <p className="text-light-dark text-[12px] sm:text-[14px] leading-[18px] sm:leading-[20px] font-semibold">
                    Maria@mail.com 
                  </p>
                </div>

              </div>
            </div>

            <div className="bg-white rounded-[25px] w-full max-w-[396px] flex flex-col gap-5 sm:gap-6 p-4 sm:p-6">
              <div className="flex items-center justify-between gap-6">
                <div className="flex flex-col gap-1">
                  <p className="text-light-dark font-semibold text-[12px] sm:text-[14px] leading-6">
                    Total balance
                  </p>
                  <h1 className="font-semibold text-[18px] sm:text-[20px] leading-[26px] sm:leading-[28px]">
                    $12000.00
                  </h1>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full sm:w-12 sm:h-12 bg-accent">
                    10%
                  </span>
                  <p className="font-semibold text-[12px] sm:text-[14px] leading-[20px] sm:leading-[24px] text-light-dark">
                    discount rate
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-[12px] bg-mint-3 h-[36px] sm:h-[40px] px-4 sm:px-6">
                <p className="font-semibold text-[13px] sm:text-[14px] leading-[24px]">
                  See detail
                </p>
                <p className="flex items-center justify-center w-6 h-6 font-semibold">
                  &gt;&gt;
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[380px] flex flex-col gap-4 sm:gap-6">
            <h4 className="text-[20px] leading-[28px] sm:text-[24px] sm:leading-[34px] font-bold">
              Transactions for Early Payment
            </h4>

            <p className="font-manrope text-[16px] leading-[26px] sm:text-[20px] sm:leading-[32px]">
              Every morning, your previous day’s credit card transactions are
              automatically submitted for funding.
            </p>

            <ul className="flex flex-col gap-2">
              <li className="flex items-start gap-3 sm:gap-4">
                <img
                  src="/app/assets/howit/icon.svg"
                  alt="icon"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]"
                />
                <span className="font-semibold text-[16px] leading-[26px] sm:text-[18px] sm:leading-[30px]">
                  No waiting for 30–60 day settlements
                </span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <img
                  src="/app/assets/howit/icon.svg"
                  alt="icon"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]"
                />
                <span className="font-semibold text-[16px] leading-[26px] sm:text-[18px] sm:leading-[30px]">
                  Transparent discount rates
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 3 */}
        <div
          className="
            w-full mx-auto
            max-w-[456px] 2xl:max-w-[456px]
            bg-white rounded-[24px]
            px-[20px] py-[28px] sm:px-[24px] sm:py-[32px]
            shadow-[0_4px_24px_rgba(0,0,0,0.02)]
            flex flex-col gap-6 sm:gap-8
            min-h-[560px] lg:min-h-[680px] 2xl:min-h-[718px]
          "
        >
          <div className="bg-mint-3 w-full max-w-[398px] rounded-[25px] py-[24px] px-[20px] sm:py-[33px] sm:px-[24px] flex flex-col gap-5 sm:gap-9">
            <div className="flex gap-4 p-4 bg-white rounded-3xl sm:p-6">
              <img
                src="app/assets/howit/Icon.svg"
                alt="icon"
                className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px]"
              />
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="font-semibold text-base sm:text-lg leading-[26px] sm:leading-[30px]">
                  Receive Money from card
                </h3>
                <p className="font-manrope text-[14px] sm:text-[16px] leading-[20px] sm:leading-[100%] text-light-dark">
                  Cash Deposited Within 24 Hours
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[20px] w-full max-w-[331px] flex flex-col gap-3 sm:gap-4 p-4 sm:p-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-[18px] sm:text-[24px] leading-[24px] sm:leading-[34px]">
                  Recent User
                </h4>
                <p className="text-[12px] sm:text-[14px] leading-[20px] sm:leading-[24px] font-bold text-light-dark cursor-pointer">
                  View All
                </p>
              </div>

              {/* Avatars */}
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <img
                    src="app/assets/chart/1.svg"
                    alt="user"
                    className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-full border-2 border-white"
                  />
                  <img
                    src="app/assets/chart/1.svg"
                    alt="user"
                    className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-full border-2 border-white"
                  />
                  <img
                    src="app/assets/chart/1.svg"
                    alt="user"
                    className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-full border-2 border-white"
                  />
                  <img
                    src="app/assets/chart/1.svg"
                    alt="user"
                    className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-full border-2 border-white"
                  />
                  <img
                    src="app/assets/chart/1.svg"
                    alt="user"
                    className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-full border-2 border-white"
                  />
                  <div className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-full bg-accent flex items-center justify-center border-2 border-white text-[12px] sm:text-[14px] font-semibold text-dark">
                    9+
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[380px] flex flex-col gap-4 sm:gap-6">
            <h4 className="text-[20px] leading-[28px] sm:text-[24px] sm:leading-[34px] font-bold">
              Receive Funds & Grow
            </h4>

            <p className="font-manrope text-[16px] leading-[26px] sm:text-[20px] sm:leading-[32px]">
              Every morning, your previous day’s credit card transactions are
              automatically submitted for funding.
            </p>

            <ul className="flex flex-col gap-2">
              <li className="flex items-start gap-3 sm:gap-4">
                <img
                  src="/app/assets/howit/icon.svg"
                  alt="icon"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]"
                />
                <span className="font-semibold text-[16px] leading-[26px] sm:text-[18px] sm:leading-[30px]">
                  Same-day or next-day payouts
                </span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <img
                  src="/app/assets/howit/icon.svg"
                  alt="icon"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]"
                />
                <span className="font-semibold text-[16px] leading-[26px] sm:text-[18px] sm:leading-[30px]">
                  Flexible repayment from future sales
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
