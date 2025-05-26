import Papa from 'papaparse'

type Callback = (data: any) => void;

const useFetch = () => {

    const fetchData = async (filePath: string, Callback: Callback) => {

        const response = await fetch(filePath);
        const reader = response.body!.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder('utf-8');
        const csvData = decoder.decode(result.value!);

        const { data } = Papa.parse(csvData, {
            header: true,
            dynamicTyping: true,
        });
        Callback(data);
    }
    
    return { fetchData };


}

export default useFetch;