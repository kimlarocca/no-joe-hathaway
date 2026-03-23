<template>
  <div>
    <!-- title with racing elements -->
    <section
      class="bg-gradient-to-br from-white via-yellow-50 to-white pt-6 pb-4 xl:pb-0 relative border-b-8 border-black"
    >
      <!-- Racing stripes background -->
      <div
        class="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-[#e51929] via-yellow-400 to-[#e51929]"
      ></div>
      <div
        class="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-[#e51929] via-yellow-400 to-[#e51929]"
      ></div>

      <!-- Diagonal accent stripes -->
      <div class="absolute inset-0 opacity-5">
        <div
          class="absolute top-0 left-1/4 w-32 h-full bg-[#e51929] transform -skew-x-12"
        ></div>
        <div
          class="absolute top-0 right-1/4 w-32 h-full bg-[#e51929] transform skew-x-12"
        ></div>
      </div>

      <svg
        viewBox="0 0 1000 160"
        width="100%"
        height="auto"
        style="
          display: block;
          margin: 0 auto;
          filter: drop-shadow(3px 3px 0 rgba(0, 0, 0, 0.2));
        "
        preserveAspectRatio="xMidYMid meet"
        aria-label="NO JOE HATHAWAY"
        class="relative z-10"
      >
        <text
          x="50%"
          y="85"
          text-anchor="middle"
          dominant-baseline="middle"
          font-family="var(--font-family-header, 'Oswald', Arial, sans-serif)"
          font-size="100"
          font-weight="700"
          style="text-transform: uppercase; letter-spacing: 0.05em"
        >
          <tspan fill="currentColor" stroke="black" stroke-width="2">NO</tspan>
          <tspan fill="#e51929" stroke="black" stroke-width="2">JOE</tspan>
          <tspan fill="currentColor" stroke="black" stroke-width="2">HATH</tspan>
          <tspan fill="#e51929" stroke="black" stroke-width="2">AWAY</tspan>
        </text>
      </svg>
    </section>

    <!-- Sticky Navigation Bar -->
    <nav class="md:sticky md:top-0 bg-black z-50 shadow-lg pb-2">
      <div class="container mx-auto p-4 relative">
        <p
          class="flex justify-center items-center gap-4 flex-col lg:flex-row flex-wrap font-black uppercase tracking-wider"
        >
          <span class="lg:hidden text-[#e51929]">⌄</span>
          <a
            href="#radical-hero"
            class="text-white hover:text-yellow-400 transition-colors transform hover:scale-110 cursor-pointer"
            >The "Radical" Hero</a
          >
          <span class="hidden lg:inline text-[#e51929]">»</span>
          <a
            href="#donors"
            class="text-white hover:text-yellow-400 transition-colors transform hover:scale-110 cursor-pointer"
            >The Donors</a
          >
          <span class="hidden lg:inline text-[#e51929]">»</span>
          <a
            href="#resumes"
            class="text-white hover:text-yellow-400 transition-colors transform hover:scale-110 cursor-pointer"
            >The Resumes</a
          >
          <span class="hidden lg:inline text-[#e51929]">»</span>
          <a
            href="#playbook"
            class="text-white hover:text-yellow-400 transition-colors transform hover:scale-110 cursor-pointer"
            >The Playbook</a
          >
          <!-- <span class="hidden lg:inline text-[#e51929]">»</span>
          <a
            href="#stay-informed"
            class="text-white hover:text-yellow-400 transition-colors transform hover:scale-110 cursor-pointer"
            >Stay Informed</a
          > -->
          <span class="lg:hidden text-[#e51929]">⌄</span>
        </p>
      </div>
    </nav>

    <!-- section 3: The "Radical" Hero -->
    <section
      id="radical-hero"
      class="bg-[#2d2d2d] text-white py-12 md:py-16 lg:py-24 relative overflow-hidden"
    >
      <!-- Diagonal racing stripes background -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute top-0 right-0 w-64 h-full bg-[#e51929] transform skew-x-12"
        ></div>
        <div
          class="absolute top-0 right-32 w-32 h-full bg-yellow-400 transform skew-x-12"
        ></div>
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-4 relative z-10">
        <!-- Headline with racing stripe -->
        <div class="relative mb-12">
          <div
            class="hidden md:block absolute -left-8 top-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-[#e51929] via-yellow-400 to-[#e51929]"
          ></div>
          <h2
            class="text-white text-center uppercase tracking-wider font-black transform -skew-x-2 border-y-4 border-[#e51929] py-4 bg-gradient-to-r from-transparent via-[#e51929]/20 to-transparent"
          >
            RADICAL JOE HATHAWAY EXCUSES FASCISM.
          </h2>
          <div
            class="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-[#e51929] via-yellow-400 to-[#e51929]"
          ></div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <!-- Left: Document Frame with Image -->
          <div class="flex justify-center items-start">
            <div class="relative transform hover:rotate-1 transition-transform">
              <div
                class="absolute inset-0 bg-gradient-to-br from-[#e51929] to-yellow-600 transform rotate-2"
              ></div>
              <div class="relative bg-white p-4 shadow-2xl border-4 border-black">
                <img
                  src="/images/hero.jpg"
                  alt="Joe in Racecar Suit"
                  class="w-full h-auto object-cover"
                />
                <!-- Checkered flag corner accent -->
                <div
                  class="absolute -bottom-2 -right-2 w-24 h-16"
                  style="
                    background: repeating-linear-gradient(
                      45deg,
                      black,
                      black 10px,
                      white 10px,
                      white 20px
                    );
                  "
                ></div>
              </div>
            </div>
          </div>

          <!-- Right: Content -->
          <div class="space-y-6">
            <!-- Pullquote with dynamic angle -->
            <blockquote
              class="border-l-8 border-[#e51929] pl-6 py-4 italic text-lg md:text-xl bg-gradient-to-r from-black to-transparent my-6 relative overflow-hidden"
            >
              <!-- Speed lines effect -->
              <div class="absolute right-0 top-0 bottom-0 w-32 opacity-20">
                <div
                  class="absolute top-1/4 right-0 w-full h-0.5 bg-yellow-400 transform -skew-x-45"
                ></div>
                <div
                  class="absolute top-2/4 right-0 w-full h-0.5 bg-yellow-400 transform -skew-x-45"
                ></div>
                <div
                  class="absolute top-3/4 right-0 w-full h-0.5 bg-yellow-400 transform -skew-x-45"
                ></div>
              </div>
              <p class="mb-2 text-white relative z-10">
                "Silence and hedging or political calculations in moments like this is
                simply not leadership."
              </p>
              <footer class="text-sm text-yellow-400 not-italic font-bold relative z-10">
                — Joe Hathaway, Unironically
              </footer>
            </blockquote>

            <!-- Manuscript Copy -->
            <div
              class="text-base md:text-lg leading-relaxed space-y-4 bg-black/30 p-6 border-t-4 border-yellow-400"
            >
              <p class="text-white">
                PR Joe plays a <strong>moderate</strong> while his party burns $1 billion
                every single day on unconstitutional wars of choice. He yells
                <strong>socialist</strong> at neighbors who want healthcare without
                bankruptcy, but when it counts, he hedges. While a cruel administration
                makes excuses for paramilitary forces that kidnap residents and shoot
                unarmed citizens, Joe offers nothing but respectful critiques. You can't
                be a moderate while enabling the rise of concentration camps in the next
                town over.
              </p>
            </div>

            <!-- The Ledger Widget with racing style -->
            <div
              class="bg-black border-4 border-[#e51929] p-6 mt-8 relative overflow-hidden transform hover:-skew-x-1 transition-transform"
            >
              <!-- Corner accent -->
              <div
                class="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-yellow-400 border-l-[40px] border-l-transparent"
              ></div>
              <h3
                class="mb-4 uppercase font-black text-yellow-400 text-xl tracking-wider"
              >
                THE QUESTIONS PR JOE WON'T ANSWER
              </h3>
              <ol class="space-y-3 text-sm md:text-base">
                <li class="flex">
                  <span class="font-bold text-[#e51929] mr-3 flex-shrink-0">1.</span>
                  <span>Do you support the $1B/day war in Iran?</span>
                </li>
                <li class="flex">
                  <span class="font-bold text-[#e51929] mr-3 flex-shrink-0">2.</span>
                  <span
                    >Did you ever do Public Relations for an Opioid product at Bayer or
                    Real Chemistry?</span
                  >
                </li>
                <li class="flex">
                  <span class="font-bold text-[#e51929] mr-3 flex-shrink-0">3.</span>
                  <span>Did you attend the January 6th riot in Washington D.C.?</span>
                </li>
                <li class="flex">
                  <span class="font-bold text-[#e51929] mr-3 flex-shrink-0">4.</span>
                  <span
                    >Do you support the
                    <a
                      href="https://www.citizensforethics.org/reports-investigations/crew-reports/at-least-33-pardoned-insurrectionists-face-other-criminal-charges-but-many-are-now-going-free/"
                      target="_blank"
                      class="text-white underline"
                      >pardons of January 6th insurrectionists</a
                    >, including those who assaulted New Jersey police officers like Brian
                    Sicknick?</span
                  >
                </li>
                <li class="flex">
                  <span class="font-bold text-[#e51929] mr-3 flex-shrink-0">5.</span>
                  <span
                    >Do you accept the
                    <strong>2020 Presidential election results</strong> and the
                    <strong>2024 NJ Governor election results</strong> as valid?</span
                  >
                </li>
                <li class="flex">
                  <span class="font-bold text-[#e51929] mr-3 flex-shrink-0">6.</span>
                  <span
                    >Why haven't you spoken for the victims of the Cranford Teen
                    Murders?</span
                  >
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- section 4: Joe for Donors, Not Neighbors -->
    <section
      id="donors"
      class="bg-black text-white py-12 md:py-16 lg:py-24 relative overflow-hidden"
    >
      <!-- Diagonal racing background -->
      <div class="absolute inset-0 opacity-5">
        <div
          class="absolute bottom-0 left-0 w-96 h-full bg-yellow-400 transform -skew-x-12"
        ></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <!-- Header with racing style -->
        <div class="relative mb-12">
          <div
            class="hidden md:block absolute -left-8 top-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-[#e51929] via-yellow-400 to-[#e51929]"
          ></div>
          <h2
            class="text-yellow-400 text-center uppercase tracking-wider font-black transform -skew-x-2 border-y-4 border-[#e51929] py-4 bg-gradient-to-r from-transparent via-[#e51929]/20 to-transparent"
          >
            JOE FOR DONORS, NOT NEIGHBORS.
          </h2>
          <div
            class="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-[#e51929] via-yellow-400 to-[#e51929]"
          ></div>
        </div>

        <!-- PACman Joe Game -->
        <div class="flex justify-center mb-12">
          <div class="relative w-full">
            <PacmanJoe />
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <!-- Main Content: 3 Cards -->
          <div class="lg:col-span-3 space-y-8">
            <!-- Card 1: PHARMA BRO JOE -->
            <div
              class="bg-gradient-to-br from-gray-900 to-black border-l-8 border-yellow-400 p-6 relative overflow-hidden group hover:transform hover:-skew-x-1 transition-all shadow-2xl"
            >
              <!-- Racing stripe accent -->
              <div
                class="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-[#e51929] to-yellow-400"
              ></div>
              <!-- Number badge -->
              <div
                class="absolute -top-3 -right-3 w-12 h-12 bg-[#e51929] border-2 border-yellow-400 flex items-center justify-center font-black text-xl text-white transform rotate-12"
              >
                !
              </div>
              <h3 class="text-yellow-400 mb-4 uppercase tracking-wider font-black">
                PHARMA BRO JOE
              </h3>
              <div class="space-y-3">
                <p class="font-bold text-white">
                  <span class="text-yellow-400">Fact:</span> Served as
                  <a
                    href="https://www.biospace.com/bayer-s-b-joseph-hathaway-b-receives-prweek-s-40-under-40-award"
                    target="_blank"
                    class="font-bold text-white underline hover:text-yellow-400"
                    >"Precinct Captain" for the Bayer Corporate PAC</a
                  >.
                </p>
                <p class="text-gray-300 leading-relaxed">
                  <span class="font-bold text-yellow-400">Exposure: </span>
                  <a
                    href="https://www.analiliafornj.com/"
                    target="_blank"
                    class="text-gray-300 font-bold underline hover:text-yellow-400"
                    >Unbought & Unbossed</a
                  >
                  Analilia Mejia refuses all corporate PAC money. Meanwhile, Pharma Bro
                  Joe acted as a corporate agent for a giant that used its PAC to buy
                  political influence while he was their "Captain."
                </p>
              </div>
            </div>

            <!-- Card 2: MAGA JOE -->
            <div
              class="bg-gradient-to-br from-gray-900 to-black border-l-8 border-yellow-400 p-6 relative overflow-hidden group hover:transform hover:-skew-x-1 transition-all shadow-2xl"
            >
              <!-- Racing stripe accent -->
              <div
                class="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-[#e51929] to-yellow-400"
              ></div>
              <!-- Number badge -->
              <div
                class="absolute -top-3 -right-3 w-12 h-12 bg-[#e51929] border-2 border-yellow-400 flex items-center justify-center font-black text-xl text-white transform rotate-12"
              >
                !
              </div>
              <h3 class="text-yellow-400 mb-4 uppercase tracking-wider font-black">
                MAGA JOE
              </h3>
              <div class="space-y-3">
                <p class="font-bold text-white">
                  <span class="text-yellow-400">Fact:</span> His colleagues passed the One
                  Big Bullshit Bill, exploding the national deficit by trillions without
                  once asking "how are we going to pay for it?"
                </p>
                <p class="text-gray-300 leading-relaxed">
                  <span class="font-bold text-yellow-400">Exposure:</span> He stays silent
                  on the
                  <a
                    href="https://gizmodo.com/trump-family-cryptocurrency-5-billion-richer-wlfi-price-2000652197"
                    target="_blank"
                    class="text-gray-300 underline hover:text-yellow-400"
                    >$5B Crypto Grift</a
                  >
                  and the
                  <a
                    href="https://www.factcheck.org/2025/05/unwrapping-qatars-400-million-winged-gift-to-trump/"
                    target="_blank"
                    class="text-gray-300 underline hover:text-yellow-400"
                    >illegal $300M Qatar Jet</a
                  >
                  while NJ families struggle to pay their mortgages.
                </p>
              </div>
            </div>

            <!-- Card 3: AIPAC JOE -->
            <div
              class="bg-gradient-to-br from-gray-900 to-black border-l-8 border-yellow-400 p-6 relative overflow-hidden group hover:transform hover:-skew-x-1 transition-all shadow-2xl"
            >
              <!-- Racing stripe accent -->
              <div
                class="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-[#e51929] to-yellow-400"
              ></div>
              <!-- Number badge -->
              <div
                class="absolute -top-3 -right-3 w-12 h-12 bg-[#e51929] border-2 border-yellow-400 flex items-center justify-center font-black text-xl text-white transform rotate-12"
              >
                !
              </div>
              <h3 class="text-yellow-400 mb-4 uppercase tracking-wider font-black">
                AIPAC JOE
              </h3>
              <div class="space-y-3">
                <p class="font-bold text-white">
                  <span class="text-yellow-400">Fact:</span> $2.3M spent to flood NJ-11
                  with mailers. Joe even proposed that all opponents join him in
                  <a
                    href="https://www.instagram.com/p/DSYCbScEbLh/"
                    target="_blank"
                    class="text-white font-bold underline hover:text-yellow-400"
                    >signing a pledge to the State of Israel</a
                  >.
                </p>
                <p class="text-gray-300 leading-relaxed">
                  <span class="font-bold text-yellow-400">Exposure:</span> Joe supports an
                  <a
                    href="https://theconversation.com/why-the-us-strikes-on-iran-are-illegal-and-can-set-a-troubling-precedent-259542"
                    target="_blank"
                    class="text-gray-300 underline hover:text-yellow-400"
                    >illegal war of choice</a
                  >
                  that costs
                  <a
                    href="https://theconversation.com/why-the-us-strikes-on-iran-are-illegal-and-can-set-a-troubling-precedent-259542"
                    target="_blank"
                    class="text-gray-300 font-bold underline hover:text-yellow-400"
                    >$1 Billion per day</a
                  >. This war serves Netanyahu and Trump, making all NJ-11 neighbors less
                  safe.
                </p>
              </div>
            </div>
          </div>

          <!-- Sidebar with racing style -->
          <div class="lg:col-span-1">
            <div
              class="bg-gradient-to-br from-yellow-400 to-yellow-500 text-black p-6 sticky top-20 border-4 border-black overflow-hidden shadow-2xl"
            >
              <!-- Racing corner accents -->
              <div
                class="absolute top-0 left-0 w-0 h-0 border-t-[30px] border-t-[#e51929] border-r-[30px] border-r-transparent"
              ></div>
              <div
                class="absolute bottom-0 right-0 w-0 h-0 border-b-[30px] border-b-[#e51929] border-l-[30px] border-l-transparent"
              ></div>
              <h3
                class="text-black mb-4 uppercase font-black tracking-wider text-center border-b-2 border-black pb-2"
              >
                Things They Pretended to Care About
              </h3>
              <ul class="space-y-2 text-sm font-bold">
                <li class="flex items-start hover:translate-x-1 transition-transform">
                  <span class="mr-2 text-[#e51929]">▸</span>
                  <span>No New Wars</span>
                </li>
                <li class="flex items-start hover:translate-x-1 transition-transform">
                  <span class="mr-2 text-[#e51929]">▸</span>
                  <span>States' Rights</span>
                </li>
                <li class="flex items-start hover:translate-x-1 transition-transform">
                  <span class="mr-2 text-[#e51929]">▸</span>
                  <span>Limited Executive Power</span>
                </li>
                <li class="flex items-start hover:translate-x-1 transition-transform">
                  <span class="mr-2 text-[#e51929]">▸</span>
                  <span>Dangers of Glyphosate</span>
                </li>
                <li class="flex items-start hover:translate-x-1 transition-transform">
                  <span class="mr-2 text-[#e51929]">▸</span>
                  <span>America First</span>
                </li>
                <li class="flex items-start hover:translate-x-1 transition-transform">
                  <span class="mr-2 text-[#e51929]">▸</span>
                  <span>All Lives</span>
                </li>
                <li class="flex items-start hover:translate-x-1 transition-transform">
                  <span class="mr-2 text-[#e51929]">▸</span>
                  <span>Dogs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- section 5: The Resumes -->
    <section
      id="resumes"
      class="bg-white py-12 md:py-16 lg:py-24 relative overflow-hidden"
    >
      <!-- Diagonal background elements -->
      <div
        class="absolute top-0 right-0 w-96 h-96 bg-yellow-400 opacity-10 transform rotate-45"
      ></div>

      <div class="container mx-auto px-4 relative z-10">
        <!-- Header with racing style -->
        <div class="relative mb-12">
          <div
            class="hidden md:block absolute -left-8 top-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-[#e51929] via-yellow-400 to-[#e51929]"
          ></div>
          <h2
            class="text-black text-center uppercase tracking-wider font-black transform -skew-x-2 border-y-4 border-[#e51929] py-4 bg-gradient-to-r from-transparent via-[#e51929]/20 to-transparent"
          >
            SELF-INTEREST VS. COMMUNITY SERVICE.
          </h2>
          <div
            class="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-[#e51929] via-yellow-400 to-[#e51929]"
          ></div>
        </div>

        <!-- Side-by-side split with angled divider -->
        <div class="relative grid grid-cols-1 md:grid-cols-2 gap-0 mb-12 shadow-2xl">
          <!-- Diagonal separator line -->
          <div
            class="hidden md:block absolute top-0 bottom-0 left-1/2 w-2 bg-gradient-to-b from-yellow-400 via-[#e51929] to-yellow-400 transform -translate-x-1/2 z-10"
          ></div>

          <!-- Left: WE ANALILIA (Blue/Grassroots) with racing elements -->
          <div
            class="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 md:p-12 relative overflow-hidden border-4 border-blue-900"
          >
            <!-- Corner accent -->
            <div
              class="absolute bottom-0 right-0 w-0 h-0 border-b-[60px] border-b-yellow-400 border-l-[60px] border-l-transparent"
            ></div>
            <!-- Racing number badge -->
            <div
              class="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 border-4 border-blue-900 rounded-full flex items-center justify-center font-black text-2xl text-blue-900 transform rotate-12 shadow-xl"
            >
              ✓
            </div>
            <h3 class="text-white mb-6 uppercase font-black tracking-wider">
              WE ANALILIA
            </h3>
            <p class="text-lg font-semibold mb-3 text-yellow-400 uppercase tracking-wide">
              Community First
            </p>
            <p class="leading-relaxed text-blue-50 font-medium">
              Spent the decade
              <a
                href="https://obamawhitehouse.archives.gov/blog/2015/04/24/my-parents-couldn-t-earn-sick-days-now-i-m-making-sure-everyone-new-jersey-can"
                target="_blank"
                class="text-blue-50 underline hover:text-yellow-400"
                >recognized by the White House</a
              >
              for winning Paid Sick Leave and leading the charge for the
              <a
                href="https://whyy.org/articles/emotional-testimony-as-15-minimum-wage-for-n-j-passes-first-legislative-stage/"
                target="_blank"
                class="text-blue-50 underline hover:text-yellow-400"
                >$15 Minimum Wage</a
              >
              in NJ.
            </p>
          </div>

          <!-- Right: ME JOE (Red Corporate) with racing elements -->
          <div
            class="bg-gradient-to-br from-[#e51929] to-red-900 text-white p-8 md:p-12 relative overflow-hidden border-4 border-black"
          >
            <!-- Corner accent -->
            <div
              class="absolute bottom-0 right-0 w-0 h-0 border-b-[60px] border-b-yellow-400 border-l-[60px] border-l-transparent"
            ></div>
            <!-- Racing number badge -->
            <div
              class="absolute -top-4 -left-4 w-16 h-16 bg-[#e51929] border-4 border-black rounded-full flex items-center justify-center font-black text-2xl text-white transform -rotate-12 shadow-xl"
            >
              ✗
            </div>
            <h3 class="text-white mb-6 uppercase font-black tracking-wider">ME JOE</h3>
            <p class="text-lg font-semibold mb-3 text-yellow-400 uppercase tracking-wide">
              Self-Interest
            </p>
            <p class="leading-relaxed text-gray-200 font-medium">
              Spent the decade climbing the ladder at Bayer and PR firms while serving as
              an aide to
              <a
                href="https://www.nj.com/politics/2017/01/christies_just_tied_a_nj_state_record_--_for_unpop.html"
                target="_blank"
                class="text-gray-200 underline hover:text-yellow-400"
                >Chris Christie</a
              >, the Governor who left office with a -67% net favorability following
              BridgeGate.
            </p>
          </div>
        </div>

        <!-- The Maturity Check: Carousel with racing style -->
        <div
          class="bg-gradient-to-br from-gray-100 to-gray-200 p-8 md:p-12 border-8 border-black relative overflow-hidden shadow-2xl"
        >
          <!-- Racing stripes in corners -->
          <div
            class="absolute top-0 left-0 w-32 h-2 bg-gradient-to-r from-[#e51929] to-yellow-400"
          ></div>
          <div
            class="absolute bottom-0 right-0 w-32 h-2 bg-gradient-to-r from-yellow-400 to-[#e51929]"
          ></div>

          <h3
            class="text-center mb-8 uppercase font-black text-[#2d2d2d] tracking-wider text-2xl border-b-4 border-[#e51929] pb-4"
          >
            The Maturity Check: A Scrapbook of Privilege
          </h3>

          <div class="relative max-w-4xl mx-auto">
            <!-- Carousel Container -->
            <div class="overflow-hidden">
              <div
                id="carousel"
                class="flex transition-transform duration-500 ease-in-out"
              >
                <!-- Slide 1 -->
                <div class="min-w-full flex flex-col items-center">
                  <img
                    src="/images/social-posts/Hathaway-Insta-Adversity.png"
                    alt="Social media post"
                    class="max-w-full h-auto max-h-96 object-contain mb-4 shadow-lg"
                  />
                </div>

                <!-- Slide 2 -->
                <div class="min-w-full flex flex-col items-center">
                  <img
                    src="/images/social-posts/Hathaway-Insta-FantasyFootball.png"
                    alt="Social media post"
                    class="max-w-full h-auto max-h-96 object-contain mb-4 shadow-lg"
                  />
                </div>

                <!-- Slide 3 -->
                <div class="min-w-full flex flex-col items-center">
                  <img
                    src="/images/social-posts/Hathaway-Insta-Leia.png"
                    alt="Social media post"
                    class="max-w-full h-auto max-h-96 object-contain mb-4 shadow-lg"
                  />
                </div>

                <!-- Slide 4 -->
                <div class="min-w-full flex flex-col items-center">
                  <img
                    src="/images/social-posts/Hathaway-Insta-MyPillow.png"
                    alt="Social media post"
                    class="max-w-full h-auto max-h-96 object-contain mb-4 shadow-lg"
                  />
                </div>

                <!-- Slide 5 -->
                <div class="min-w-full flex flex-col items-center">
                  <img
                    src="/images/social-posts/Hathaway-Insta-TotalBroKegster.png"
                    alt="Social media post"
                    class="max-w-full h-auto max-h-96 object-contain mb-4 shadow-lg"
                  />
                </div>

                <!-- Slide 6 -->
                <div class="min-w-full flex flex-col items-center">
                  <img
                    src="/images/social-posts/Hathaway-Newtown.jpg"
                    alt="Social media post"
                    class="max-w-full h-auto max-h-96 object-contain mb-4 shadow-lg"
                  />
                </div>

                <!-- Slide 7 -->
                <div class="min-w-full flex flex-col items-center">
                  <img
                    src="/images/social-posts/Hathaway-OldLadyPunch.jpg"
                    alt="Social media post"
                    class="max-w-full h-auto max-h-96 object-contain mb-4 shadow-lg"
                  />
                </div>

                <!-- Slide 8 -->
                <div class="min-w-full flex flex-col items-center">
                  <img
                    src="/images/social-posts/Hathaway-Rutgers.jpg"
                    alt="Social media post"
                    class="max-w-full h-auto max-h-96 object-contain mb-4 shadow-lg"
                  />
                </div>

                <!-- Slide 9 -->
                <div class="min-w-full flex flex-col items-center">
                  <img
                    src="/images/social-posts/Hathaway-Wheelchair.jpg"
                    alt="Social media post"
                    class="max-w-full h-auto max-h-96 object-contain mb-4 shadow-lg"
                  />
                </div>
              </div>
            </div>

            <!-- Navigation Buttons with racing style -->
            <button
              onclick="navigateCarousel(-1)"
              class="absolute left-0 top-1/2 -translate-y-1/2 bg-[#e51929] text-yellow-400 font-black text-3xl p-4 hover:bg-yellow-400 hover:text-[#e51929] transition-all border-4 border-black shadow-xl transform hover:scale-110"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              onclick="navigateCarousel(1)"
              class="absolute right-0 top-1/2 -translate-y-1/2 bg-[#e51929] text-yellow-400 font-black text-3xl p-4 hover:bg-yellow-400 hover:text-[#e51929] transition-all border-4 border-black shadow-xl transform hover:scale-110"
              aria-label="Next slide"
            >
              ›
            </button>

            <!-- Indicators with racing style -->
            <div class="flex justify-center gap-3 mt-6" id="carousel-indicators">
              <span
                class="w-3 h-3 bg-yellow-400 border-2 border-black transform rotate-45 transition-all"
                data-index="0"
              ></span>
              <span
                class="w-3 h-3 bg-[#e51929] border-2 border-black transform rotate-45 transition-all"
                data-index="1"
              ></span>
              <span
                class="w-3 h-3 bg-[#e51929] border-2 border-black transform rotate-45 transition-all"
                data-index="2"
              ></span>
              <span
                class="w-3 h-3 bg-[#e51929] border-2 border-black transform rotate-45 transition-all"
                data-index="3"
              ></span>
              <span
                class="w-3 h-3 bg-[#e51929] border-2 border-black transform rotate-45 transition-all"
                data-index="4"
              ></span>
              <span
                class="w-3 h-3 bg-[#e51929] border-2 border-black transform rotate-45 transition-all"
                data-index="5"
              ></span>
              <span
                class="w-3 h-3 bg-[#e51929] border-2 border-black transform rotate-45 transition-all"
                data-index="6"
              ></span>
              <span
                class="w-3 h-3 bg-[#e51929] border-2 border-black transform rotate-45 transition-all"
                data-index="7"
              ></span>
              <span
                class="w-3 h-3 bg-[#e51929] border-2 border-black transform rotate-45 transition-all"
                data-index="8"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- section 6: The Price of Joe's Silence -->
    <section
      id="playbook"
      class="bg-gradient-to-br from-gray-100 to-gray-300 py-12 md:py-16 lg:py-24 relative overflow-hidden"
    >
      <!-- Diagonal racing stripes -->
      <div class="absolute inset-0 opacity-20">
        <div
          class="absolute top-0 left-0 w-64 h-full bg-[#e51929] transform -skew-x-12"
        ></div>
        <div
          class="absolute top-0 left-32 w-32 h-full bg-yellow-400 transform -skew-x-12"
        ></div>
        <div
          class="absolute top-0 right-0 w-64 h-full bg-[#e51929] transform skew-x-12"
        ></div>
        <div
          class="absolute top-0 right-32 w-32 h-full bg-yellow-400 transform skew-x-12"
        ></div>
      </div>

      <!-- Top racing stripe bar -->
      <div
        class="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#e51929] via-yellow-400 to-[#e51929]"
      ></div>
      <!-- Bottom racing stripe bar -->
      <div
        class="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-[#e51929] via-yellow-400 to-[#e51929]"
      ></div>

      <!-- Paper texture effect -->
      <div class="absolute inset-0 opacity-5">
        <div
          class="absolute top-0 left-0 w-full h-full"
          style="
            background-image: repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 0, 0, 0.03) 2px,
              rgba(0, 0, 0, 0.03) 4px
            );
          "
        ></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <!-- Header with racing style -->
        <div class="relative mb-12">
          <div
            class="hidden md:block absolute -left-8 top-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-[#e51929] via-yellow-400 to-[#e51929]"
          ></div>
          <h2
            class="text-[#e51929] text-center uppercase tracking-wider font-black transform -skew-x-2 border-y-4 border-[#e51929] py-4 bg-gradient-to-r from-transparent via-[#e51929]/20 to-transparent"
          >
            WHO IS THE REAL EXTREMIST? THE PLAYBOOK JOE WON'T CONDEMN.
          </h2>
          <div
            class="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-[#e51929] via-yellow-400 to-[#e51929]"
          ></div>
        </div>

        <!-- Key Files Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- File 1: Wars of Choice -->
          <div
            class="bg-white border-4 border-[#e51929] p-6 relative shadow-2xl transform hover:-skew-x-1 transition-all"
          >
            <!-- Red pen circle accent -->
            <div
              class="absolute -top-3 -right-3 w-12 h-12 border-4 border-[#e51929] rounded-full bg-white flex items-center justify-center font-black text-xl text-[#e51929]"
            >
              ✎
            </div>
            <!-- File number -->
            <div
              class="absolute -top-4 -left-4 w-16 h-16 bg-black border-4 border-yellow-400 flex items-center justify-center font-black text-2xl text-yellow-400 shadow-xl"
            >
              01
            </div>
            <div class="pt-8">
              <h4
                class="text-[#e51929] font-black uppercase text-lg mb-3 border-b-2 border-[#e51929] pb-2"
              >
                Wars of Choice
              </h4>
              <p class="text-gray-800 font-medium leading-relaxed">
                $1B/day in Iran through
                <a
                  href="https://www.brennancenter.org/our-work/analysis-opinion/trumps-iran-strikes-are-unconstitutional"
                  target="_blank"
                  class="text-gray-800 underline hover:text-[#e51929]"
                  >unilateral executive power</a
                >.
              </p>
              <!-- Red pen underline effect -->
              <div class="mt-2 h-1 w-3/4 bg-[#e51929] opacity-40"></div>
            </div>
          </div>

          <!-- File 2: Paramilitary Power -->
          <div
            class="bg-white border-4 border-[#e51929] p-6 relative shadow-2xl transform hover:-skew-x-1 transition-all"
          >
            <!-- Red pen circle accent -->
            <div
              class="absolute -top-3 -right-3 w-12 h-12 border-4 border-[#e51929] rounded-full bg-white flex items-center justify-center font-black text-xl text-[#e51929]"
            >
              ✎
            </div>
            <!-- File number -->
            <div
              class="absolute -top-4 -left-4 w-16 h-16 bg-black border-4 border-yellow-400 flex items-center justify-center font-black text-2xl text-yellow-400 shadow-xl"
            >
              02
            </div>
            <div class="pt-8">
              <h4
                class="text-[#e51929] font-black uppercase text-lg mb-3 border-b-2 border-[#e51929] pb-2"
              >
                Paramilitary Power
              </h4>
              <p class="text-gray-800 font-medium leading-relaxed">
                Silence as
                <a
                  href="https://theconversation.com/ice-not-only-looks-and-acts-like-a-paramilitary-force-it-is-one-and-that-makes-it-harder-to-curb-274580"
                  target="_blank"
                  class="text-gray-800 underline hover:text-[#e51929]"
                  >ICE acts as an unaccountable paramilitary force</a
                >, justifying the murders of <strong>Renee Good</strong> and
                <strong>Alex Pretti</strong>.
              </p>
              <!-- Red pen underline effect -->
              <div class="mt-2 h-1 w-3/4 bg-[#e51929] opacity-40"></div>
            </div>
          </div>

          <!-- File 3: Judicial Erasure -->
          <div
            class="bg-white border-4 border-[#e51929] p-6 relative shadow-2xl transform hover:-skew-x-1 transition-all"
          >
            <!-- Red pen circle accent -->
            <div
              class="absolute -top-3 -right-3 w-12 h-12 border-4 border-[#e51929] rounded-full bg-white flex items-center justify-center font-black text-xl text-[#e51929]"
            >
              ✎
            </div>
            <!-- File number -->
            <div
              class="absolute -top-4 -left-4 w-16 h-16 bg-black border-4 border-yellow-400 flex items-center justify-center font-black text-2xl text-yellow-400 shadow-xl"
            >
              03
            </div>
            <div class="pt-8">
              <h4
                class="text-[#e51929] font-black uppercase text-lg mb-3 border-b-2 border-[#e51929] pb-2"
              >
                Judicial Erasure
              </h4>
              <p class="text-gray-800 font-medium leading-relaxed">
                Remaining silent while the administration
                <a
                  href="https://www.abajournal.com/news/article/nearly-200-former-judges-denounce-claim-that-courts-are-ignoring-supreme-court-orders"
                  target="_blank"
                  class="text-gray-800 underline hover:text-[#e51929]"
                  >ignores Supreme Court and Judicial orders</a
                >.
              </p>
              <!-- Red pen underline effect -->
              <div class="mt-2 h-1 w-3/4 bg-[#e51929] opacity-40"></div>
            </div>
          </div>

          <!-- File 4: Selective Outrage -->
          <div
            class="bg-white border-4 border-[#e51929] p-6 relative shadow-2xl transform hover:-skew-x-1 transition-all"
          >
            <!-- Red pen circle accent -->
            <div
              class="absolute -top-3 -right-3 w-12 h-12 border-4 border-[#e51929] rounded-full bg-white flex items-center justify-center font-black text-xl text-[#e51929]"
            >
              ✎
            </div>
            <!-- File number -->
            <div
              class="absolute -top-4 -left-4 w-16 h-16 bg-black border-4 border-yellow-400 flex items-center justify-center font-black text-2xl text-yellow-400 shadow-xl"
            >
              04
            </div>
            <div class="pt-8">
              <h4
                class="text-[#e51929] font-black uppercase text-lg mb-3 border-b-2 border-[#e51929] pb-2"
              >
                Selective Outrage
              </h4>
              <p class="text-gray-800 font-medium leading-relaxed">
                Speaking for Charlie Kirk while staying silent as an
                <a
                  href="https://www.cbsnews.com/news/us-iran-war-bombing-girls-school-assessment/"
                  target="_blank"
                  class="text-gray-800 underline hover:text-[#e51929]"
                  >Iranian girls' school is bombed</a
                >.
              </p>
              <!-- Red pen underline effect -->
              <div class="mt-2 h-1 w-3/4 bg-[#e51929] opacity-40"></div>
            </div>
          </div>

          <!-- File 5: Local Silence (spans full width on large screens) -->
          <div
            class="bg-white border-4 border-[#e51929] p-6 relative shadow-2xl transform hover:-skew-x-1 transition-all lg:col-span-2"
          >
            <!-- Red pen circle accent -->
            <div
              class="absolute -top-3 -right-3 w-12 h-12 border-4 border-[#e51929] rounded-full bg-white flex items-center justify-center font-black text-xl text-[#e51929]"
            >
              ✎
            </div>
            <!-- File number -->
            <div
              class="absolute -top-4 -left-4 w-16 h-16 bg-black border-4 border-yellow-400 flex items-center justify-center font-black text-2xl text-yellow-400 shadow-xl"
            >
              05
            </div>
            <div class="pt-8">
              <h4
                class="text-[#e51929] font-black uppercase text-lg mb-3 border-b-2 border-[#e51929] pb-2"
              >
                Local Silence
              </h4>
              <p class="text-gray-800 font-medium leading-relaxed">
                Refusing to speak for the victims of the
                <a
                  href="https://newjersey.news12.com/family-of-isabella-salas-speaks-out-for-first-time-since-fatal-hit-and-run"
                  target="_blank"
                  class="text-gray-800 underline hover:text-[#e51929]"
                  >Cranford Teen Murders</a
                >
                involving a radicalized supporter.
              </p>
              <!-- Red pen underline effect -->
              <div class="mt-2 h-1 w-3/4 bg-[#e51929] opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from "vue"

let currentSlide = 0
const totalSlides = 9

function navigateCarousel(direction) {
  currentSlide = Math.max(0, Math.min(totalSlides - 1, currentSlide + direction))
  const carousel = document.getElementById("carousel")
  if (carousel) {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`
    updateIndicators()
  }
}

function updateIndicators() {
  const indicators = document.querySelectorAll("#carousel-indicators span")
  indicators.forEach((indicator, index) => {
    if (index === currentSlide) {
      indicator.classList.remove("bg-[#e51929]")
      indicator.classList.add("bg-yellow-400")
    } else {
      indicator.classList.remove("bg-yellow-400")
      indicator.classList.add("bg-[#e51929]")
    }
  })
}

// Smooth scroll to section
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const navHeight = 80 // Approximate height of sticky nav
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - navHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}

// Make functions available globally for onclick handlers
onMounted(() => {
  if (typeof window !== "undefined") {
    window.navigateCarousel = navigateCarousel
  }
})
</script>

<style lang="scss" scoped>
:global(html) {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* Account for sticky nav */
}
</style>
