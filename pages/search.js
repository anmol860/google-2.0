import Header from "@/components/Header";
import Head from "next/head";
import { API_KEY, CONTEXT_KEY } from "../api";
import Response from "../Response";
import { useRouter } from "next/router";
import { SearchBody } from "@/components/SearchBody";
import { Footer } from "@/components/Footer";

const Search = ({ results }) => {
  const router = useRouter();

  console.log(results);
  return (
    <div className="dark:bg-[#121212]">
      <Head>
        <title>{`${router.query.term} - Google Search`}</title>
      </Head>

      <Header />

      <SearchBody results={results} />

      <footer
        className="grid w-full bg-gray-100
    text-sm text-gray-500
    dark:bg-[#30303030]"
      >
        <div
          className="px-8 py-3
        dark:text-[#e2e2e2]"
        >
          <p>United States</p>
        </div>
      </footer>
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((responce) => responce.json());

  return {
    props: {
      results: data,
    },
  };
}
