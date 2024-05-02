import { useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import CopyToClipboardButton from "./CoppyReferrCode/CoppyBtn";

function MainApp() {
  const [referrersCode, setReferrersCode] = useState("Referrer's Code here");
  const [quantity, setQuantity] = useState(1)

  const increaseQuantity = () => {
    
    setQuantity((pre)=> pre + 1)
  }
  const decreaseQuantity = () => {
    if (quantity !== 1) {
    setQuantity((pre) => pre - 1);
    }
  }
  
  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="container mx-auto">
        <Header />
        <div className="p-5 md:p-0">
          <div className="mx-auto py-5">
            <div className="block justify-between  gap-2 lg:flex">
              <div className="mt-2 w-full lg:w-2/3">
                <div className="relative h-full">
                  <div className="h-full rounded-3xl bg-gray-100 shadow-xl">
                    <div className="rounded-3xl">
                      <h3 className="bg-sentry overflow-hidden rounded-tl-3xl rounded-tr-3xl py-5 text-center text-2xl md:text-3xl">
                        Mint Your Keys
                      </h3>
                      <form className="mx-auto " data-gtm-form-interact-id="2">
                        <div className="rounded-bl-3xl rounded-br-3xl bg-gray-100 p-4 text-dark2 md:p-8">
                          <div className="pb-4">
                            <div className="w-full rounded-full bg-gray-700 ">
                              <div className="relative h-full">
                                <div className=" relative w-full rounded-full  bg-gray-600">
                                  <div className="p-1.5"></div>
                                  <div
                                    className="absolute top-[-200%] z-20 rounded-md bg-gray-300 px-1.5 text-xs text-dark2"
                                    data-tooltip-id="sold-out"
                                    style={{ left: "0px" }}
                                  >
                                    Tier 10 - SOLD OUT
                                  </div>
                                  <div
                                    data-tooltip-id="next-claim"
                                    className="absolute left-0 top-0 z-20 rounded-full bg-[#FFB200] p-1.5 text-center text-xs font-medium leading-none text-dark2"
                                    style={{ width: "27.25%" }}
                                  ></div>
                                  <div
                                    data-tooltip-id="next-claim"
                                    data-tooltip-place="bottom"
                                    className="absolute left-0 top-0 z-30 rounded-full p-1.5 text-center text-xs font-medium leading-none text-dark2"
                                    style={{ width: "100%", opacity: "0" }}
                                  ></div>
                                  <div className="absolute right-0 top-[-200%]  rounded-md bg-gray-300 px-1.5 text-xs text-dark2">
                                    Tier 11 - PROCESSING
                                  </div>
                                  <div
                                    className="absolute left-0 top-0  rounded-full bg-[#FFB200] p-1.5 text-center text-xs font-medium leading-none text-dark2"
                                    style={{ width: "27.25%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="my-1 text-center text-sm  text-grayThird">
                              545 / 2000 GEK (27.25%)
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center justify-between gap-5">
                            <div className="w-2/3">
                              <div className="flex items-center gap-2 pb-2">
                                <div>
                                  <img
                                    alt="sentry key"
                                    loading="lazy"
                                    width="24"
                                    height="24"
                                    decoding="async"
                                    data-nimg="1"
                                    src="/assets/images/logo/sentry-key.svg"
                                    style={{ color: "transparent" }}
                                  />
                                </div>
                                <div className="text-xl font-medium">
                                  Gelios Entry Key
                                </div>
                                <div>
                                  <div>
                                    <span className="group relative">
                                      <div className="absolute bottom-[calc(100%+0.5rem)] left-[50%] hidden w-auto -translate-x-[50%] group-hover:block">
                                        <div className="bottom-full right-0 whitespace-nowrap rounded bg-black px-4 py-1 text-xs text-white">
                                          Gelios Keys are required for users to
                                          access the Node Station.
                                        </div>
                                      </div>
                                      <img
                                        alt="warn"
                                        loading="lazy"
                                        width="16"
                                        height="16"
                                        decoding="async"
                                        data-nimg="1"
                                        src="/assets/images/icons/warning.svg"
                                        style={{ color: "transparent" }}
                                      />
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="break-words text-base font-normal text-grayThird">
                                The Key to asserting your eligibility for
                                network challenges and incentives.
                              </div>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 pb-2">
                                <div className="text-xl font-medium">
                                  Quantity
                                </div>
                                <div>
                                  <span className="group relative">
                                    <div className="absolute bottom-[calc(100%+0.5rem)] left-[50%] hidden w-auto -translate-x-[50%] group-hover:block">
                                      <div className="bottom-full right-0  whitespace-nowrap rounded bg-black px-4 py-1 text-xs text-white">
                                        <div className="max-w-5 break-words">
                                          1. Ensure to submit the transaction
                                          within 1 minute; after this time, your
                                          order will not be approved.
                                        </div>
                                        <div className="break-words">
                                          2. Minting in bulk may result in
                                          acquiring Keys across various tiers at
                                          varying prices.{" "}
                                        </div>
                                        <div className="break-words">
                                          3. Transactions using Bitcoin &amp;
                                          Ethereum network may experience slower
                                          confirmation times compared to
                                          Arbitrum network.
                                        </div>
                                        <div className="break-words">
                                          4. If sold-out, unconfirmed
                                          transactions will be refunded to the
                                          user&apos;s purchasing wallet.
                                        </div>{" "}
                                      </div>
                                    </div>
                                    <img
                                      alt="warn"
                                      loading="lazy"
                                      width="16"
                                      height="16"
                                      decoding="async"
                                      data-nimg="1"
                                      src="/assets/images/icons/warning.svg"
                                      style={{ color: "transparent" }}
                                    />
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div>
                                  <div className="relative flex max-w-[8rem] items-center">
                                    <button
                                      onClick={decreaseQuantity}
                                      type="button"
                                      className="0 h-11  rounded-s-lg bg-[#FFB200] p-3 text-white  focus:outline-none focus:ring-0 "
                                    >
                                      <svg
                                        className="h-3 w-3 "
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 2"
                                      >
                                        <path
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M1 1h16"
                                        ></path>
                                      </svg>
                                    </button>
                                    <input
                                      name="amount"
                                      type="number"
                                      value={quantity}
                                      min="1"
                                      max="100"
                                      id="amount"
                                      className="block h-11 w-full text-[#09090b] border-2 border-x-0 border-[#FFB200] text-center font-semibold text-dark2 hover:outline-none focus:border-primary  focus:outline-none focus:ring-0"
                                    />
                                    <button
                                      onClick={increaseQuantity}
                                      type="button"
                                      className="h-11 rounded-r-lg bg-[#FFB200] p-3 text-white  focus:outline-none focus:ring-0 focus:ring-gray-100"
                                    >
                                      <svg
                                        className="h-3 w-3 "
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 18"
                                      >
                                        <path
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M9 1v16M1 9h16"
                                        ></path>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr className="my-3 h-px border-0 bg-gray-200" />
                          <div>
                            <div className="pt-1">
                              <div>
                                <div className="flex justify-between">
                                  <div>
                                    <p className="font-semibold">
                                      {quantity} x Gelios Entry Key
                                    </p>
                                    <p className="flex items-center gap-1 text-gray80">
                                      <div>0.00713</div>BTC per key
                                    </p>
                                  </div>
                                  <div>
                                    <div className="relative h-full">
                                      <div className="relative   text-sm">
                                        <button
                                          className=" full-w min-w-[130px] rounded-lg  bg-white p-2 outline-none drop-shadow-none"
                                          type="button"
                                        >
                                          <div className="flex items-center  gap-2">
                                            <div>
                                              <img
                                                alt="token"
                                                loading="lazy"
                                                width="20"
                                                height="20"
                                                decoding="async"
                                                data-nimg="1"
                                                src="/assets/images/tokens/btc.png"
                                                style={{ color: "transparent" }}
                                              />
                                            </div>
                                            <div className="font-semibold ">
                                              Etherium
                                            </div>
                                            {/* <svg
                                              className="ms-3 h-2.5 w-2.5"
                                              aria-hidden="true"
                                              xmlns="http://www.w3.org/2000/svg"
                                              fill="none"
                                              viewBox="0 0 10 6"
                                            >
                                              <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m1 1 4 4 4-4"
                                              ></path>
                                            </svg> */}
                                          </div>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="flex min-w-[140px] items-center justify-between gap-1">
                                    <p>Pay:</p>
                                    <div className="flex items-center gap-1">
                                      <div>
                                        <p className="font-semibold">
                                          {(Number(quantity) * 0.00713).toFixed(5)}
                                          
                                        </p>
                                      </div>
                                      <p className="font-semibold"> BTC</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <hr className="my-3 h-px border-0 bg-gray-200 " />
                              <div className="my-4">
                                <div className="pb-2">
                                  <label
                                    htmlFor="output"
                                    className="flex items-center gap-1 capitalize"
                                  >
                                    Recipient Address
                                    <div>
                                      <span className="group relative z-50 ">
                                        <div className="absolute bottom-[calc(100%+0.5rem)] left-[100%] z-50 hidden w-auto  group-hover:block">
                                          <div className="bottom-full right-0 whitespace-nowrap rounded bg-black px-4 py-2 text-xs text-white">
                                            <div className="py-2">
                                              - Ensure to enter your own address
                                              to retain key ownership rights.
                                            </div>
                                            <div>
                                              - Recommendation: Link your EVM
                                              Wallet and use the corresponding
                                              EVM address as the Recipient
                                              Address for a seamless experience.
                                            </div>
                                          </div>
                                        </div>
                                        <img
                                          alt="warn"
                                          loading="lazy"
                                          width="16"
                                          height="16"
                                          decoding="async"
                                          data-nimg="1"
                                          src="/assets/images/icons/warning.svg"
                                          style={{ color: "transparent" }}
                                        />
                                      </span>
                                    </div>
                                  </label>
                                </div>
                                <div className="relative">
                                  <input
                                    name="output"
                                    type="text"
                                    id="output"
                                    className="block h-[44px] w-full rounded-xl border-none bg-gray-200   placeholder:text-gray80 focus:border-none focus:outline-none focus:ring-0"
                                    placeholder="Gelios Recipient Address"
                                  />
                                </div>
                              </div>
                              <hr className="my-3 h-px border-0 bg-gray-200 " />
                              <div className="pb-2">
                                <label htmlFor="refCode" className="capitalize">
                                  Referrer&apos;s Code
                                </label>
                              </div>
                              <div className="relative flex justify-between">
                                <input
                                  name="refCode"
                                  placeholder=""
                                  onChange={(e) =>
                                    setReferrersCode(e.target.value)
                                  }
                                  value={referrersCode}
                                  type="text"
                                  id="refCode"
                                  className="block  h-[44px] w-full  rounded-s-xl border-none bg-gray-200   placeholder:text-gray80 focus:border-none focus:outline-none focus:ring-0"
                                  data-gtm-form-interact-field-id="3"
                                />
                                <CopyToClipboardButton
                                  textToCopy={referrersCode}
                                />
                              </div>
                              <hr className="my-3 h-px border-0 bg-gray-200 " />
                              <div className="my-2 flex items-center">
                                <input
                                  id="check_agree"
                                  type="checkbox"
                                  name="agree"
                                  className="h-4 w-4 rounded border-[#FFB200]  bg-transparent  text-[#FFB200]  focus:bg-gelios focus:text-primary  focus:ring-0"
                                />
                                <label
                                  htmlFor="check_agree"
                                  className="ms-2 text-sm font-medium text-gray80"
                                >
                                  <div>
                                    I agree with the
                                    <a
                                      target="_blank"
                                      href="https://docs.gelios.io/gelios-keys-and-nodes/node-station/entry-node-agreement"
                                    >
                                      <span className="text-[#FFB200]">
                                        {" "}
                                        Entry Key Agreement
                                      </span>
                                    </a>{" "}
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center">
                            <div className="flex justify-center">
                              <button
                                type="button"
                                className=" min-w-[160px] lg:min-w-[222px] rounded-lg px-5 py-2   focus:outline-none  btn-linear text-white"
                              >
                                <div className="flex items-center justify-center gap-2">
                                  <div className="text-xl font-bold">
                                    {" "}
                                    <a
                                      target="_blank"
                                      href="https://chromewebstore.google.com/detail/unisat-wallet/ppbibelpcjmhbdihakflkdcoccbgbkpo"
                                    >
                                      <div className="flex items-center justify-center gap-2">
                                        <div className="flex items-center justify-center gap-2">
                                          <img
                                            alt="token"
                                            loading="lazy"
                                            width="20"
                                            height="20"
                                            decoding="async"
                                            data-nimg="1"
                                            src="/assets/images/icons/unisat.svg"
                                            style={{ color: "transparent" }}
                                          />
                                        </div>
                                        <p className="text-lg font-bold">
                                          {" "}
                                          Install UniSat
                                        </p>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 w-full lg:w-1/3">
                <div className="h-full rounded-3xl shadow-xl">
                  <div>
                    <h3 className="bg-sentry overflow-hidden rounded-tl-3xl rounded-tr-3xl py-5 text-center text-2xl md:text-3xl">
                      My Key Balance
                    </h3>
                    <div className="relative h-full">
                      <div className="flex h-full flex-col justify-center rounded-bl-3xl rounded-br-3xl  bg-gray-100 p-4 text-dark2 shadow-md md:p-8">
                        <div className="flex justify-between pb-2">
                          <div>Key Balance</div>
                          <div className="text-right text-grayThird">
                            <div>
                              {" "}
                              Entry Key
                              <br />
                              <span className="text-sm text-gray80">$</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between pb-2">
                          <div>Key Incentive Reward</div>
                          <div className="text-right text-grayThird">
                            <div>
                              N/A
                              <br />
                              <span className="text-sm text-gray80">$ N/A</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="text-grayThird">Key Farm Rewards</div>
                          <div>
                            <div className="text-right font-normal ">
                              N/A
                              <br />
                              <span className="text-sm text-gray80">$ N/A</span>
                            </div>
                          </div>
                        </div>
                        <hr className="my-4 h-px divide-x-2 border-0 bg-gray-200 " />
                        <div className="flex justify-between py-2">
                          <div>Total Reward Value</div>
                          <div className="text-right text-grayThird">
                            N/A
                            <br />
                            <span className="text-sm text-gray80">$ N/A</span>
                          </div>
                        </div>
                        <div className="flex justify-between pb-2">
                          <div>Locked Reward Value</div>
                          <div className="text-right text-grayThird">
                            N/A
                            <br />
                            <span className="text-sm text-gray80">$ N/A</span>
                          </div>
                        </div>
                        <div className="-mx-3">
                          <div className="bg-[#b16b1f] relative w-full rounded-3xl py-4">
                            <div className=" mx-auto flex w-full items-center text-white">
                              <div className="w-full px-5">
                                <div className="flex justify-between text-xl">
                                  <div className="flex items-center gap-1">
                                    <div data-tooltip-id="roi">
                                      <img
                                        alt="warn"
                                        loading="lazy"
                                        width="16"
                                        height="16"
                                        decoding="async"
                                        data-nimg="1"
                                        src="/assets/images/icons/warning.svg"
                                        style={{ color: "transparent" }}
                                      />
                                    </div>
                                    <div>ROI</div>
                                  </div>
                                  <div className="text-right text-sm">%</div>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <div className="flex items-center gap-1">
                                    <div data-tooltip-id="next-roi">
                                      <img
                                        alt="warn"
                                        loading="lazy"
                                        width="16"
                                        height="16"
                                        decoding="async"
                                        data-nimg="1"
                                        src="/assets/images/icons/warning.svg"
                                        style={{ color: "transparent" }}
                                      />
                                    </div>
                                    <div>Next Tier ROI</div>
                                  </div>
                                  <div className="text-right text-sm">%</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="py-2">
                          <div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <div className="text-black">
                                  My Referral Code:{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="my-2 flex justify-center">
                          <button
                            disabled=""
                            type="button"
                            className="min-w-[222px] rounded-lg px-5 py-2.5   focus:outline-none  bg-gray-500 text-gray-300"
                          >
                            Claim
                          </button>
                        </div>
                        <hr />
                        <div className="py-2 ">
                          <div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <div data-tooltip-id="total-gas-charged">
                                  <img
                                    alt="warn"
                                    loading="lazy"
                                    width="16"
                                    height="16"
                                    decoding="async"
                                    data-nimg="1"
                                    src="/assets/images/icons/warning.svg"
                                    style={{ color: "transparent" }}
                                  />
                                </div>
                                <div className="text-black">
                                  Total Gas Charged{" "}
                                </div>
                              </div>
                              <div className="flex items-center gap-2 text-right  font-normal text-gray80">
                                <div>21.74 gBTC</div>
                                <img
                                  alt="token"
                                  loading="lazy"
                                  width="20"
                                  height="20"
                                  decoding="async"
                                  data-nimg="1"
                                  src="/assets/images/tokens/btc.png"
                                  style={{ color: "transparent" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="py-1">
                          <div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <div data-tooltip-id="sharing-per-key">
                                  <img
                                    alt="warn"
                                    loading="lazy"
                                    width="16"
                                    height="16"
                                    decoding="async"
                                    data-nimg="1"
                                    src="/assets/images/icons/warning.svg"
                                    style={{ color: "transparent" }}
                                  />
                                </div>
                                <div className="text-black">
                                  Gas Sharing per Key{" "}
                                </div>
                              </div>
                              <div className="flex items-center gap-2 text-right  font-normal text-gray80">
                                <div>0.00138 gBTC</div>
                                <img
                                  alt="token"
                                  loading="lazy"
                                  width="20"
                                  height="20"
                                  decoding="async"
                                  data-nimg="1"
                                  src="/assets/images/tokens/btc.png"
                                  style={{ color: "transparent" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <div data-tooltip-id="my-gas-sharing">
                                <img
                                  alt="warn"
                                  loading="lazy"
                                  width="16"
                                  height="16"
                                  decoding="async"
                                  data-nimg="1"
                                  src="/assets/images/icons/warning.svg"
                                  style={{ color: "transparent" }}
                                />
                              </div>
                              <div className="text-black">My Gas Sharing </div>
                            </div>
                            <div className="flex items-center gap-2 text-right  font-normal text-gray80">
                              <button className="bg-roi-balance">
                                <div className="text-white">$0</div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <div className="col-start-3 col-end-4 row-start-3 row-end-5 mt-5 lg:mt-0">
                <div className="h-full overflow-x-auto rounded-3xl bg-gray-100  text-dark2 shadow-md">
                  <div className="relative">
                    <div className="relative h-full">
                      <table className="w-full overflow-hidden rounded-lg bg-gray-100 text-left">
                        <thead className="bg-white text-base font-semibold">
                          <tr className="text-gelios">
                            <th scope="col" className="w-1/4 px-6 py-2">
                              Date
                            </th>
                            <th
                              scope="col"
                              className="w-1/4 px-6 py-2 text-center"
                            >
                              Amount
                            </th>
                            <th
                              scope="col"
                              className="w-1/4 px-6 py-2 text-center"
                            >
                              Chain
                            </th>
                            <th
                              scope="col"
                              className="w-1/4 px-6 py-2 text-center"
                            >
                              Transaction
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan="4">
                              <div className="flex justify-center">
                                <div>
                                  <img
                                    alt="empty"
                                    loading="lazy"
                                    width="300"
                                    height="300"
                                    decoding="async"
                                    data-nimg="1"
                                    src="/assets/images/default/empty.svg"
                                    style={{ color: "transparent" }}
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            ZIndex: "9999",
            inset: "16px",
            pointerEvents: "none",
          }}
        ></div>
      </div>
      <Footer />
    </div>
  );
}

export default MainApp;
