import * as fs from 'fs';
import * as path from 'path';
import * as util from "util";
import * as Buffer from "buffer";


const writeFile = util.promisify(fs.writeFile);
export const touch = (path:string, data: string  = "TS Superb") => {
    writeFile(path, '').then(() => console.log(`file has made successfully`)).catch(error =>console.log(error))
}