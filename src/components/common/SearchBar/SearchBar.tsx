import { useFilter } from "@/provider/FilterProvider";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiChevronLeft, FiSearch, FiX, FiPlusCircle } from "react-icons/fi";

const SearchBar = () => {
  const [text, setText] = useState("");
  const [isOpen, setOpen] = useState(false);
  const hiddenTo = ["/new"];
  const {
    filter: { selected },
    changeFilter,
  } = useFilter();
  const router = useRouter();
  const isSmallScreen =
    typeof window !== "undefined" && window.screen.width <= 1024;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setText(val);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const val = (e.target as HTMLInputElement).value;
      setText(val);
      changeFilter("text", val);

      if (router.pathname !== "/") router.push("/");
    }
  };

  const handleClear = () => {
    changeFilter("text", "");
    setText("");
  };

  return (
    <div className="relative">
      {!isSmallScreen && !isOpen && (
        <>
          <FiSearch className="absolute top-0 bottom-0 left-1 my-auto text-gray-400" />
          <input
            aria-label="Search"
            className="!py-4 !px-6 laptop:w-60"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            id="search"
            placeholder="Search for pet..."
            type="text"
            value={text}
          />
          {text && (
            <FiX
              className="text-gray-500 hover:text-gray-700 absolute top-0 bottom-0 right-0 my-auto"
              onClick={handleClear}
              title="Clear Text"
            />
          )}
        </>
      )}
      {hiddenTo.includes(router.pathname)
        ? null
        : isSmallScreen && (
            <div className="flex space-x-6 items-center laptop:hidden">
              <FiSearch
                className="text-xl text-gray-500"
                onClick={() => setOpen(true)}
              />
              <FiPlusCircle
                className="text-xl text-primary-500"
                onClick={() => router.push("/new")}
              />
            </div>
          )}
      {isSmallScreen && isOpen && (
        <div className="fixed top-0 left-0 w-full h-14 bg-white z-10 px-4 flex items-center">
          <FiChevronLeft
            className="text-xl mr-4"
            onClick={() => setOpen(false)}
          />
          <div className="flex items-center relative w-full">
            <FiSearch className="absolute top-0 bottom-0 left-0 my-auto text-gray-400" />
            <input
              aria-label="Search"
              className="!py-4 !px-6 w-full h-full"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              id="search"
              placeholder="Search for pet..."
              type="text"
              value={text}
            />
            {text && (
              <FiX
                className="text-gray-500 hover:text-gray-700 absolute top-0 bottom-0 right-4 my-auto"
                onClick={handleClear}
                title="Clear Text"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
