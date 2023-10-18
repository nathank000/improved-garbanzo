export const fetchRemoteData = async () => {
  try {
    const response = await fetch("/data/app_info.json"); // Replace with the actual URL of your remote JSON file.
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data using fetch:", error);
    throw error;
  }
};
