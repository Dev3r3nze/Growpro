export const fetchData = async () => {
  const response = await fetch("https://wp.growproexperience.com/wp-json/wp/v2/social");
  const data = await response.json();
  return data;
};
