import { type IRestClient, restClient } from "@polygon.io/client-js";
import dayjs from "dayjs";

const futureTicker = "QQQ";
const backTesting = true;

const init = () => {
  const rest = restClient(process.env.POLY_API_KEY);
  return { rest };
};

const algo = async (rest: IRestClient) => {
  const now = dayjs();

  if (backTesting) now.subtract(2, "day");

  const response = await rest.stocks.aggregates(
    futureTicker,
    1,
    // "day",
    // "2023-05-01",
    // "2023-05-31"
    // "second",
    // now.subtract(13, "second").millisecond().toString(),
    // now.millisecond().toString()
  );

  console.log(response);
};

const main = async () => {
  const { rest } = init();

  await algo(rest);

  setInterval(() => {
    algo(rest);
  }, 13000);
};

main();
