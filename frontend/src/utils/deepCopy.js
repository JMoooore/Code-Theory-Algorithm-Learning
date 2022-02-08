export default function deepCopy(ref){
    return JSON.parse(JSON.stringify(ref))
}
