import React from 'react';
import Badge from '../../atoms/Badge';
import Button from '../../atoms/Button';

/* -------------------------
SalesCardOnly (embedded)
------------------------- */

type CardData = {
  id: 'sales';
  title: string;
  icon: string;
  icon1: string;
  icon2: string;
  bg: string;
};

type BarData = {
  height: number;
  day: string;
};

const SALES_CARD: CardData = {
  id: 'sales',
  title: 'Sales overview from Previous Day',
  icon: 'app/assets/chart/icon-sales.svg',
  icon1: 'app/assets/chart/icon-sales1.svg',
  icon2: 'app/assets/howit/up.svg',
  bg: 'var(--color-mint-1)',
};

const BAR_CHART_DATA: BarData[] = [
  { height: 68, day: 'Sun' },
  { height: 48, day: 'Mon' },
  { height: 88, day: 'Tue' },
  { height: 68, day: 'Wed' },
  { height: 128, day: 'Thu' },
  { height: 58, day: 'Fri' },
  { height: 98, day: 'Sat' },
];

const CardHeader: React.FC<{ icon: string; title: string }> = React.memo(
  ({ icon, title }) => (
    <div className="flex gap-3 sm:gap-6 p-3 sm:p-4 md:p-6 bg-white rounded-2xl sm:rounded-3xl w-full max-w-[357px] min-h-[90px] sm:min-h-[108px]">
      <img
        src={icon || '/app/assets/howit/Icon.svg'}
        alt="icon"
        className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[48px] md:h-[48px] object-contain flex-shrink-0"
      />
      <div className="flex flex-col justify-center gap-1 sm:gap-2">
        <h3 className="font-semibold text-[14px] sm:text-base md:text-lg leading-[20px] sm:leading-[26px] md:leading-[30px]">
          Receive Money from card
        </h3>
        <p className="font-manrope text-[12px] sm:text-[14px] md:text-[16px] leading-[18px] sm:leading-[20px] md:leading-[24px] text-light-dark">
          Cash Deposited Within 24 Hours
        </p>
      </div>
    </div>
  ),
);

const BarChart: React.FC<{ data: BarData[]; upIcon: string }> = React.memo(
  ({ data, upIcon }) => (
    <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-2 relative w-full">
      {/* Highest Sale Badge */}
      <div
        className="absolute flex flex-col items-center justify-center
        rounded-lg shadow-sm  
        md:rounded-xl
        w-[75px] h-[50px]
        sm:w-[100px] sm:h-[65px]
        md:w-[135px] md:h-[87px]
        py-2 px-3 sm:py-3 sm:px-4
        top-[-45px] sm:top-[-50px] md:top-[-50px]
        left-1/2 sm:left-[210px] md:left-[210px] -translate-x-1/2
        z-10"
        style={{ backgroundColor: 'var(--color-accent)' }}
      >
        <p
          className="text-center font-roboto text-[10px] leading-[14px]
sm:text-[14px] sm:leading-[20px] md:text-[18px] md:leading-[30px] whitespace-nowrap"
          style={{ color: 'var(--color-light-dark)' }}
        >
          Highest sale
        </p>

        <div className="flex items-center gap-1 md:gap-2">
          <img
            src={upIcon}
            alt="Up arrow"
            className="w-[10px] h-[10px] sm:w-[14px] sm:h-[14px] md:w-[20px] md:h-[20px] object-contain"
          />
          <p
            className="font-bold font-roboto text-[13px] leading-[18px] 
        sm:text-[18px] sm:leading-[26px] md:text-[24px] md:leading-[34px]"
            style={{ color: 'var(--color-text-default)' }}
          >
            $2,450
          </p>
        </div>
      </div>

      <div className="relative w-full h-[110px] sm:h-[120px] md:h-[179px]">
        {/* Bar Chart - Centered Grid with Responsive Columns */}
        <div
          className="absolute grid items-end 
      grid-cols-[repeat(7,24px)] sm:grid-cols-[repeat(7,30px)] md:grid-cols-[repeat(7,34px)] 
      top-0 left-1/2 -translate-x-1/2 
      h-[90px] sm:h-[100px] md:h-[155px] 
      gap-[6px] sm:gap-[7px] md:gap-[8px]"
        >
          {data.map((bar, i) => (
            <div key={bar.day} className="relative h-full">
              {/* BACK bar */}
              <div
                className="absolute bottom-0 w-full rounded-sm"
                style={{
                  height: `${((bar.height + 10) / 155) * 100}%`,
                  backgroundColor:
                    i === 4 ? 'var(--color-brand)' : 'var(--color-mint-2)',
                  opacity: i === 4 ? 0.2 : 1,
                }}
              />

              {/* FRONT bar */}
              <div
                className="absolute bottom-0 w-full rounded-sm"
                style={{
                  height: `${(bar.height / 155) * 100}%`,
                  backgroundColor:
                    i === 4 ? 'var(--color-brand)' : 'var(--color-mint-2)',
                  opacity: i === 4 ? 1 : 0.5,
                }}
              />
            </div>
          ))}
        </div>

        {/* Day Labels - Centered */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 grid 
      grid-cols-[repeat(7,24px)] sm:grid-cols-[repeat(7,30px)] md:grid-cols-[repeat(7,34px)] 
      gap-[6px] sm:gap-[7px] md:gap-[8px] 
      font-semibold text-center font-roboto 
      text-[8px] leading-[12px] sm:text-[10px] sm:leading-[16px] md:text-[14px] md:leading-[24px]"
          style={{ color: 'var(--color-light-dark)' }}
        >
          {data.map((bar) => (
            <span key={bar.day}>{bar.day}</span>
          ))}
        </div>
      </div>
    </div>
  ),
);

const SalesCardOnly: React.FC = () => {
  const card = SALES_CARD;

  return (
    <article className="relative w-full max-w-[400px] h-auto lg:min-h-[505px] rounded-[24px] overflow-hidden flex flex-col flex-none">
      <div className="flex flex-col w-full h-full gap-3 sm:gap-4 md:gap-[50px]">
        <CardHeader icon={card.icon} title={card.title} />

        <div className="flex flex-col w-full gap-3 sm:gap-4 md:gap-6 bg-white shadow-sm rounded-xl md:rounded-2xl max-w-[280px] sm:max-w-[350px] md:max-w-[400px] p-3 sm:p-4 md:p-5">
          {/* Total Sales */}
          <div
            className="flex min-h-[36px] max-h-[36px] sm:min-h-[40px] sm:max-h-[40px] items-center 
             gap-4 w-full overflow-hidden "
          >
            <img
              src={card.icon1}
              alt="Sales icon"
              className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px] object-contain flex-shrink-0"
            />
            <div className="flex gap-1 sm:gap-1.5 items-center">
              <p
                className="text-light-dark font-manrope 
            text-[12px] leading-[18px] sm:text-[14px] sm:leading-[20px] 
            md:text-[24px] md:leading-[34px] whitespace-nowrap"
              >
                Total sales:
              </p>
              <p
                className="font-bold font-roboto 
            text-[16px] leading-[24px] 
            sm:text-[18px] sm:leading-[26px] 
            md:text-[32px] md:leading-[40px] whitespace-nowrap"
                style={{ color: 'var(--color-light-dark)' }}
              >
                $12,500
              </p>
            </div>
          </div>

          <div className="w-full max-w-[334px] h-[180px] sm:h-[200px] md:h-[232px] flex flex-col justify-end">
            <BarChart data={BAR_CHART_DATA} upIcon={card.icon2} />
          </div>
        </div>
      </div>
    </article>
  );
};

