import { Pagination } from "./Pagination";

export const SearchBody = ({ results }) => {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p
        className="text-gray-600 text-md mb-5 mt-3
      dark:text-[#e6e6e671]"
      >
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results.items?.map((result) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="group">
            <a
              href={result.link}
              className="text-sm
            dark:text-[#d1d1d1]"
            >
              {result.formattedUrl}
            </a>
            <a href={result.link}>
              <h2
                className="truncate text-xl text-blue-800 group-hover:underline
              dark:text-blue-400"
              >
                {result.title}
              </h2>
            </a>
          </div>

          <p
            className="line-clamp-2
          dark:text-[#e1e1e1]"
          >
            {result.snippet}
          </p>
        </div>
      ))}

      <Pagination />
    </div>
  );
};