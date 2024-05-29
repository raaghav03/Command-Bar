interface SearchInputProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void; 
}
const SearchInput: React.FC<SearchInputProps> = ({ searchQuery, setSearchQuery }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }
    return (

        <div className="bg-white p-4">
            <input
                className="w-full focus:outline-none "
                type="text"
                placeholder="What do you need?"
                onChange={handleInputChange}
                value={searchQuery}
            />
        </div>
    );
};

export default SearchInput;