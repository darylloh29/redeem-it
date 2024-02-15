import Papa from "papaparse";

type Callback = (data: any) => void;

const useFetch = () => {
  const fetchCSV = async (filePath: string, callback: Callback) => {
    const res = await fetch(filePath);
    const reader = res.body!.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder("UTF-8");
    const csvString = decoder.decode(result.value!);
    const { data } = Papa.parse(csvString, {
      header: true,
      dynamicTyping: true,
    });
    callback(data);
  };

  return { fetchCSV };
};

export default useFetch;