/* -------------------------
WhyCasa (main export)
------------------------- */

export default function WhyCasa() {
  return (
    <div className=" w-full mx-auto px-4 pt-8 flex flex-col gap-12 
    sm:pt-16 sm:px-6 sm:gap-16 
    md:px-12 md:pt-24 
    lg:px-20 lg:pt-28 lg:gap-20 
    2xl:gap-[130px] xl:px-[160px] xl:pt-[120px] 
    2xl:px-[240px] 2xl:pt-[160px] ">
      {/* Hero */}
      <div className="w-full max-w-[822px] min-h-[200px] sm:h-[240px] md:h-[301px] mx-auto flex flex-col items-center text-center gap-4 sm:gap-6 lg:gap-8">
        <Badge size="why" tone="mint">
          Why CASA different
        </Badge>

        <h2
          className="font-extrabold font-roboto w-full max-w-[612px] px-4
        text-[20px] leading-[24px]
        sm:text-[32px] sm:leading-[40px] 
        md:text-[48px] md:leading-[56px] 
        lg:text-[52px] lg:leading-[62px] 
        xl:text-[56px] xl:leading-[68px]"
        >
          Why CASA Stands Out from the Rest
        </h2>
        <p
          className="font-manrope text-light-dark px-4
        text-[14px] leading-[22px] 
        sm:text-[18px] sm:leading-[28px] 
        md:text-[20px] md:leading-[30px] 
        lg:text-[22px] lg:leading-[34px] 
        xl:text-[24px] xl:leading-[36px]"
        >
          Empowering businesses with faster cash access...
        </p>
      </div>

      {/* Layout */}
      <div
        className="
      w-full max-w-[1440px] mx-auto h-auto flex flex-col justify-center items-center
      bg-neutral-1 rounded-[25px] gap-6 sm:gap-9
      px-0 py-[32px] 
      sm:py-[60px]
      md:py-[80px]
      lg:px-[32px]
      3xl:h-[766px] 3xl:flex-row
    "
      >
        {/* Card 1 - FIXED: Centered below lg */}
        <div className="w-full lg:w-[764px] lg:h-[598px] rounded-[25px] relative flex flex-col items-center lg:block">
          {/* Mint background div - centered below lg */}
          <div
            className="w-full max-w-[500px] lg:max-w-[552px] py-4 px-4 sm:py-6 sm:px-6 flex items-start rounded-[25px]"
            style={{ backgroundColor: 'var(--color-mint-2)' }}
          >
            <SalesCardOnly />
          </div>

          {/* floating card - centered below lg */}
          <div
            className="
          w-full max-w-[500px]
          lg:w-[292px] lg:h-[346px]
          rounded-[20px] sm:rounded-[25px]
          p-4 sm:p-6
          gap-[20px] sm:gap-[24px]
          flex flex-col
          bg-white
          mt-4 sm:mt-6 lg:mt-0
          lg:absolute lg:top-[156px] lg:left-[450px]
        "
          >
            <div className="flex flex-col w-full h-full gap-[20px] sm:gap-[24px] ">
              <div className="flex flex-col gap-3 max-w-[224px]">
                <h3
                  className="text-black font-manrope font-bold text-[16px] leading-[20px]
                sm:text-[24px]  sm:leading-[34px]"
                >
                  Top User
                </h3>

                {/* avatars */}
                <div className="flex items-center">
                  <img
                    src="/app/assets/chart/1.svg"
                    className="relative z-50 border-2 border-white rounded-full w-7 h-7 sm:w-9 sm:h-9"
                    alt="User avatar"
                  />
                  <img
                    src="/app/assets/chart/1.svg"
                    className="relative z-40 -ml-2 border-2 border-white rounded-full w-7 h-7 sm:w-9 sm:h-9"
                    alt="User avatar"
                  />
                  <img
                    src="/app/assets/chart/1.svg"
                    className="relative z-30 -ml-2 border-2 border-white rounded-full w-7 h-7 sm:w-9 sm:h-9"
                    alt="User avatar"
                  />
                  <img
                    src="/app/assets/chart/1.svg"
                    className="relative z-20 -ml-2 border-2 border-white rounded-full w-7 h-7 sm:w-9 sm:h-9"
                    alt="User avatar"
                  />
                  <img
                    src="/app/assets/chart/1.svg"
                    className="relative z-10 -ml-2 border-2 border-white rounded-full w-7 h-7 sm:w-9 sm:h-9"
                    alt="User avatar"
                  />
                </div>
              </div>

              {/* middle */}
              <div
                className="rounded-[25px] p-3 sm:p-4 shadow-sm flex flex-col gap-2 
                bg-neutral-1  "
              >
                <div className="flex items-start justify-between ">
                  <p
                    className="text-[11px] leading-[14px]
                  sm:text-[14px]  sm:leading-[24px] text-light-dark"
                  >
                    Enter Amount
                  </p>
                </div>
                <div
                  className="flex items-center gap-20
                text-[18px] font-semibold leading-[22px]
                sm:text-[20px]  sm:leading-[28px] text-black"
                >
                  <p>$50,000</p>
                  <img src="app/assets/howit/visa.svg" alt="" />
                </div>
                <div className="text-[14px] leading-6 text-light-dark ">
                  Discount rate: 10%
                </div>
              </div>
              {/* last  */}
              <Button variant="light_green" size="cardSmall">
                See detail
              </Button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="max-w-[578px] w-full 
        lg:h-[606px] 
        rounded-xl flex flex-col gap-5 sm:gap-6  "
        >
          <div className="flex flex-col gap-6 sm:gap-9">
            <h2
              className="text-[22px] 
            font-semibold text-black leading-[28px] 
            sm:text-[28px] sm:leading-[36px]
            lg:text-[32px] lg:leading-[40px] "
            >
              CASA offers instant, flexible funding from card transactions.
            </h2>
            <p
              className="text-light-dark text-[14px] leading-[22px]
            sm:text-[20px] sm:leading-[24px] font-manrope"
            >
              CASA stands out by offering fast, flexible, and transparent
              funding for business owners who need immediate cash flow from
              credit card transactions. Here's what makes us unique
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex items-center gap-4 sm:gap-6">
              <img
                src="app/assets/howit/cash.svg"
                className="h-9 w-9 sm:w-12 sm:h-12"
                alt="Cash icon"
              />

              <p
                className="text-light-dark text-[16px] 
              sm:text-[24px] leading-[34px]  font-bold"
              >
                Instant Cash, No Waiting
              </p>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <img
                src="app/assets/howit/fees.svg"
                className="h-9 w-9 sm:w-12 sm:h-12"
                alt="Fees icon"
              />

              <p
                className="text-light-dark text-[16px] 
              sm:text-[24px] leading-[34px]  font-bold"
              >
                No Hidden Fees, No Surprises
              </p>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <img
                src="app/assets/howit/pos.svg"
                className="h-9 w-9 sm:w-12 sm:h-12"
                alt="POS icon"
              />

              <p
                className="text-light-dark text-[16px] 
              sm:text-[24px] leading-[34px]  font-bold"
              >
                Seamless POS & Payment Processor
              </p>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <img
                src="app/assets/howit/secure.svg"
                className="h-9 w-9 sm:w-12 sm:h-12"
                alt="Secure icon"
              />

              <p
                className="text-light-dark text-[16px] 
              sm:text-[24px] leading-[34px]  font-bold"
              >
                Secure & Compliant Transactions
              </p>
            </div>
          </div>

          <Button
            variant="default"
            size="primary"
            className="font-manrope text-[20px]/[24px]"
          >
            Become a Member
          </Button>
        </div>
      </div>
    </div>
  );
}
