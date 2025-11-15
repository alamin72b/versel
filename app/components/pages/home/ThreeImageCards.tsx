// ThreeImageCards.tsx
import React from 'react';

// Type definitions
interface CardData {
  id: 'sales' | 'factoring' | 'workflow';
  title: string;
  icon: string;
  icon1: string;
  icon2?: string;
  bg: string;
}

interface BarData {
  height: number;
  day: string;
}

// Constants (bg values set to the exact hex colors you requested)
const CARDS: CardData[] = [
  {
    id: 'sales',
    title: 'Sales overview from Previous Day',
    icon: 'app/assets/chart/icon-sales.svg',
    icon1: 'app/assets/chart/icon-sales1.svg',
    icon2: 'app/assets/chart/up.svg',
    bg: '#E0F0E5', // first card background
  },
  {
    id: 'factoring',
    title: 'Factoring Possible Amount.',
    icon: 'app/assets/chart/icon-factoring.svg',
    icon1: 'app/assets/chart/money.svg',
    bg: '#DAFFC2', // second card background
  },
  {
    id: 'workflow',
    title: 'Secure & Streamlined Workflow',
    icon: 'app/assets/chart/icon-workflow.svg',
    icon1: 'app/assets/chart/1.svg',
    bg: '#F1F68E', // third card background
  },
];

const BAR_CHART_DATA: BarData[] = [
  { height: 68, day: 'Sun' },
  { height: 48, day: 'Mon' },
  { height: 88, day: 'Tue' },
  { height: 68, day: 'Wed' },
  { height: 128, day: 'Thu' },
  { height: 58, day: 'Fri' },
  { height: 98, day: 'Sat' },
];

// Subcomponents
const CardHeader: React.FC<{ icon: string; title: string }> = React.memo(
  ({ icon, title }) => (
    <header className="flex items-start w-full gap-3 md:gap-6">
      <img
        src={icon}
        alt=""
        className="shrink-0"
        style={{
          width: 'clamp(28px, 5vw, 40px)',
          height: 'clamp(28px, 5vw, 40px)',
        }}
      />
      <h2
        className="font-semibold leading-tight font-roboto"
        style={{
          fontSize: 'clamp(20px, 4vw, 32px)',
          lineHeight: 'clamp(28px, 5vw, 40px)',
          flex: 1,
          minWidth: 0,
          wordWrap: 'break-word',
        }}
      >
        {title}
      </h2>
    </header>
  ),
);

CardHeader.displayName = 'CardHeader';

const BarChart: React.FC<{ data: BarData[]; upIcon: string }> = React.memo(
  ({ data, upIcon }) => (
    <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-2">
      {/* Highest Sale Badge */}
      <div
        className="flex flex-col items-center self-center justify-center rounded-lg shadow-sm md:rounded-xl w-[85px] h-[55px] sm:w-[100px] sm:h-[65px] md:w-[135px] md:h-[87px] p-1.5 sm:p-2 md:p-2"
        style={{
          backgroundColor: '#F1F68E',
        }}
      >
        <p
          className="text-center font-roboto text-[11px] leading-[16px] sm:text-[13px] sm:leading-[20px] md:text-[18px] md:leading-[30px]"
          style={{
            fontWeight: 400,
            color: '#888868',
          }}
        >
          Highest sale
        </p>
        <div className="flex items-center gap-1 md:gap-2">
          <img
            src={upIcon}
            alt="Up arrow"
            className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] md:w-[20px] md:h-[20px]"
          />
          <p
            className="font-bold font-roboto text-[15px] leading-[22px] sm:text-[18px] sm:leading-[26px] md:text-[24px] md:leading-[34px]"
            style={{
              fontWeight: 700,
            }}
          >
            $2,450
          </p>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="relative w-full h-[120px] sm:h-[140px] md:h-[179px] pt-[100px] sm:pt-[120px] md:pt-[155px] px-3 sm:px-4 md:px-[33px]">
        <div className="absolute grid items-end grid-cols-7 top-0 left-3 right-3 sm:left-4 sm:right-4 md:left-[33px] md:right-[33px] h-[100px] sm:h-[120px] md:h-[155px] gap-2 sm:gap-2.5 md:gap-[20px]">
          {data.map((bar, i) => (
            <div key={bar.day} className="relative h-full">
              <div
                className="absolute bottom-0 rounded-sm"
                style={{
                  width: '100%',
                  height: `${((bar.height + 10) / 155) * 100}%`,
                  backgroundColor: i === 4 ? '#006838' : '#E0F0E5',
                  opacity: i === 4 ? 0.2 : 1,
                  borderRadius: '2px',
                }}
              />
              <div
                className="absolute bottom-0 rounded-sm"
                style={{
                  width: '100%',
                  height: `${(bar.height / 155) * 100}%`,
                  backgroundColor: i === 4 ? '#006838' : '#E0F0E5',
                  opacity: i === 4 ? 1 : 0.5,
                  borderRadius: '2px',
                }}
              />
            </div>
          ))}
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 grid grid-cols-7 font-semibold text-center font-roboto text-[9px] leading-[14px] sm:text-[10px] sm:leading-[16px] md:text-[14px] md:leading-[24px]"
          style={{
            color: '#686868',
          }}
        >
          {data.map((bar) => (
            <span key={bar.day}>{bar.day}</span>
          ))}
        </div>
      </div>
    </div>
  ),
);

