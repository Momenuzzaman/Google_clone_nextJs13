import SearchHeader from "@/components/SearchHeader";
import "./../globals.css";

const SearchLayout = ({ children }) => {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
};

export default SearchLayout;
