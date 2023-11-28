interface SearchBarProps {
  handleCallback: any;
}

export function SearchBar(props: SearchBarProps) {
  const onTrigger = (e: any) => {
    e.preventDefault();
    // Call the parent callback function
    props.handleCallback(e.target.searchAddress.value);
  };

  return (
    <form onSubmit={onTrigger}>
      <input
        type='text'
        name='searchAddress'
        placeholder={`Search for free photos`}
      />
      <button type='submit' value='Submit' />
    </form>
  );
}
