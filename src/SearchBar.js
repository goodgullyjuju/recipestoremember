function SearchBar({ onSearch }) {
    return (
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={(e) => onSearch(e.target.value)}
      />
    );
  }
  