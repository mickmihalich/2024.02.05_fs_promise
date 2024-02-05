import { readFile } from 'fs/promises';

const logFile = async (filePath) => {
    const data = await readFile(filePath, 'utf8');
    console.log(data);
    return;     
};

export default logFile;