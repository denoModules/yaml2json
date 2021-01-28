import { parse } from "https://deno.land/std@0.63.0/encoding/yaml.ts";
const decoder = new TextDecoder("utf-8");
const load = async(filePath: string):Promise<any>=>{
    const file = await Deno.readFile(filePath);
    const yaml = decoder.decode(file);
    return await parse(yaml)
}
export const obj = async (filePath: string) => {
    const obj = await load(filePath)
    return JSON.parse(JSON.stringify(obj))
}
export const txt = async (filePath: string) => {
    const obj = await load(filePath)
    return JSON.stringify(obj)
}