BarChart.displayName = 'BarChart';

const SalesCard: React.FC<{ card: CardData }> = React.memo(({ card }) => (
  <div className="flex flex-col w-full h-full gap-4 sm:gap-6 md:gap-[50px]">
    <CardHeader icon={card.icon} title={card.title} />

    <div className="flex flex-col w-full gap-3 sm:gap-4 md:gap-6">
      {/* White Card - Chart Container */}
      <div className="flex flex-col w-full bg-white shadow-sm rounded-xl md:rounded-2xl max-w-[280px] sm:max-w-[350px] md:max-w-[400px] p-3 sm:p-4 md:p-5 gap-1.5 sm:gap-2 md:gap-2">
        {/* Total Sales Row */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
          <img
            src={card.icon1}
            alt="Sales icon"
            className="shrink-0 w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px]"
          />
          <div className="flex flex-wrap items-baseline gap-1.5 sm:gap-2 md:gap-4">
            <span
              className="text-light-dark font-manrope text-[14px] leading-[20px] sm:text-[16px] sm:leading-[24px] md:text-[24px] md:leading-[36px]"
              style={{
                fontWeight: 500,
              }}
            >
              Total sales :
            </span>
            <span
              className="font-bold font-roboto text-[18px] leading-[26px] sm:text-[22px] sm:leading-[30px] md:text-[32px] md:leading-[40px]"
              style={{
                fontWeight: 700,
                color: '#686868',
              }}
            >
              $12,500
            </span>
          </div>
        </div>

        <BarChart data={BAR_CHART_DATA} upIcon={card.icon2 ?? ''} />
      </div>

      {/* Summary Strip */}
      <div
        className="inline-flex items-center w-full rounded-xl sm:rounded-2xl md:rounded-3xl max-w-[280px] sm:max-w-[350px] md:max-w-[400px] h-[40px] sm:h-[48px] md:h-[64px] px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-4 gap-2 sm:gap-2.5 md:gap-4"
        style={{
          backgroundColor: '#E0F0E5',
        }}
      >
        <img
          src={card.icon2}
          alt="Up arrow"
          className="shrink-0 w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[28px] md:h-[28px]"
        />
        <p
          className="flex-1 font-roboto text-[11px] leading-[16px] sm:text-[13px] sm:leading-[20px] md:text-[20px] md:leading-[32px]"
          style={{
            fontWeight: 400,
          }}
        >
          Avg. sale: $104.16 / per transaction
        </p>
      </div>
    </div>
  </div>
));

SalesCard.displayName = 'SalesCard';

const FactoringCard: React.FC<{ card: CardData }> = React.memo(({ card }) => (
  <>
    <header className="flex items-center gap-3 sm:gap-4 md:gap-6 w-full md:w-[401px] min-h-[56px] sm:min-h-[62px]">
      <img
        src={card.icon}
        alt="Factoring icon"
        className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 shrink-0"
      />
      <h2 className="font-roboto font-semibold text-[18px] leading-[26px] sm:text-[20px] sm:leading-[28px] md:text-[26px] md:leading-[34px] lg:text-[28px] lg:leading-[36px] 2xl:text-[32px] 2xl:leading-[40px] overflow-hidden text-ellipsis">
        {card.title}
      </h2>
    </header>

    <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-7.5 mt-4 sm:mt-6 md:mt-13.5">
      <div className="flex flex-col w-[200px] h-[100px] sm:w-[220px] sm:h-[110px] md:w-[245px] md:h-[125px] gap-1.5 sm:gap-2 md:gap-4 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] bg-white p-3 sm:p-4 md:p-6 shadow-sm overflow-hidden items-center justify-center">
        <p className="font-manrope text-light-dark text-[15px] leading-[22px] sm:text-[18px] sm:leading-[26px] md:text-[24px] md:leading-[32px]">
          Available amount
        </p>
        <div className="flex items-center gap-2 sm:gap-3 md:gap-6">
          <p className="font-semibold text-[18px] leading-[26px] sm:text-[22px] sm:leading-[30px] md:text-[28px] md:leading-[34px]">
            $15,375
          </p>
          <span className="font-semibold text-[12px] leading-[20px] sm:text-[14px] sm:leading-[24px] md:text-[18px] md:leading-[30px]">
            USD
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4 sm:gap-5 md:gap-[30px] w-[280px] h-auto sm:w-[340px] md:w-[400px] md:h-[281px] rounded-[16px] sm:rounded-[20px] md:rounded-[25px] bg-white p-2.5 sm:p-3 md:p-4 shadow-sm">
        <div className="flex gap-1.5 sm:gap-2 md:gap-4 w-full h-auto">
          <img
            src={card.icon1}
            alt="Money icon"
            className="w-5 h-5 sm:w-6 sm:h-6 md:h-8 md:w-8 shrink-0"
          />
          <p className="font-roboto font-medium text-[15px] leading-[22px] sm:text-[18px] sm:leading-[26px] md:text-[24px] md:leading-[32px] text-black">
            Factored amount vs. remaining balance
          </p>
        </div>

        <div className="flex flex-col justify-between w-full h-auto gap-4 sm:gap-6 md:gap-[64px] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] bg-mint-2 p-2.5 sm:p-3 md:p-4">
          <div className="flex items-center justify-between w-full h-auto gap-2 sm:gap-3 md:gap-[48px]">
            <span className="text-light-dark font-semibold text-[12px] leading-[18px] sm:text-[14px] sm:leading-[22px] md:text-[20px] md:leading-[28px]">
              Factored balance
            </span>
            <span className="font-bold text-[15px] leading-[22px] sm:text-[18px] sm:leading-[26px] md:text-[24px] md:leading-[32px]">
              $11,531.25
            </span>
          </div>

          <div className="relative w-full h-[25px] sm:h-[30px] md:h-[35px]">
            <div className="absolute bottom-0 left-0 w-full h-[10px] sm:h-[12px] md:h-[15px] rounded-[25px] bg-black/10 overflow-hidden">
              <div className="h-full w-[75%] bg-brand rounded-[25px]" />
            </div>
            <p className="absolute -top-[18px] right-[40px] sm:-top-[22px] sm:right-[50px] md:-top-[30px] md:right-[65px] text-light-dark font-semibold text-[12px] leading-[18px] sm:text-[14px] sm:leading-[22px] md:text-[18px] md:leading-[28px]">
              75%
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
));

FactoringCard.displayName = 'FactoringCard';

const WorkflowCard: React.FC<{ card: CardData }> = React.memo(({ card }) => {
  const userCount = 5;
  const extraUsers = 9;

  return (
    <>
      <header className="flex items-center gap-3 sm:gap-4 md:gap-6 w-full md:w-[401px] min-h-[56px] sm:min-h-[62px]">
        <img
          src={card.icon}
          alt="Workflow icon"
          className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 shrink-0"
        />
        <h2 className="font-roboto font-semibold text-[18px] leading-[26px] sm:text-[20px] sm:leading-[28px] md:text-[26px] md:leading-[34px] lg:text-[28px] lg:leading-[36px] 2xl:text-[32px] 2xl:leading-[40px] overflow-hidden text-ellipsis">
          {card.title}
        </h2>
      </header>

      <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] xl:max-w-none min-h-[380px] sm:min-h-[420px] md:min-h-[480px]">
        {/* Recent User Card */}
        <div className="mb-4 sm:mb-5 md:mb-6 -rotate-12 rounded-lg sm:rounded-xl md:rounded-2xl bg-white p-2.5 sm:p-3 md:p-4 max-w-[160px] sm:max-w-[200px] md:max-w-[266px] mx-auto">
          <div className="flex items-center justify-between gap-3 mb-2 sm:gap-4 sm:mb-3 md:gap-9 md:mb-4">
            <p className="font-bold text-[15px] leading-[22px] sm:text-[18px] sm:leading-[28px] md:text-[24px] md:leading-[34px]">
              Recent User
            </p>
            <span className="font-semibold text-[9px] leading-[14px] sm:text-[11px] sm:leading-[18px] md:text-[14px] md:leading-[24px]">
              View All
            </span>
          </div>
          <div className="flex items-center -space-x-1.5 sm:-space-x-2">
            {Array.from({ length: userCount }).map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-6 h-6 sm:h-7 sm:w-7 md:h-9 md:w-9"
              >
                <img
                  src={card.icon1}
                  alt={`User ${i + 1}`}
                  className="w-full h-full"
                />
              </div>
            ))}
            <div className="h-6 w-6 sm:h-7 sm:w-7 md:h-9 md:w-9 rounded-full bg-mint-2 text-center font-semibold text-[12px] leading-[20px] sm:text-[14px] sm:leading-[26px] md:text-[18px] md:leading-[30px] flex items-center justify-center">
              {extraUsers}+
            </div>
          </div>
        </div>

        {/* Balance Card */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[80px] sm:top-24 md:top-35 rotate-2 w-[140px] h-[110px] sm:w-[170px] sm:h-[130px] md:w-[220px] md:h-[160px] rounded-[16px] sm:rounded-[20px] md:rounded-[25px] bg-white shadow-sm p-2.5 sm:pt-3 sm:pr-4 sm:pb-3 sm:pl-4 md:pt-5 md:pr-6 md:pb-5 md:pl-6 xl:left-[168.59px] xl:top-[136.93px] xl:translate-x-0 xl:rotate-3 xl:w-[195.61px] xl:h-[165.95px]">
          <div className="flex flex-col h-full gap-1.5 sm:gap-2 md:gap-4">
            <div>
              <p className="text-light-dark mb-1.5 sm:mb-2 md:mb-4 font-semibold text-[12px] leading-[18px] sm:text-[14px] sm:leading-[22px] md:text-[18px] md:leading-[30px]">
                Total Balance
              </p>
              <p className="font-bold text-[20px] leading-[28px] sm:text-[24px] sm:leading-[32px] md:text-[32px] md:leading-[40px]">
                23,576.00
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-4">
              <span className="flex items-center justify-center w-3.5 h-3.5 sm:w-4 sm:h-4 md:h-5 md:w-5 text-[10px] sm:text-xs md:text-sm text-center rounded-full bg-mint-2">
                ＋
              </span>
              <p className="font-manrope font-semibold text-[12px] leading-[18px] sm:text-[14px] sm:leading-[22px] md:text-[18px] md:leading-[26px] text-light-dark">
                Add Number
              </p>
            </div>
          </div>
        </div>

        {/* Online Card */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[200px] sm:top-[240px] md:top-[310px] rotate-3 w-[230px] h-[85px] sm:w-[260px] sm:h-[100px] md:w-[300px] md:h-[120px] rounded-[16px] sm:rounded-[20px] md:rounded-[25px] bg-white shadow-md px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-4 flex items-center justify-between xl:rotate-[4.36deg] xl:top-[335.88px] xl:left-[-5.25px] xl:translate-x-0 xl:w-[373.227px] xl:h-[95.998px]">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-[26px]">
            <img
              src={card.icon1}
              alt="User"
              className="w-8 h-8 sm:w-10 sm:h-10 md:h-14 md:w-14 shrink-0"
            />
            <div>
              <p className="font-bold text-[15px] leading-[22px] sm:text-[18px] sm:leading-[28px] md:text-[24px] md:leading-[34px] text-black mb-0.5 sm:mb-1 md:mb-4">
                Online
              </p>
              <p className="font-manrope text-[11px] leading-[16px] sm:text-[13px] sm:leading-[20px] md:text-[16px] md:leading-[26px] text-light-dark">
                Tomy Restaurant
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 md:gap-4">
            <span className="font-semibold text-[13px] leading-[20px] sm:text-[16px] sm:leading-[24px] md:text-[20px] md:leading-[28px]">
              +$10K
            </span>
            <button className="rounded-full bg-mint-2 px-2 py-0.5 sm:px-2.5 sm:py-0.5 md:px-3 md:py-1 font-semibold text-[9px] leading-[14px] sm:text-[11px] sm:leading-[18px] md:text-[14px] md:leading-[24px]">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
});

WorkflowCard.displayName = 'WorkflowCard';

// Main Component
const ThreeImageCards: React.FC = () => {
  const renderCard = (card: CardData) => {
    switch (card.id) {
      case 'sales':
        return <SalesCard card={card} />;
      case 'factoring':
        return <FactoringCard card={card} />;
      case 'workflow':
        return <WorkflowCard card={card} />;
      default:
        return null;
    }
  };

  return (
    <section className="pt-12 sm:pt-20 md:pt-32.5 px-3 sm:px-4 md:px-0 mx-auto grid gap-4 sm:gap-6 md:gap-9 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-items-center auto-rows-[auto] md:auto-rows-[665px]">
      {CARDS.map((card) => (
        <article
          key={card.id}
          className="relative w-full max-w-[457px] h-auto md:h-full rounded-[24px] shadow-sm overflow-hidden flex flex-col opacity-100"
          style={{
            backgroundColor: card.bg,
            padding: 'clamp(28px, 5vw, 46px) clamp(20px, 4vw, 28px)',
          }}
        >
          {renderCard(card)}
        </article>
      ))}
    </section>
  );
};

export default ThreeImageCards;
